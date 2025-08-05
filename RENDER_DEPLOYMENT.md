# Render Deployment Guide for Portfolio

## 🚀 Deploy Your Portfolio to Render

Follow these steps to deploy your portfolio to Render:

### Step 1: Prepare Your Repository

1. **Push your portfolio to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Adithya87/my-portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy on Render

1. **Go to [Render.com](https://render.com)**
2. **Sign up/Login** (can use GitHub account)
3. **Click "New +" → "Web Service"**
4. **Connect your GitHub repository**
5. **Configure the deployment:**

   ```
   Name: adithya-portfolio
   Region: Choose closest to your location
   Branch: main
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

6. **Click "Create Web Service"**

### Step 3: Environment Variables (Optional)

If you need any environment variables, add them in the Render dashboard:

- Go to your service dashboard
- Click "Environment"
- Add any required variables

### Step 4: Custom Domain (Optional)

1. **In Render dashboard, go to "Settings"**
2. **Scroll to "Custom Domains"**
3. **Add your domain** (e.g., adithyachepuri.com)
4. **Update your domain's DNS** to point to Render

## 📁 Files Created for Deployment

✅ **package.json** - Node.js project configuration
✅ **server.js** - Express server to serve your portfolio
✅ **portfolio.html** - Your main portfolio file (already exists)
✅ **assets/** - Your assets folder (already exists)

## 🔧 Local Testing

Test your setup locally before deploying:

```bash
# Install dependencies
npm install

# Start the server
npm start

# Open http://localhost:3000 in your browser
```

## 🌐 After Deployment

Your portfolio will be available at:

- **Render URL**: `https://your-service-name.onrender.com`
- **Custom Domain** (if configured): `https://yourdomain.com`

## ✅ Features Included

- ✅ Express.js server for reliable hosting
- ✅ Static file serving for all assets
- ✅ Automatic HTTPS (Render provides this)
- ✅ Global CDN for fast loading
- ✅ Automatic deployments on GitHub pushes
- ✅ Free SSL certificate
- ✅ Professional subdomain

## 🛠️ Troubleshooting

**Build Failed?**

- Check that all files are committed to GitHub
- Ensure Node.js version compatibility (using 18+)

**Site Not Loading?**

- Check the Render logs in the dashboard
- Verify the start command is `npm start`

**Assets Not Loading?**

- Ensure the assets folder is included in your GitHub repo
- Check file paths are correct in your HTML

## 🎉 Next Steps

After deployment:

1. Test all functionality (contact form, project modals, etc.)
2. Update your resume/profiles with the new URL
3. Share your professional portfolio with the world!

Your portfolio is now production-ready and hosted on Render! 🚀
