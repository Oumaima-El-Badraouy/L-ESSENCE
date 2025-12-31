# Lessence Parfums

A luxurious, high-end perfume e-commerce website built with React and Tailwind CSS. This project features a sophisticated "Dark Luxury" design aesthetic with gold accents, smooth animations, and a complete shopping cart system integrated with WhatsApp ordering.

![Lessence Parfums](https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop&q=80)

## ✨ Features

### Design & Experience
- **Cinematic Hero Section**: Immersive entrance with animated background effects
- **Dark Luxury Aesthetic**: Sophisticated obsidian black theme with metallic gold accents
- **Smooth Animations**: Fluid transitions powered by Framer Motion
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Glassmorphism Effects**: Modern translucent UI elements

### Shopping Functionality
- **Product Catalog**: 24 premium perfumes with detailed descriptions
- **Pagination**: Client-side pagination with 8 products per page
- **Product Modal**: Quick view feature for product details
- **Shopping Cart**: Full cart system with quantity management
- **WhatsApp Integration**: Complete orders sent directly via WhatsApp

### Navigation
- **Sticky Navbar**: Always accessible navigation with cart counter
- **Smooth Scrolling**: Seamless navigation to different sections
- **Cart Drawer**: Slide-out cart panel for easy access

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd lessence-parfums

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
The development server will start at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output will be in the `dist/` folder, ready for deployment.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite** | Build Tool |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **React Context** | State Management |

## 📁 Project Structure

```
lessence-parfums/
├── index.html              # Entry HTML file
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── public/                 # Static assets
│   └── favicon.svg
├── dist/                   # Production build (generated)
└── src/
    ├── main.jsx            # Application entry point
    ├── App.jsx             # Main app component
    ├── index.css           # Global styles
    ├── components/
    │   ├── Hero.jsx        # Hero section
    │   ├── Navbar.jsx      # Navigation bar
    │   ├── Products.jsx    # Product grid with pagination
    │   ├── ProductCard.jsx # Individual product card
    │   ├── ProductModal.jsx# Product detail modal
    │   ├── CartDrawer.jsx  # Shopping cart panel
    │   ├── About.jsx       # About section
    │   └── Footer.jsx      # Footer component
    ├── context/
    │   └── CartContext.jsx # Cart state management
    └── data/
        └── products.js     # Product data (24 perfumes)
```

##  Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Obsidian Black | `#050505` | Background |
| Luxury Gold | `#D4AF37` | Primary accent |
| Gold Light | `#F4E4BC` | Secondary accent |
| White | `#FFFFFF` | Text primary |

### Typography
- **Headings**: Bodoni Moda (Serif)
- **Body**: Cinzel (Sans-serif)

##  Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

##  Configuration

### Adding Products
Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 25,
  name: "New Perfume Name",
  type: "Eau de Parfum",
  price: 150,
  shortDesc: "Short description",
  fullDescription: "Detailed description...",
  notes: "Top, heart, base notes",
  intensity: "Intensity 8/10",
  image: "https://image-url.com/perfume.jpg"
}
```

### WhatsApp Number
Update the WhatsApp number in `src/data/products.js`:
```javascript
export const WHATSAPP_NUMBER = "33612345678";
```

##  Deployment

### Build Command
```bash
npm run build
```

### Deploy to Any Static Host
The `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 📄 License

This project is for demonstration purposes.

##  Contact

For inquiries about this project, please reach out through the WhatsApp ordering system on the website.

---

Built with ❤️ using React and Tailwind CSS
By DevNova Team 
