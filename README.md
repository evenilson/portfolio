# 🚀 Portfolio - Evenilson Liandro

A modern, responsive portfolio website showcasing my work as a Front-end Developer. Built with React, TypeScript, and Tailwind CSS, featuring a clean design with dark/light theme support and smooth animations.

## ✨ Live Demo

🌐 **Visit the portfolio:** [https://evenilson.github.io/portfolio](https://evenilson.github.io/portfolio)

## 🎯 About

This portfolio showcases my experience as a Front-end Developer with over 5 years of expertise in React, Next.js, and Vue.js. The site features:

- **Professional presentation** with personal information and skills
- **Project showcase** highlighting work on government platforms and social impact projects
- **Technical skills** with visual skill ratings
- **Blog integration** pulling articles from Dev.to
- **Responsive design** optimized for all devices
- **Dark/Light theme** with smooth transitions
- **Modern animations** and interactive elements

## 🛠️ Technologies & Tools

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### UI Components & Libraries
- **Radix UI** - Accessible component primitives
  - Dialog, Separator, Tooltip
- **Phosphor Icons** - Icon library
- **React Query (TanStack Query)** - Data fetching and caching
- **CLSX** - Conditional className utility

### Development Tools
- **ESLint** - Code linting with multiple plugins
- **Prettier** - Code formatting
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing
- **Sass** - CSS preprocessor

### Deployment
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/           # Images and SVG assets
│   │   ├── img/         # Profile and project images
│   │   └── svgs/        # SVG logos and icons
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   └── ...         # Feature-specific components
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API services (Dev.to integration)
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions and constants
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── dist/              # Build output
└── configuration files
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/evenilson/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint issues |
| `pnpm test` | Run tests |
| `pnpm test:ui` | Run tests with UI |
| `pnpm test:coverage` | Run tests with coverage |

## 🎨 Features

### Core Features
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Scrolling** - Navigation with scroll animations
- **Typewriter Effect** - Animated text in hero section
- **Scroll Reveal** - Elements animate on scroll
- **Active Section Tracking** - Navigation highlights current section

### Content Sections
- **Hero Section** - Personal introduction with typewriter effect
- **Skills** - Technical skills with visual ratings
- **Projects** - Showcase of professional work
- **Articles** - Blog posts from Dev.to integration
- **Contact** - Social media links and contact information

### Technical Features
- **TypeScript** - Full type safety
- **Component Architecture** - Modular, reusable components
- **Custom Hooks** - Reusable logic (theme, scroll, etc.)
- **API Integration** - Dev.to articles fetching
- **Performance Optimized** - Lazy loading and efficient rendering

## 🚀 Deployment

This portfolio is deployed on **GitHub Pages** and automatically builds on every push to the `master` branch via GitHub Actions.

### Deployment Process

1. Push changes to the `master` branch.
2. GitHub Actions runs the workflow in `.github/workflows/deploy-pages.yml`.
3. The app is built and published to GitHub Pages.

### Configuration

- **Base URL**: Configured for GitHub Pages (`/portfolio/`)
- **Build Output**: `dist/` directory
- **Workflow**: `.github/workflows/deploy-pages.yml`
- **Trigger**: Push to `master` and manual `workflow_dispatch`

### Required GitHub Secrets

The deploy workflow reads the following build-time variables from GitHub Secrets:

- `VITE_GA_ID`
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

Without these values, the production bundle is generated with empty Firebase config and Firestore calls fail at runtime.

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

### Testing Stack
- **Vitest** - Fast unit testing
- **Testing Library** - React component testing
- **jsdom** - DOM environment for tests
- **Coverage** - Code coverage reporting

## 📝 Code Quality

### Linting & Formatting
- **ESLint** with multiple plugins for React, TypeScript, and accessibility
- **Prettier** for consistent code formatting
- **Import sorting** for organized imports

### Code Standards
- TypeScript strict mode enabled
- ESLint rules for code quality
- Prettier configuration for consistent formatting
- Accessibility guidelines (jsx-a11y)

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome for:

- Bug fixes
- Performance improvements
- Accessibility enhancements
- Documentation updates

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Social Media

- **LinkedIn**: [evenilsonliandro](https://www.linkedin.com/in/evenilsonliandro/)
- **GitHub**: [evenilson](https://github.com/evenilson)
- **Dev.to**: [evenilsonliandro](https://dev.to/evenilsonliandro)
- **Dribbble**: [evenilsonliandro](https://dribbble.com/evenilsonliandro)
- **Email**: [evenilsonlp@gmail.com](mailto:evenilsonlp@gmail.com)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Phosphor Icons** for the beautiful icon set
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first styling approach
- **Vite** for the fast development experience
- **GitHub Pages** for hosting

---

**Built with ❤️ by Evenilson Liandro** 
