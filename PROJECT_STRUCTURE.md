# 📁 Project Structure Explained

## 🏗️ Complete File Structure

```
tcs-nqt-website/
│
├── 📄 index.html                      # Main HTML entry point
├── 📦 package.json                    # Project dependencies & scripts
├── ⚙️ vite.config.ts                  # Vite build configuration
├── ⚙️ postcss.config.mjs              # CSS processing config
│
├── 📚 README.md                       # Project overview
├── 🚀 DEPLOYMENT_GUIDE.md            # Full deployment instructions
├── ⚡ QUICK_START.md                  # 5-minute setup guide
├── 📋 FILES_CHECKLIST.md             # Complete files list
├── 📁 PROJECT_STRUCTURE.md           # This file
│
├── 📂 src/                            # Source code folder
│   │
│   ├── 🎯 main.tsx                    # React application entry
│   │
│   ├── 📂 app/                        # Main application folder
│   │   │
│   │   ├── 📱 App.tsx                 # Root component (connects everything)
│   │   │
│   │   └── 📂 components/             # All React components
│   │       │
│   │       ├── 🧭 BottomNavigation.tsx    # Bottom nav bar (5 tabs)
│   │       ├── 📄 TabContent.tsx          # Content for all tabs
│   │       ├── 💳 PaymentSection.tsx      # Payment page with QR code
│   │       ├── 👤 ProfileSection.tsx      # Scores & certificates page
│   │       │
│   │       ├── 📂 figma/              # Figma-specific components
│   │       │   └── 🖼️ ImageWithFallback.tsx
│   │       │
│   │       └── 📂 ui/                 # Pre-built UI components library
│   │           ├── accordion.tsx
│   │           ├── alert-dialog.tsx
│   │           ├── alert.tsx
│   │           ├── avatar.tsx
│   │           ├── badge.tsx
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── ... (40+ more components)
│   │           └── utils.ts
│   │
│   └── 📂 styles/                     # All CSS files
│       ├── 🎨 index.css               # Main stylesheet (imports others)
│       ├── 🎨 tailwind.css            # Tailwind CSS config
│       ├── 🎨 theme.css               # Color themes & variables
│       └── 🎨 fonts.css               # Font imports
│
└── 📂 (auto-generated folders - don't copy these)
    ├── node_modules/                  # Dependencies (created by npm install)
    ├── dist/                          # Build output (created by npm run build)
    └── .git/                          # Git repository (created by git init)
```

---

## 📄 File Explanations

### Root Level Files

#### `index.html`
- **What**: Main HTML page
- **Purpose**: Entry point for the web app
- **Edit?**: Only if you need to add meta tags or change title
- **Size**: ~500 bytes

#### `package.json`
- **What**: Project configuration
- **Purpose**: Lists all dependencies and scripts
- **Edit?**: Only to update dependencies
- **Important**: This tells npm what packages to install

#### `vite.config.ts`
- **What**: Build tool settings
- **Purpose**: Configures how Vite builds your app
- **Edit?**: Rarely (only for advanced config)

#### `postcss.config.mjs`
- **What**: CSS processing config
- **Purpose**: Makes Tailwind CSS work
- **Edit?**: No

---

### Source Files (`src/`)

#### `main.tsx`
```typescript
// This file boots up your React app
import App from './app/App'
createRoot(document.getElementById('root')!).render(<App />)
```
- **What**: React entry point
- **Purpose**: Connects React to the HTML
- **Edit?**: No

#### `app/App.tsx`
```typescript
// Main component that holds everything
export default function App() {
  return (
    <div>
      <TabContent activeTab={activeTab} />
      <BottomNavigation activeTab={activeTab} />
    </div>
  )
}
```
- **What**: Root React component
- **Purpose**: Main app structure
- **Edit?**: Rarely (only for major changes)

---

### Components

#### `BottomNavigation.tsx`
- **What**: The bottom navigation bar
- **Has**: 5 tabs (Home, Materials, Bundle, Payment, Profile)
- **Edit to**: Change tab icons or labels
- **Size**: ~150 lines

#### `TabContent.tsx`
- **What**: Main content container
- **Has**: All content for Home, Materials, and Bundle tabs
- **Edit to**: 
  - Change exam content
  - Update bundle features
  - Modify pricing
- **Size**: ~600 lines

#### `PaymentSection.tsx`
- **What**: Payment page component
- **Has**: 
  - QR code display
  - Payment instructions
  - WhatsApp integration
- **Edit to**: 
  - Update phone numbers
  - Change QR code
  - Modify pricing
- **Size**: ~230 lines
- **Important**: Update `PAYMENT_PHONE` and `WHATSAPP_NUMBER`

#### `ProfileSection.tsx`
- **What**: Profile/scores page
- **Has**: 
  - Score card
  - Achievements
  - Certificates
  - Performance graphs
- **Edit to**: 
  - Update scores
  - Add more achievements
- **Size**: ~300 lines

---

### UI Components (`components/ui/`)

These are **pre-built, reusable components**. Don't edit unless you know what you're doing.

**Common ones you might use:**
- `button.tsx` - All button styles
- `card.tsx` - Card containers
- `dialog.tsx` - Popup modals
- `input.tsx` - Form inputs
- `badge.tsx` - Small labels/tags

**Total**: ~42 components ready to use!

---

### Styles (`styles/`)

#### `index.css`
```css
/* Main stylesheet - imports everything */
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
```
- **What**: Main CSS file
- **Purpose**: Combines all styles
- **Edit?**: To add custom CSS

#### `tailwind.css`
```css
/* Tailwind CSS v4 configuration */
@theme {
  /* Theme tokens */
}
```
- **What**: Tailwind setup
- **Purpose**: Enables utility classes
- **Edit?**: To change design tokens

#### `theme.css`
```css
/* Color themes, fonts, spacing */
:root {
  --color-primary: ...;
}
```
- **What**: Design system
- **Purpose**: Consistent colors/fonts
- **Edit?**: Yes, to change app theme

#### `fonts.css`
```css
/* Google Fonts imports */
@import url('...');
```
- **What**: Font imports
- **Purpose**: Loads custom fonts
- **Edit?**: To change fonts

---

## 🎯 Where to Edit for Common Tasks

### Change Payment Details
📁 `src/app/components/PaymentSection.tsx`
```typescript
const PAYMENT_PHONE = "+91 YOUR_NUMBER";
const WHATSAPP_NUMBER = "+91YOUR_NUMBER";
```

### Change Bundle Price
📁 `src/app/components/PaymentSection.tsx` + `TabContent.tsx`
```typescript
<span>₹999</span>  // Change this
```

### Add New Exam Section
📁 `src/app/components/TabContent.tsx`
```typescript
// Find the Home tab content
// Add new sections to the exam details
```

### Change App Colors
📁 `src/styles/theme.css`
```css
:root {
  --color-primary: #3b82f6;  /* Change this */
}
```

### Add New Tab
📁 `src/app/components/BottomNavigation.tsx`
```typescript
// Add new tab to navItems array
```
📁 `src/app/components/TabContent.tsx`
```typescript
// Add new case in switch statement
```

---

## 📦 Dependencies (package.json)

### Main Frameworks
- **React 18.3** - UI library
- **Vite 6.3** - Build tool
- **Tailwind CSS 4.1** - Styling

### UI Components
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Motion** - Animations

### Total Dependencies: ~60 packages

---

## 🔧 Scripts (in package.json)

```json
{
  "scripts": {
    "dev": "vite",              // Run development server
    "build": "vite build",      // Build for production
    "preview": "vite preview"   // Preview production build
  }
}
```

**Usage:**
```bash
npm run dev      # Start development (localhost:5173)
npm run build    # Create production build (dist/ folder)
npm run preview  # Test production build locally
```

---

## 📊 File Sizes (Approximate)

```
Total Project Size: ~50 MB (with node_modules)
Without node_modules: ~2 MB

Breakdown:
├── Source code: ~500 KB
├── Styles: ~50 KB
├── Config files: ~10 KB
├── Documentation: ~50 KB
└── node_modules: ~49 MB (auto-installed)

Production Build (dist/): ~300 KB
├── JavaScript: ~200 KB
├── CSS: ~50 KB
└── HTML: ~2 KB
```

---

## 🚀 Build Process

```
Source Files          →    Build Tool    →    Production Output
──────────────             ──────────         ─────────────────
index.html                                    dist/index.html
src/main.tsx              Vite builds         dist/assets/
src/app/App.tsx           and bundles    →    - main.js (minified)
src/styles/*.css          everything          - main.css (minified)
components/*.tsx                              - chunks/
```

**What happens:**
1. Vite reads all files
2. Bundles React components → JavaScript
3. Processes CSS → Optimized CSS
4. Minifies everything
5. Outputs to `dist/` folder
6. Ready for deployment!

---

## 🎨 Design System Flow

```
theme.css                 → Tailwind classes → Components
─────────                   ───────────────    ──────────
--color-primary: blue    →  text-blue-600   → <Button>
--font-size-base: 16px   →  text-base       → <Card>
--spacing-4: 1rem        →  p-4             → <Container>
```

---

## 🔄 Data Flow

```
User clicks tab
     ↓
BottomNavigation
     ↓
setActiveTab('payment')
     ↓
App.tsx updates state
     ↓
TabContent receives new activeTab
     ↓
switch(activeTab) renders PaymentSection
     ↓
User sees Payment page
```

---

## 📱 Component Hierarchy

```
App (Root)
│
├── TabContent
│   ├── Home (case 'home')
│   ├── Materials (case 'materials')
│   ├── Bundle (case 'bundle')
│   ├── PaymentSection (case 'payment')
│   └── ProfileSection (case 'profile')
│
└── BottomNavigation
    └── 5 Navigation Buttons
```

---

## ✅ Files You MUST Have

**Critical (can't work without these):**
- ✅ index.html
- ✅ package.json
- ✅ src/main.tsx
- ✅ src/app/App.tsx
- ✅ src/styles/index.css

**Important (main features):**
- ✅ BottomNavigation.tsx
- ✅ TabContent.tsx
- ✅ PaymentSection.tsx
- ✅ ProfileSection.tsx

**Supporting:**
- ✅ All UI components (ui/ folder)
- ✅ All style files
- ✅ Config files

---

## 🎯 Quick Navigation

**Want to...**
- **Change payment info?** → `PaymentSection.tsx`
- **Update exam content?** → `TabContent.tsx` (Home case)
- **Modify bundle price?** → `TabContent.tsx` + `PaymentSection.tsx`
- **Change app theme?** → `styles/theme.css`
- **Add new page?** → Add case in `TabContent.tsx`
- **Fix styling?** → `styles/` folder
- **Update dependencies?** → `package.json`

---

## 🆘 Help Finding Files

If you can't find a file:

```bash
# Search for text in all files
grep -r "PAYMENT_PHONE" src/

# Find file by name
find . -name "PaymentSection.tsx"

# List all TypeScript files
find src/ -name "*.tsx"
```

---

**This structure is optimized for:**
- ✅ Easy maintenance
- ✅ Fast builds
- ✅ Component reusability
- ✅ Mobile-first design
- ✅ Production deployment

**Next Steps**: See `QUICK_START.md` to deploy!
