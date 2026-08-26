# Spring Boot, React, and MongoDB Project Archetype

Welcome to the **Spring Boot, React, and MongoDB Project Archetype**! This archetype is designed to help you bootstrap small - medium sized projects that utilize Spring Boot, Java 17, React, and MongoDB with ease. By using this archetype, you'll be able to quickly set up a project with a clear separation between the backend and frontend, following best practices for modern JavaScript and Java development.

## Directory Structure

The project structure is organized to maintain a clear separation between the backend and frontend:


- **backend/**: Contains the Spring Boot application (Java 17).
- **frontend/**: Contains the React application, built and bundled with Webpack.

## Customizing the Project

### 1. Changing the Group ID

To make this project your own, you should first change the `groupId` in the `pom.xml` file. This will uniquely identify your project within a Maven repository.

**Steps to Change the Group ID:**

1. Open the `pom.xml` file located in the `backend` directory.
2. Find the `<groupId>` tag near the top of the file.
3. Replace the value with your desired group ID.

For example:

```xml
<groupId>com.yourcompany.projectname</groupId>
```
4. Update the package structure in your source code to reflect this new group ID. For example, if you change the group ID to `com.yourcompany.projectname`, ensure your Java packages follow this structure.

### 2. Configuring MongoDB

To connect your application to a MongoDB database, you need to update the `application.properties` file with your MongoDB connection details.

**Steps to Configure MongoDB:**

1. Open the `application.properties` file located in `backend/src/main/resources/`.
2. Add the MongoDB connection string and database name:

```properties
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster-url>/<database>
spring.data.mongodb.database=<database>
```
Replace `<username>`, `<password>`, `<cluster-url>`, and `<database>` with your actual MongoDB credentials and database name.

### Building and Running the Project

Once you've customized the project, you can build and run it using the following commands:
Note: Ensure you've added database properties to application.properties file!
#### 1. Build the Project
To build the backend and frontend, run the following commands:
``` bash
mvn clean install
```
```bash
npm run build
```

#### 2. Running the Project
After building, you can run the backend Spring Boot application using:
```bash
mvn spring-boot:run
```

The frontend can be served running:
```bash
npm run watch
```

#### 3. Testing the Project
Once the project is running, open up a browser and navigate to `localhost:8082` and you should see text saying `All is Good!`.

`Note:` Ensure that you have installed all necessary dependencies for both the backend (`mvn install`) and the frontend (`npm install`) before running the project.
Once your project is up and running ensure you embed security by removing the applications.properties file or configuring other options such as Secrets Managers, etc.

#### 4. Installing the Archetype Locally
1. Prepare the Project: remove any unnecessary or environment specific files that may have been generated (`target/`, `.idea/`, `.vscode/`, etc).
2. Create the Maven Archetype. Navigate to the project root directory in the terminal and run:
```bash
mvn archetype:create-from-project
```
3. Navigate to the generated archetype directory:
```bash
cd target/generated-sources/archetype
```
4. Customize the archetype if you wish (include specific files, set-up placeholders, etc.)
5. Install the Archetype Locally
```bash
mvn clean install
```
This command will install the archetype into your local Maven repository, making it available for use in future projects.

6. Generate a new project using the archetype:
```bash
 mvn archetype:generate -DarchetypeCatalog=local
```
Select the archetype from the list and provide the necessary details (groupId, artifactId, version, etc.) for the new project

### Conclusion
This archetype is a powerful starting point for projects that combine Spring Boot, React, and MongoDB. By following the steps outlined in this README, you can quickly set up and customize your project to suit your needs. Happy coding!

Thanks, Wali!

