# 🚀 AURA Intelligence Portfolio - Deployment Guide

This guide will walk you through deploying your state-of-the-art AI-powered portfolio to production.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ GitHub account with repository access
- ✅ Google Cloud Platform account (for backend)
- ✅ API keys for external services
- ✅ Domain name (optional but recommended)

## 🔑 Required API Keys

### 1. Google Gemini API Key
- Visit [Google AI Studio](https://aistudio.google.com/)
- Create a new project
- Generate an API key
- Copy the key for later use

### 2. Mapbox Access Token
- Sign up at [Mapbox](https://www.mapbox.com/)
- Go to your account page
- Create an access token
- Copy the token for later use

### 3. Google Cloud Platform (Optional)
- Create a GCP project
- Enable Cloud Run API
- Create a service account
- Download the service account key

### 4. M-Pesa API (Optional)
- Register at [Safaricom Developer Portal](https://developer.safaricom.co.ke/)
- Create an app and get credentials

## 🚀 Deployment Steps

### Step 1: Repository Setup

1. **Create GitHub Repository**
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit: AURA Intelligence Portfolio"
   
   # Add remote origin
   git remote add origin https://github.com/jmsmuigai/aura-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source
   - Save settings

### Step 2: Configure GitHub Secrets

Go to your repository Settings → Secrets and variables → Actions, and add:

```
GEMINI_API_KEY=your_gemini_api_key_here
MAPBOX_TOKEN=your_mapbox_access_token_here
GA_TRACKING_ID=G-XXXXXXXXXX (optional)
SECRET_KEY=your-secret-key-here
```

### Step 3: Deploy Frontend (Automatic)

The frontend will automatically deploy to GitHub Pages when you push to main branch:

```bash
# Make any changes and push
git add .
git commit -m "Deploy frontend"
git push origin main
```

**Frontend URL**: `https://jmsmuigai.github.io/aura-portfolio`

### Step 4: Deploy Backend (Optional)

For the backend API, you have two options:

#### Option A: Deploy to Google Cloud Run (Recommended)

1. **Set up Google Cloud Project**
   ```bash
   # Install gcloud CLI
   # Configure authentication
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

2. **Add GCP secrets to GitHub**
   ```
   GCP_PROJECT_ID=your-gcp-project-id
   GCP_SA_KEY=your-service-account-key-json
   ```

3. **Deploy via GitHub Actions**
   - Push changes to trigger deployment
   - Monitor the Actions tab for deployment status

#### Option B: Deploy to Heroku (Alternative)

1. **Install Heroku CLI**
   ```bash
   # Create Heroku app
   heroku create aura-api
   
   # Set environment variables
   heroku config:set GEMINI_API_KEY=your_key
   heroku config:set SECRET_KEY=your_secret
   
   # Deploy
   git subtree push --prefix backend heroku main
   ```

### Step 5: Configure Custom Domain (Optional)

1. **Add custom domain to GitHub Pages**
   - Go to repository Settings → Pages
   - Add your custom domain
   - Update DNS records

2. **Update API endpoints**
   - Update `VITE_API_BASE_URL` in environment variables
   - Update CORS settings in backend

## 🔧 Environment Configuration

### Frontend Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://aura-api-6r7v4l4qsq-uc.a.run.app/api
VITE_MAPBOX_TOKEN=your_mapbox_token
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_APP_NAME=AURA Intelligence
VITE_APP_VERSION=2.0.0
```

### Backend Environment Variables

For production deployment, set these in your hosting platform:

```env
GEMINI_API_KEY=your_gemini_api_key
SECRET_KEY=your_secret_key
MPESA_CONSUMER_KEY=your_mpesa_key (optional)
MPESA_CONSUMER_SECRET=your_mpesa_secret (optional)
```

## 🧪 Testing Deployment

### 1. Frontend Testing
```bash
# Test locally
npm run build
npm run preview

# Check deployed site
curl -I https://jmsmuigai.github.io/aura-portfolio
```

### 2. Backend Testing
```bash
# Test API endpoints
curl https://aura-api-6r7v4l4qsq-uc.a.run.app/api/health
curl https://aura-api-6r7v4l4qsq-uc.a.run.app/api/projects
```

### 3. Integration Testing
- Test chatbot functionality
- Verify map loading
- Check 3D graphics performance
- Test responsive design

## 📊 Monitoring & Analytics

### 1. Google Analytics Setup
- Create GA4 property
- Add tracking ID to environment variables
- Verify data collection

### 2. Error Monitoring
- Set up Sentry for error tracking
- Monitor API performance
- Check deployment logs

### 3. Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Check API response times

## 🔒 Security Checklist

- ✅ HTTPS enabled
- ✅ API keys secured
- ✅ CORS configured
- ✅ Rate limiting enabled
- ✅ Input validation
- ✅ Security headers set

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **API Connection Issues**
   - Check CORS settings
   - Verify API endpoint URLs
   - Check network connectivity

3. **Map Not Loading**
   - Verify Mapbox token
   - Check token permissions
   - Verify quota limits

4. **Chatbot Not Responding**
   - Check Gemini API key
   - Verify API quotas
   - Check network requests

## 📈 Performance Optimization

### 1. Frontend Optimization
- Enable gzip compression
- Optimize images
- Use CDN for static assets
- Implement caching strategies

### 2. Backend Optimization
- Enable caching
- Optimize database queries
- Use connection pooling
- Implement rate limiting

## 🔄 Continuous Deployment

The setup includes automatic deployment:

1. **Frontend**: Deploys on every push to main branch
2. **Backend**: Deploys when backend files change
3. **Testing**: Runs automated tests before deployment
4. **Monitoring**: Continuous health checks

## 📞 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Review the deployment guide
3. Contact support: jmsmuigai@gmail.com

## 🎉 Success!

Once deployed, your AURA Intelligence portfolio will be live at:
- **Frontend**: https://jmsmuigai.github.io/aura-portfolio
- **Backend API**: https://aura-api-6r7v4l4qsq-uc.a.run.app

Your state-of-the-art AI-powered portfolio is now ready to impress potential clients and showcase your GeoAI expertise!
