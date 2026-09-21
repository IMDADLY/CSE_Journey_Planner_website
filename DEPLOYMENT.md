# Deployment Guide — CSE Specialization Journey Planner

This project is configured for **Continuous Deployment (CI/CD)**. Every time you run `git push origin main`, both your frontend on **Vercel** and backend on **Render** will automatically update with zero manual intervention.

---

## Architecture Overview

| Component | Platform | Configuration |
| :--- | :--- | :--- |
| **Frontend (React UI)** | **Vercel** | `vercel.json` (Static build + edge proxy) |
| **Backend (Spring Boot)** | **Render** | `Dockerfile` & `render.yaml` (Java 17 runtime) |
| **Database** | **MongoDB Atlas** | Managed Cloud MongoDB (Already configured) |

---

## Step 1: Deploy Backend to Render

1. Create a free account or log in to [Render.com](https://dashboard.render.com).
2. Click **New +** (top right) $\rightarrow$ **Web Service**.
3. Connect your GitHub repository (`CSE_Journey_Planner_website`).
4. Configure the settings:
   - **Name**: `cse-planner-backend` (or any name you prefer)
   - **Region**: Oregon (US West) or closest to you
   - **Runtime**: **Docker**
   - **Instance Type**: **Free**
5. *(Optional)* Under **Environment Variables**, add:
   - `SPRING_DATA_MONGODB_URI`: `mongodb+srv://helloimdadu_db_user:5AGbeJ8TsedXXtIt@cluster0.emiuxbo.mongodb.net/?appName=Cluster0`
6. Click **Deploy Web Service**.
7. Once deployed, Render will provide your backend URL (e.g. `https://cse-planner-backend.onrender.com`).
   - Test it by visiting: `https://<your-render-url>/api/specializations`.

---

## Step 2: Deploy Frontend to Vercel

1. Create a free account or log in to [Vercel.com](https://vercel.com).
2. Click **Add New...** $\rightarrow$ **Project**.
3. Import your GitHub repository (`CSE_Journey_Planner_website`).
4. In `vercel.json`, update the `destination` URL to match your Render backend URL:
   ```json
   "rewrites": [
     {
       "source": "/api/:match*",
       "destination": "https://<your-render-url>.onrender.com/api/:match*"
     },
     {
       "source": "/((?!api/).*)",
       "destination": "/index.html"
     }
   ]
   ```
5. Leave the framework preset as **Other** (Vercel automatically detects `vercel.json`).
6. Click **Deploy**.
7. Vercel will build and launch your website on a global edge URL (e.g. `https://cse-journey-planner.vercel.app`).

---

## How Automatic Updates Work (CI/CD)

Whenever you make future code changes:
```bash
git add .
git commit -m "Add new features"
git push origin main
```
1. **Vercel** automatically detects the commit, runs `npm run build`, and deploys the new React frontend globally within seconds.
2. **Render** automatically detects the commit, builds the `Dockerfile`, and redeploys the Spring Boot backend with zero downtime.
