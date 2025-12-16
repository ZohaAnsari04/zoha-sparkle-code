# ✨ Zoha's Portfolio - Sparkle Code

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Zoha%20Ansari-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=for-the-badge&logo=tailwind-css)

**A modern, animated, and fully responsive portfolio website showcasing development expertise in Frontend, Blockchain, and AI/ML**

[Live Demo](#) • [Documentation](#documentation) • [Features](#features)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

This is a premium, modern portfolio website built with cutting-edge web technologies. It features smooth animations, dark/light theme support, interactive 3D elements, and a beautiful UI that showcases projects, skills, achievements, and educational background.

### Key Highlights

- 🎨 **Modern Design**: Glassmorphism, gradient effects, and smooth animations
- 🌓 **Theme Toggle**: Seamless dark/light mode switching
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance**: Built with Vite for lightning-fast load times
- 🎭 **Animations**: Framer Motion for smooth, professional animations
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessible**: WCAG compliant with keyboard navigation support

---

## ✨ Features

### 🏠 Hero Section
- Animated 3D background with Three.js
- Dynamic typing effect
- Smooth scroll indicators
- Call-to-action buttons

### 👤 About Section
- Personal introduction with custom background image
- Skill categories with icons
- Expertise showcase cards
- Downloadable resume button

### 💼 Projects Section
- Project cards with hover effects
- Technology stack icons
- Live demo and GitHub links
- Categorized project display

### 🛠️ Skills & Technologies
- Tabbed interface (All Skills, Frontend, Languages, Blockchain, Tools)
- Technology logos with tooltips
- Animated skill cards
- Proficiency indicators

### 🏆 Achievements Section
- Timeline-based achievement display
- Award cards with descriptions
- Animated entrance effects
- Categorized achievements

### 🎓 Education Section
- Educational timeline
- Institution details with logos
- Degree and specialization info
- Animated card transitions

### 📬 Contact Section
- Contact form with validation
- Social media links
- Email integration
- Success/error notifications

### 🎨 Additional Features
- **Scroll Progress Bar**: Visual indicator of page scroll
- **Back to Top Button**: Quick navigation to top
- **Social Sidebar**: Fixed social media links
- **Preloader**: Elegant loading animation
- **Theme Toggle**: Dark/light mode with smooth transitions
- **Responsive Navigation**: Mobile-friendly header

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### UI Components & Libraries
- **shadcn/ui** - Accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics

### Form & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Utilities
- **clsx** - Conditional classNames
- **tailwind-merge** - Tailwind class merging
- **date-fns** - Date formatting
- **next-themes** - Theme management
- **sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript linting
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZohaAnsari04/zoha-sparkle-code.git
   cd zoha-sparkle-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
zoha-sparkle-code/
├── public/                    # Static assets
│   ├── profile-bg.jpg        # Profile background image
│   ├── placeholder.svg       # Placeholder images
│   └── favicon.ico           # Site favicon
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── About.tsx        # About section
│   │   ├── Achievements.tsx # Achievements section
│   │   ├── BackToTop.tsx    # Back to top button
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Preloader.tsx    # Loading animation
│   │   ├── Projects.tsx     # Projects showcase
│   │   ├── ScrollProgress.tsx # Scroll indicator
│   │   ├── Skills.tsx       # Skills & technologies
│   │   ├── SocialSidebar.tsx # Social media links
│   │   └── ThemeToggle.tsx  # Theme switcher
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── .gitignore               # Git ignore rules
├── components.json          # shadcn/ui config
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML template
├── package.json             # Dependencies
├── postcss.config.js        # PostCSS config
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
└── vite.config.ts           # Vite configuration
```

---

## 🧩 Components

### Core Components

#### `Header.tsx`
Navigation bar with responsive menu and theme toggle.

#### `Hero.tsx`
Landing section with animated background and introduction.

#### `About.tsx`
Personal introduction with background image and expertise cards.
- **Props**: None
- **Features**: Custom background image, gradient overlay, expertise cards

#### `Projects.tsx`
Showcase of development projects with links and tech stack.
- **Features**: Project cards, tech icons, live demo links

#### `Skills.tsx`
Tabbed interface displaying technical skills and technologies.
- **Features**: Category tabs, skill logos, animated cards

#### `Achievements.tsx`
Timeline of awards and recognitions.

#### `Education.tsx`
Educational background and qualifications.

#### `Contact.tsx`
Contact form with validation and social links.

### Utility Components

#### `ThemeToggle.tsx`
Dark/light mode switcher with smooth transitions.

#### `ScrollProgress.tsx`
Visual indicator of page scroll position.

#### `BackToTop.tsx`
Button to quickly scroll to top of page.

#### `SocialSidebar.tsx`
Fixed sidebar with social media links.

#### `Preloader.tsx`
Loading animation displayed on initial page load.

---

## 🎨 Customization

### Updating Personal Information

1. **Profile Image**: Replace `/public/profile-bg.jpg` with your image
2. **Resume**: Update the resume URL in `About.tsx`
3. **Social Links**: Modify links in `SocialSidebar.tsx` and `Contact.tsx`

### Modifying Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-color",
      secondary: "your-color",
      // ... more colors
    }
  }
}
```

### Adding Projects

Update the projects array in `Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/project-image.jpg",
    tech: ["React", "TypeScript"],
    github: "github-url",
    demo: "live-demo-url"
  }
];
```

### Updating Skills

Modify the skills data in `Skills.tsx`:

```typescript
const skills = {
  all: [
    { name: "Skill Name", logo: "logo-url" }
  ]
};
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Connect your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Zoha Ansari**

- Portfolio: [Your Portfolio URL]
- GitHub: [@ZohaAnsari04](https://github.com/ZohaAnsari04)
- LinkedIn: [Your LinkedIn]
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide Icons](https://lucide.dev/) for the icon set
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Three.js](https://threejs.org/) for 3D graphics
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/ZohaAnsari04/zoha-sparkle-code?style=social)
![GitHub forks](https://img.shields.io/github/forks/ZohaAnsari04/zoha-sparkle-code?style=social)
![GitHub issues](https://img.shields.io/github/issues/ZohaAnsari04/zoha-sparkle-code)
![GitHub license](https://img.shields.io/github/license/ZohaAnsari04/zoha-sparkle-code)

---

<div align="center">

**Made with 💖 by Zoha Ansari**

If you found this project helpful, please consider giving it a ⭐!

</div>
