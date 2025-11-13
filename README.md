# GrandLuxe Events - Premium Event Decoration Company Website

A professional, modern, and fully responsive website built with React and Vite for GrandLuxe Events, a luxury event decoration company.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd grandluxe-events
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.tsx     # Navigation with mobile menu
│   ├── Hero.tsx       # Hero section with CTA
│   ├── Services.tsx   # Services showcase
│   ├── About.tsx      # About section with mission & values
│   ├── Contact.tsx    # Contact form with WhatsApp integration
│   └── Footer.tsx     # Footer component
├── pages/             # Page components
│   └── Index.tsx      # Main landing page
├── assets/            # Images and static assets
│   ├── hero-bg.jpg    # Hero background image
│   └── logo.png       # Company logo
├── styles/            # Global styles
│   └── index.css      # Tailwind CSS and custom styles
└── lib/               # Utility functions
    └── utils.ts       # Helper functions
```

## 🎨 Customization Guide

### Changing Colors

The color palette is defined in `src/index.css`. The site uses a luxury theme with:
- **Primary (Dark Plum)**: `--primary: 300 35% 25%;`
- **Accent (Metallic Gold)**: `--accent: 45 85% 55%;`
- **Background (White)**: `--background: 0 0% 100%;`

To change colors, edit the CSS variables in the `:root` section:

```css
:root {
  --primary: 300 35% 25%;    /* Change the dark plum color */
  --accent: 45 85% 55%;      /* Change the metallic gold color */
  /* ... other colors */
}
```

### Modifying Animation Timing

Animations use Framer Motion. To adjust animation speeds, look for `transition` props:

```tsx
// In any component file
transition={{ duration: 0.6, delay: 0.2 }}
```

Change `duration` (animation speed) and `delay` (start time) values as needed.

### Editing Content

#### Hero Section
Edit `src/components/Hero.tsx`:
- Main headline
- Subheadline
- Call-to-action button text

#### Services
Edit `src/components/Services.tsx`:
- Service titles and descriptions in the `services` array
- Add/remove services by modifying the array

#### About Section
Edit `src/components/About.tsx`:
- Mission statement text
- Core values in the `values` array

#### Contact Form
Edit `src/components/Contact.tsx`:
- Form fields
- WhatsApp number: Change `+2349042802225` to your number
- Contact information (phone, email, location)

### Replacing Images

1. Add your images to `src/assets/`
2. Update imports in components:

```tsx
import heroImage from '@/assets/your-image.jpg';
import logo from '@/assets/your-logo.png';
```

## 🎯 Features

- ✨ Smooth scroll-triggered animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🍔 Hamburger menu for mobile navigation
- 📧 Contact form with validation
- 💬 WhatsApp integration
- ♿ Accessible (semantic HTML, focus states)
- 🎨 Luxury design with elegant color palette
- ⚡ Fast performance with Vite

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn UI** - Component library
- **Lucide React** - Icons

## 📝 License

This project is private and proprietary to GrandLuxe Events.

## 💼 Support

For support, email info@grandluxe-events.com or call +234 904 280 2225.

---

Built with ❤️ for unforgettable celebrations
