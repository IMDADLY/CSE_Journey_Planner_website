# -------------------------------------------------------------
# Stage 1: Build the Frontend assets and Spring Boot JAR
# -------------------------------------------------------------
FROM maven:3.9.6-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy dependency definitions and build configurations
COPY pom.xml ./
COPY package.json package-lock.json ./
COPY webpack.config.js .babelrc ./

# Copy source code
COPY backend ./backend
COPY frontend ./frontend

# Build the unified Spring Boot JAR with frontend bundle
RUN mvn clean package -DskipTests

# -------------------------------------------------------------
# Stage 2: Lightweight Production JRE Runtime
# -------------------------------------------------------------
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

# Create a non-root user for security
RUN useradd -m -s /bin/bash appuser && chown -R appuser:appuser /app
USER appuser

# Copy the packaged executable JAR from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Environment defaults (Render and other cloud platforms inject $PORT dynamically)
ENV PORT=8080
EXPOSE 8080

# Execute Spring Boot application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
