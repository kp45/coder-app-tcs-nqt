# 📱 TCS NQT Prep Website

A mobile-first, iOS-style web application for TCS NQT exam preparation with PDF bundles, study materials, and score tracking.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📦 Features

- ✅ **Home**: TCS NQT exam information and syllabus
- ✅ **Materials**: Subject-wise PDF previews
- ✅ **Bundle**: Pricing and package details
- ✅ **Payment**: QR code payment with WhatsApp verification
- ✅ **Profile**: Score tracking and achievement certificates

## 🎨 Design

- iOS-style mobile interface
- Glassmorphism effects
- Smooth animations
- Gradient backgrounds
- Bottom navigation bar
- Responsive design

## 🛠️ Tech Stack

- **Framework**: React 18.3
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS 4.1
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Animations**: Motion (Framer Motion)

## 📝 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Push code to GitHub
2. Import to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Manual Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your web server

## 🔧 Configuration

### Update Payment Details
Edit `src/app/components/PaymentSection.tsx`:
```typescript
const PAYMENT_PHONE = "+91 YOUR_NUMBER";
const WHATSAPP_NUMBER = "+91YOUR_NUMBER";
```

### Change Pricing
Edit price in:
- `src/app/components/TabContent.tsx` (Bundle section)
- `src/app/components/PaymentSection.tsx`

### Add Your QR Code
Replace `QR_CODE_PLACEHOLDER` in `PaymentSection.tsx` with your image URL

## 📱 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Safari
- ✅ Firefox
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Private - All rights reserved

## 📞 Support

For detailed deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

**Made with ❤️ for TCS NQT aspirants**
