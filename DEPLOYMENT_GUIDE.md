# 🚀 TCS NQT Prep Website - Deployment Guide

## 📋 What You Have

This is a **React + Vite** application with:
- iOS-style mobile-first design
- 5 navigation tabs (Home, Materials, Bundle, Payment, Profile)
- TCS NQT exam preparation content
- QR code payment system
- Score tracking and certificates

---

## 📦 Project Structure

```
your-project/
├── src/
│   ├── app/
│   │   ├── App.tsx                          # Main app component
│   │   └── components/
│   │       ├── BottomNavigation.tsx         # Navigation bar
│   │       ├── TabContent.tsx               # Main content container
│   │       ├── PaymentSection.tsx           # Payment page
│   │       ├── ProfileSection.tsx           # Profile/scores page
│   │       └── ui/                          # UI components (pre-built)
│   └── styles/
│       ├── index.css                        # Main styles
│       ├── tailwind.css                     # Tailwind config
│       ├── theme.css                        # Theme variables
│       └── fonts.css                        # Font imports
├── package.json                             # Dependencies
├── vite.config.ts                          # Vite configuration
└── index.html                              # Entry HTML file
```

---

## 🛠️ Method 1: Deploy on Vercel (RECOMMENDED - Free & Easy)

### Step 1: Download Your Code
1. Download all files from this project
2. Create a new folder on your computer (e.g., `tcs-nqt-website`)
3. Copy all files into this folder

### Step 2: Create index.html
Create a file called `index.html` in the root folder:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="TCS NQT Exam Preparation - Complete PDF Bundle">
    <title>TCS NQT Prep - Exam Materials & Resources</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Step 3: Create src/main.tsx
Create `src/main.tsx`:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Step 4: Install Git (if not installed)
- Download from: https://git-scm.com/downloads
- Install and restart your computer

### Step 5: Create GitHub Repository
1. Go to https://github.com
2. Sign up/Login
3. Click "New Repository"
4. Name it: `tcs-nqt-prep`
5. Click "Create Repository"

### Step 6: Upload Code to GitHub
Open terminal/command prompt in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/tcs-nqt-prep.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 7: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your `tcs-nqt-prep` repository
5. Framework Preset: **Vite**
6. Click "Deploy"
7. Wait 2-3 minutes ✅

**Your website will be live at:** `https://tcs-nqt-prep.vercel.app`

---

## 🛠️ Method 2: Deploy on Netlify (Free Alternative)

### Steps:
1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import existing project"
4. Select your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

**Your website will be live at:** `https://your-site.netlify.app`

---

## 🛠️ Method 3: Deploy on Your Own Server

### Step 1: Build the Project Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with your compiled website.

### Step 2: Upload to Your Server

#### Option A: Using cPanel
1. Login to your cPanel
2. Go to File Manager
3. Navigate to `public_html`
4. Upload all files from the `dist` folder
5. Done! Visit your domain

#### Option B: Using FTP
1. Open FileZilla (download from https://filezilla-project.org/)
2. Connect to your server (Host, Username, Password)
3. Navigate to `public_html` or `www`
4. Upload all files from `dist` folder
5. Done!

---

## 🛠️ Method 4: Run Locally for Testing

### Prerequisites:
- Install Node.js from https://nodejs.org (LTS version)

### Steps:

```bash
# Navigate to your project folder
cd tcs-nqt-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and go to: `http://localhost:5173`

---

## 📝 Important Files You Need

### Essential Files:
1. ✅ `package.json` - Dependencies
2. ✅ `vite.config.ts` - Build configuration
3. ✅ `index.html` - Entry point
4. ✅ `src/main.tsx` - React entry
5. ✅ `src/app/App.tsx` - Main app
6. ✅ All components in `src/app/components/`
7. ✅ All styles in `src/styles/`

### Files You Can Ignore:
- `node_modules/` (created by npm install)
- `dist/` (created by npm run build)
- `.git/` (created by git init)

---

## 🔧 Customization Guide

### Change Phone Number for Payments:
Edit `src/app/components/PaymentSection.tsx`:

```typescript
const PAYMENT_PHONE = "+91 YOUR_NUMBER_HERE";
const WHATSAPP_NUMBER = "+91YOUR_NUMBER_HERE";
```

### Change Pricing:
Edit `src/app/components/TabContent.tsx` (Bundle section) and `PaymentSection.tsx`

### Add Your QR Code:
Replace the `QR_CODE_PLACEHOLDER` in `PaymentSection.tsx` with your actual QR code image URL

### Change Colors/Theme:
Edit `src/styles/theme.css`

---

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
npm install
```

### Error: "Cannot find package.json"
Make sure you're in the correct folder:
```bash
cd tcs-nqt-website
```

### Build Errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Website not loading on mobile:
Check that your meta viewport tag is in index.html:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 📱 Testing on Mobile

### Method 1: Use Vercel/Netlify URL
Just open the deployed URL on your phone browser

### Method 2: Local Testing
1. Find your computer's IP address
   - Windows: `ipconfig` in cmd
   - Mac/Linux: `ifconfig` in terminal
2. Run `npm run dev`
3. On your phone browser, go to: `http://YOUR_IP:5173`

---

## 🎯 Next Steps After Deployment

1. **Custom Domain**: 
   - Buy a domain from Namecheap/GoDaddy
   - Connect it to Vercel/Netlify in settings

2. **Analytics**:
   - Add Google Analytics
   - Track user behavior

3. **Backend Integration**:
   - Set up a backend API for payment verification
   - Add email notifications
   - Store user data in a database

4. **SEO Optimization**:
   - Add meta tags for social sharing
   - Create sitemap
   - Submit to Google Search Console

---

## 💡 Recommended: Vercel for Beginners

**Why Vercel?**
- ✅ Completely FREE for small projects
- ✅ Automatic HTTPS
- ✅ Auto-deployment on every git push
- ✅ Global CDN (fast worldwide)
- ✅ Custom domain support
- ✅ Easy to use
- ✅ Perfect for React apps

---

## 📞 Support

If you need help:
1. Check this guide again
2. Google your specific error message
3. Ask on Stack Overflow
4. Check Vercel/Netlify documentation

---

## ✅ Quick Checklist

- [ ] Downloaded all project files
- [ ] Created `index.html` and `src/main.tsx`
- [ ] Installed Node.js
- [ ] Ran `npm install` successfully
- [ ] Tested locally with `npm run dev`
- [ ] Created GitHub account
- [ ] Pushed code to GitHub
- [ ] Deployed on Vercel/Netlify
- [ ] Website is live!
- [ ] Tested on mobile phone
- [ ] Updated payment phone numbers
- [ ] Added your QR code

---

**🎉 Congratulations! Your TCS NQT Prep website is now live!**
