# ⚡ Quick Start Guide - 5 Minutes to Live Website

## 🎯 Goal
Get your TCS NQT Prep website live on the internet in 5 minutes.

---

## 🚀 Fastest Way: Vercel (No Coding Required)

### ⏱️ Time: 5 minutes

### Step 1️⃣: Download Your Code (30 seconds)
Click the **Download** button in Figma Make to get a ZIP file.

Extract it to a folder like `tcs-nqt-website`.

### Step 2️⃣: Create GitHub Account (1 minute)
- Go to https://github.com/signup
- Create a free account

### Step 3️⃣: Install GitHub Desktop (1 minute)
- Download: https://desktop.github.com
- Install and sign in with your GitHub account

### Step 4️⃣: Upload Your Code (1 minute)
1. Open GitHub Desktop
2. Click **"Add"** → **"Add Existing Repository"**
3. Browse to your `tcs-nqt-website` folder
4. Click **"create a repository"** when prompted
5. Click **"Publish repository"**
6. Make it public or private (your choice)
7. Click **"Publish repository"**

### Step 5️⃣: Deploy on Vercel (2 minutes)
1. Go to https://vercel.com
2. Click **"Sign Up"** → Use GitHub
3. Click **"Add New..."** → **"Project"**
4. Find your `tcs-nqt-website` repository
5. Click **"Import"**
6. Framework: **Vite** (auto-detected)
7. Click **"Deploy"**
8. Wait 1-2 minutes ⏳

### 🎉 Done!
Your website is now live at: `https://your-project.vercel.app`

---

## 💻 Alternative: Run Locally First

### ⏱️ Time: 3 minutes

### Step 1️⃣: Install Node.js (1 minute)
- Download from https://nodejs.org
- Choose LTS version
- Install (use default settings)

### Step 2️⃣: Open Terminal (30 seconds)
**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Cmd + Space`
- Type `terminal` and press Enter

### Step 3️⃣: Navigate to Your Project (30 seconds)
```bash
cd Downloads/tcs-nqt-website
```
(Adjust path to where you extracted the ZIP)

### Step 4️⃣: Install & Run (1 minute)
```bash
npm install
npm run dev
```

### 🎉 Done!
Open your browser and go to: `http://localhost:5173`

---

## 📱 Test on Your Phone

### If Deployed on Vercel:
Just open the Vercel URL on your phone's browser.

### If Running Locally:
1. Find your computer's IP:
   - **Windows**: Open cmd, type `ipconfig`, look for "IPv4 Address"
   - **Mac**: System Preferences → Network → Your IP is shown
   
2. Make sure your phone is on the **same WiFi**

3. On your phone browser, go to:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```
   Example: `http://192.168.1.100:5173`

---

## 🔧 Customize Before Going Live

### Change Payment Number (30 seconds)
Open `src/app/components/PaymentSection.tsx`:

Find these lines (around line 7-8):
```typescript
const PAYMENT_PHONE = "+91 98765 43210";
const WHATSAPP_NUMBER = "+919876543210";
```

Replace with your numbers:
```typescript
const PAYMENT_PHONE = "+91 YOUR_NUMBER";
const WHATSAPP_NUMBER = "+91YOUR_NUMBER";
```

Save the file.

### Change Price (30 seconds)
Open `src/app/components/PaymentSection.tsx`:

Find (around line 60):
```typescript
<span className="font-medium">₹1,999</span>
```

Change to your price.

Do the same for discount and total.

---

## 🎨 Pro Tips

### Custom Domain
After deploying on Vercel:
1. Buy a domain from Namecheap (~$10/year)
2. In Vercel → Settings → Domains
3. Add your domain
4. Follow the DNS instructions

### Make Changes
1. Edit files on your computer
2. In GitHub Desktop: **"Commit"** → **"Push"**
3. Vercel auto-deploys in 1 minute! 🚀

### Share Your Site
- ✅ Share the Vercel URL
- ✅ Works on all devices
- ✅ HTTPS secure
- ✅ Fast loading worldwide

---

## 🆘 Troubleshooting

### "npm not found"
👉 Install Node.js from https://nodejs.org

### "Port 5173 already in use"
👉 Close other dev servers or use: `npm run dev -- --port 3000`

### "Module not found"
👉 Run: `npm install` again

### Build fails on Vercel
👉 Check that `package.json` exists in your GitHub repo

### Mobile not loading
👉 Make sure:
- Same WiFi network
- Firewall allows connections
- Using `http://` not `https://`

---

## ✅ Success Checklist

After following this guide:
- [ ] Website loads in browser
- [ ] All 5 tabs work (Home, Materials, Bundle, Payment, Profile)
- [ ] Bottom navigation works
- [ ] Mobile responsive design looks good
- [ ] QR code shows on payment page
- [ ] WhatsApp button works
- [ ] Updated payment numbers
- [ ] Shared link with friends to test

---

## 🎯 What's Next?

1. **Add Real QR Code**: Replace placeholder with your payment QR
2. **Backend Setup**: Create API for payment verification
3. **Email Setup**: Send bundle PDFs automatically
4. **Analytics**: Add Google Analytics
5. **SEO**: Optimize for search engines
6. **Marketing**: Share on social media

---

## 📚 More Help

- **Full Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **Files List**: See `FILES_CHECKLIST.md`
- **Code Documentation**: See `README.md`

---

## 💬 Common Questions

**Q: Is Vercel free?**
A: Yes! Free forever for hobby projects.

**Q: Can I use my own domain?**
A: Yes! Add it in Vercel settings.

**Q: How do I update the site?**
A: Edit files → Commit in GitHub Desktop → Push. Vercel auto-deploys!

**Q: Is it mobile-friendly?**
A: Yes! Designed mobile-first with iOS styling.

**Q: Can I add more pages?**
A: Yes! Edit `TabContent.tsx` and add new cases.

**Q: Where are payments stored?**
A: Currently mock. You need to add a backend (Firebase/Supabase).

---

## 🎉 Congratulations!

You now have a professional TCS NQT prep website live on the internet!

**Next**: Share it with students and start getting orders! 📱💰

---

**Need Help?** Re-read this guide step by step. 99% of issues are solved by following instructions exactly.

**Still Stuck?** Google your error message or ask on Stack Overflow.

**Good Luck!** 🚀
