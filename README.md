# CSE B.Tech Planner Website

> 🚧 This project is currently **in progress** (work in progress).

Implemented using:
1. Front-end : React (Javascript)
2. Back-end : Java , Spring Boot
3. Database : MongoDB

## Run locally

Requires JDK 25 (or a compatible newer JDK), Maven, Node.js 20+, and a MongoDB Atlas database.

From the project root:

```bash
npm install
npm run build:all
export SPRING_DATA_MONGODB_URI='mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER/cse_journey_planner'
mvn spring-boot:run
```

Replace the placeholders with your own Atlas credentials and cluster address, and allow your current IP in Atlas Network Access. Open http://localhost:8080 after startup.

The MongoDB environment variable is required; there is no embedded credential or connection-string fallback. Never commit real connection strings. `.env` files are ignored by Git but are not automatically loaded by Spring Boot.

If a credential has previously been committed or shared, rotate it in Atlas Database Access. Removing it from current files does not remove it from Git history.
