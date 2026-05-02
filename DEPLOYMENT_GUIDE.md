# Diya Pharma — Deployment Guide (Netlify + Vercel + Supabase)

Your codebase is now split into two main directories:
1. `frontend/` (To be deployed on Netlify)
2. `backend/` (To be deployed on Vercel)

Follow these exact steps to take your platform live!

---

## Step 1: Set up the Database (Supabase)

1. Go to [Supabase](https://supabase.com/) and create an account/project.
2. Once your project is created, go to the **SQL Editor** on the left menu.
3. Open the `supabase_schema.sql` file (located in your Diya Pharma folder).
4. Copy all the text inside `supabase_schema.sql` and paste it into the Supabase SQL Editor.
5. Click **Run**. This will create your tables (`users`, `products`, `orders`, etc.) and automatically insert your 52 products into the database.

> **Get your API Keys:** Go to **Project Settings** -> **API**. You will need the **Project URL** and the **anon `public` key** for the next step.

---

## Step 2: Deploy the Backend (Vercel)

1. You need to push your code to GitHub.
   - Create a new repository on GitHub.
   - Upload all the files inside your `Diya Pharma` folder to this repository.
2. Go to [Vercel](https://vercel.com/) and log in with GitHub.
3. Click **Add New** -> **Project** and import your GitHub repository.
4. **CRITICAL Configuration:**
   - **Framework Preset:** Leave as `Other`.
   - **Root Directory:** Click `Edit` and select `backend`.
   - **Environment Variables:** Add the following two variables from Step 1:
     - `SUPABASE_URL` = (Your Supabase Project URL)
     - `SUPABASE_ANON_KEY` = (Your Supabase anon public key)
5. Click **Deploy**. Vercel will automatically install the Node.js packages and launch your Express API.
6. Once deployed, copy the **Vercel Domains URL** (e.g., `https://diya-pharma-backend.vercel.app`).

---

## Step 3: Connect Frontend to Backend

Before deploying the frontend, we need to tell it where the backend lives.
1. Open the file `frontend/js/config.js` on your computer.
2. Replace the placeholder URL with your actual Vercel Domain URL from Step 2:
   ```javascript
   const CONFIG = {
     API_BASE_URL: 'https://YOUR-VERCEL-URL.vercel.app/api'
   };
   ```
3. Save the file and push the changes to GitHub.

---

## Step 4: Deploy the Frontend (Netlify)

1. Go to [Netlify](https://www.netlify.com/) and log in with GitHub.
2. Click **Add new site** -> **Import an existing project** from GitHub.
3. Select your GitHub repository.
4. **CRITICAL Configuration:**
   - **Base directory:** Type `frontend`
   - **Build command:** Leave empty
   - **Publish directory:** Type `frontend` (or leave as default if it picks it up)
5. Click **Deploy Site**.

**Success!** Your Netlify URL is now the live, customer-facing website. It securely communicates with your Vercel API, which securely reads/writes to your Supabase database.
