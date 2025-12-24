# 🏠 Airbnb Clone - Modern Web Application

<div align="center">

![Airbnb Clone](https://img.shields.io/badge/Airbnb-Clone-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A fully responsive, feature-rich Airbnb clone built with modern web technologies. This project demonstrates professional-level UI/UX design, responsive layouts, and smooth user interactions.

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📸 Screenshots

### Home Page - Listings Grid
<img width="1907" height="970" alt="Screenshot 2025-12-24 110421" src="https://github.com/user-attachments/assets/a39ece11-1378-4a91-9d65-3c075bcdab52" />

*Browse through curated property listings with advanced filtering and search capabilities*

### Featured Listing
<img width="1918" height="971" alt="Screenshot 2025-12-24 110442" src="https://github.com/user-attachments/assets/afa6c10a-f063-419b-9931-70386387fb94" />

*Superhost properties with detailed ratings and instant booking*

### Property Details
![Uploading Screenshot 2025-12-24 110517.png…]()

*Comprehensive property information with high-quality imagery and reservation options*

---

## ✨ Features

### Core Functionality
- 🔍 **Advanced Search** - Real-time search with location, dates, and guest filters
- 🏷️ **Category Filtering** - Browse by Trending, Beachfront, Mountains, Iconic Cities, and more
- 📱 **Fully Responsive** - Seamless experience across desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, intuitive interface inspired by Airbnb's design system
- ⭐ **Rating System** - Display property ratings and Superhost badges
- 🖼️ **Image Galleries** - High-quality property images with hover effects
- 💰 **Dynamic Pricing** - Real-time price display per night with distance information

### Technical Features
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🛣️ **Client-Side Routing** - Smooth navigation with React Router DOM
- 🎭 **Loading States** - Professional skeleton loaders for better UX
- 🎯 **Empty States** - Helpful feedback when no results are found
- 🔄 **State Management** - Efficient component state handling
- 📐 **Grid Layouts** - Responsive grid system with CSS Grid
- 🌈 **Hover Effects** - Subtle animations and transitions
- 🔒 **Type Safety Ready** - Structure supports TypeScript integration

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0 or higher)
- **npm** (v8.0 or higher) or **yarn** (v1.22 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deepaksingh-maker/Miniairbnb-homepage-clone.git
   cd Miniairbnb-homepage-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (default Vite port)

### Building for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
airbnb-clone/
├── public/                  # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/             # Images, fonts, and other assets
│   ├── components/         # Reusable React components
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── CategoryNav/
│   │   │   ├── CategoryNav.jsx
│   │   │   └── CategoryNav.css
│   │   ├── ListingCard/
│   │   │   ├── ListingCard.jsx
│   │   │   └── ListingCard.css
│   │   └── Skeleton/
│   │       ├── SkeletonCard.jsx
│   │       └── SkeletonCard.css
│   ├── pages/              # Page components
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   └── ListingDetail/
│   │       ├── ListingDetail.jsx
│   │       └── ListingDetail.css
│   ├── data/               # Mock data and constants
│   │   ├── listings.js
│   │   └── categories.js
│   ├── utils/              # Helper functions
│   │   └── helpers.js
│   ├── App.jsx             # Main App component with routing
│   ├── App.css             # Global styles
│   ├── main.jsx            # Application entry point
│   └── index.css           # Base CSS and CSS variables
├── .gitignore
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # Project documentation
```

---

## 🎯 Key Components

### Header Component
Navigation bar with logo, search functionality, and user authentication buttons.

### SearchBar Component
Advanced search with location input, date picker, and guest selector. Includes mobile modal support.

### CategoryNav Component
Sticky navigation bar with category filters (Trending, Beachfront, Mountains, etc.) with smooth scroll and shadow effects.

### ListingCard Component
Reusable card component displaying property image, location, price, rating, and Superhost badge.

### ListingDetail Page
Comprehensive property view with:
- Large hero image
- Property description
- Pricing information
- Rating and reviews summary
- Reserve button (UI ready for backend integration)

### SkeletonCard Component
Loading placeholder with animated shimmer effect for better perceived performance.

---

## 🛣️ Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Main listing page with search and filters |
| `/listing/:id` | ListingDetail | Individual property details page |

---

## 🎨 Design System

### Color Palette
```css
--primary-color: #FF385C;      /* Airbnb Red */
--primary-hover: #E31C5F;      /* Darker Red */
--text-primary: #222222;        /* Dark Gray */
--text-secondary: #717171;      /* Medium Gray */
--border-color: #DDDDDD;        /* Light Gray */
--background: #FFFFFF;          /* White */
--background-gray: #F7F7F7;     /* Light Background */
```

### Typography
- **Font Family**: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif
- **Font Sizes**: 12px (small), 14px (body), 16px (medium), 18px (large), 24px (headings)

### Breakpoints
```css
--mobile: 320px - 768px
--tablet: 769px - 1024px
--desktop: 1025px and above
```

---

## 🔧 Technologies Used

### Frontend
- **React 18.x** - Modern UI library with hooks and functional components
- **React Router DOM 6.x** - Declarative routing for React applications
- **Vite 5.x** - Next-generation frontend build tool
- **CSS3** - Modern styling with Grid, Flexbox, and animations

### Development Tools
- **ESLint** - Code linting and quality checks
- **Prettier** (recommended) - Code formatting
- **Git** - Version control

### Design Resources
- **Figma** - Original design file
- Design inspiration from [Airbnb Clone Web Design](https://www.figma.com/design/JQH0sUcG1aqAN3atciUSmb/Airbnb-Clone-Web-Design)

---

## 🌟 Features Showcase

### Search & Filter System
```javascript
// Real-time search filtering
const filteredListings = listings.filter(listing => 
  listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
  listing.description.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Responsive Grid Layout
```css
.listings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
}
```

### Category Filtering
```javascript
const filterByCategory = (category) => {
  if (category === 'all') return listings;
  return listings.filter(listing => listing.category === category);
};
```

---

## 🚧 Roadmap

### Phase 1 - Core Features ✅
- [x] Responsive home page layout
- [x] Search bar functionality
- [x] Category filtering
- [x] Listing cards with images and details
- [x] Individual listing detail pages
- [x] Loading skeletons
- [x] Empty states

### Phase 2 - Enhanced Features 🚧
- [ ] User authentication (login/signup)
- [ ] Wishlist/favorites functionality
- [ ] Date range picker integration
- [ ] Guest counter component
- [ ] Price range filter
- [ ] Map integration (Google Maps/Mapbox)
- [ ] Image carousel/lightbox
- [ ] Reviews and ratings section

### Phase 3 - Backend Integration 📋
- [ ] Connect to REST API/GraphQL backend
- [ ] Real database integration
- [ ] User profiles and bookings
- [ ] Payment integration (Stripe)
- [ ] Booking calendar
- [ ] Host dashboard
- [ ] Messaging system
- [ ] Email notifications

### Phase 4 - Advanced Features 🔮
- [ ] Progressive Web App (PWA)
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] A/B testing framework

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/Deepaksingh-maker/Miniairbnb-homepage-clone.git
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly
- Ensure responsive design works on all devices

---

## 🐛 Bug Reports & Feature Requests

If you encounter any bugs or have feature suggestions, please:

1. Check if the issue already exists in [Issues](https://github.com/Deepaksingh-maker/Miniairbnb-homepage-clone/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser and device information

---

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

```
MIT License

Copyright (c) 2025 Deepak Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Deepak Singh**
- GitHub: [@Deepaksingh-maker](https://github.com/Deepaksingh-maker)
- LinkedIn: [Deepak Singh](https://linkedin.com/in/baghel-deepak)
- Email: bagheldeepak3400@gmail.com

---

## 🙏 Acknowledgments

- Original design inspiration from [Airbnb](https://www.airbnb.com)
- Figma design file: [Airbnb Clone Web Design](https://www.figma.com/design/JQH0sUcG1aqAN3atciUSmb/Airbnb-Clone-Web-Design)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Community contributors and reviewers

---

## 📚 Resources & Learning

### Helpful Documentation
- [React Official Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

### Recommended Extensions (VS Code)
- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier - Code formatter
- Auto Rename Tag
- CSS Peek
- Path Intellisense

---

## 💡 Tips for Developers

### Running Multiple Commands
```bash
# Install and start in one go
npm install && npm run dev
```

### Clearing Cache
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Code Quality
```bash
# Run linter
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Format code (if Prettier is configured)
npm run format
```

---

## 🔍 SEO & Performance

### Current Optimizations
- Semantic HTML5 elements
- Optimized images with lazy loading
- Minified CSS and JavaScript in production
- Code splitting with React Router
- Fast initial page load with Vite

### Recommended Improvements
- Add meta tags for social sharing
- Implement server-side rendering (SSR) with Next.js
- Use WebP images with fallbacks
- Implement service workers for offline support
- Add structured data (JSON-LD) for search engines

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions ✅ |
| Firefox | Latest 2 versions ✅ |
| Safari | Latest 2 versions ✅ |
| Edge | Latest 2 versions ✅ |
| Opera | Latest 2 versions ✅ |
| Mobile Safari | iOS 12+ ✅ |
| Chrome Mobile | Latest ✅ |

---

## 📊 Project Status

![Development Status](https://img.shields.io/badge/Status-Active%20Development-success?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)

**Last Updated:** December 24, 2025

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

Made with ❤️ by developers, for developers

[Back to Top ↑](#-airbnb-clone---modern-web-application)

</div>
