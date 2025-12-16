# 📚 Component Documentation

This document provides detailed information about each component in the portfolio.

---

## Table of Contents

- [Layout Components](#layout-components)
- [Section Components](#section-components)
- [Utility Components](#utility-components)
- [UI Components](#ui-components)

---

## Layout Components

### Header

**File**: `src/components/Header.tsx`

Navigation header with responsive menu and theme toggle.

**Features**:
- Responsive mobile menu
- Smooth scroll navigation
- Active section highlighting
- Theme toggle integration
- Sticky positioning

**Usage**:
```tsx
<Header />
```

---

### Footer

**File**: `src/components/Footer.tsx`

Footer with social links and copyright information.

**Features**:
- Social media links
- Copyright notice
- Responsive design
- Gradient background

**Usage**:
```tsx
<Footer />
```

---

## Section Components

### Hero

**File**: `src/components/Hero.tsx`

Landing section with animated introduction.

**Features**:
- 3D animated background (Three.js)
- Typing animation effect
- Call-to-action buttons
- Smooth scroll indicator
- Responsive layout

**Key Elements**:
- Name and title display
- Professional tagline
- Contact and projects buttons
- Animated background particles

**Usage**:
```tsx
<Hero />
```

---

### About

**File**: `src/components/About.tsx`

Personal introduction and expertise showcase.

**Features**:
- Custom background image with overlay
- Expertise cards with icons
- Resume download button
- Responsive grid layout
- Hover animations

**Customization**:
```tsx
// Update background image
<img src="/profile-bg.jpg" alt="Profile Background" />

// Update resume URL
const resumeUrl = "your-resume-url";
```

**Expertise Areas**:
1. Frontend Development
2. Blockchain Engineering
3. AI & Machine Learning
4. Generative AI Prompt Design

**Usage**:
```tsx
<About />
```

---

### Projects

**File**: `src/components/Projects.tsx`

Showcase of development projects.

**Features**:
- Project cards with images
- Technology stack icons
- Live demo links
- GitHub repository links
- Hover effects and animations
- Responsive grid

**Project Structure**:
```typescript
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}
```

**Adding a New Project**:
```typescript
const newProject = {
  title: "Project Name",
  description: "Project description",
  image: "/project-image.jpg",
  tech: ["React", "TypeScript", "Tailwind"],
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com"
};
```

**Usage**:
```tsx
<Projects />
```

---

### Skills

**File**: `src/components/Skills.tsx`

Technical skills and technologies showcase.

**Features**:
- Tabbed interface
- Category filtering (All, Frontend, Languages, Blockchain, Tools)
- Technology logos
- Animated skill cards
- Responsive grid layout

**Skill Categories**:
- **All Skills**: Complete skill set
- **Frontend**: React, Next.js, TypeScript, etc.
- **Languages**: JavaScript, Python, C/C++, etc.
- **Blockchain**: Solidity, Ethereum, Web3.js, etc.
- **Tools**: Git, VS Code, Figma, etc.

**Adding a New Skill**:
```typescript
const newSkill = {
  name: "Skill Name",
  logo: "https://logo-url.com/logo.svg"
};

// Add to appropriate category
skills.frontend.push(newSkill);
skills.all.push(newSkill);
```

**Usage**:
```tsx
<Skills />
```

---

### Achievements

**File**: `src/components/Achievements.tsx`

Awards and recognitions timeline.

**Features**:
- Timeline-based layout
- Achievement cards
- Category badges
- Animated entrance effects
- Responsive design

**Achievement Structure**:
```typescript
interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  category: string;
  icon: ReactNode;
}
```

**Usage**:
```tsx
<Achievements />
```

---

### Education

**File**: `src/components/Education.tsx`

Educational background and qualifications.

**Features**:
- Timeline layout
- Institution cards
- Degree information
- Specialization details
- Animated transitions

**Education Structure**:
```typescript
interface Education {
  degree: string;
  institution: string;
  duration: string;
  specialization?: string;
  logo?: string;
}
```

**Usage**:
```tsx
<Education />
```

---

### Contact

**File**: `src/components/Contact.tsx`

Contact form and social links.

**Features**:
- Form validation (React Hook Form + Zod)
- Email integration
- Social media links
- Success/error notifications
- Responsive layout

**Form Fields**:
- Name (required)
- Email (required, validated)
- Subject (required)
- Message (required, min 10 characters)

**Validation Schema**:
```typescript
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10)
});
```

**Usage**:
```tsx
<Contact />
```

---

## Utility Components

### ThemeToggle

**File**: `src/components/ThemeToggle.tsx`

Dark/light mode switcher.

**Features**:
- Smooth theme transitions
- Icon animation
- Persistent theme preference
- Accessible button

**Usage**:
```tsx
<ThemeToggle />
```

---

### ScrollProgress

**File**: `src/components/ScrollProgress.tsx`

Visual scroll position indicator.

**Features**:
- Fixed top position
- Smooth progress animation
- Responsive width
- Gradient color

**Usage**:
```tsx
<ScrollProgress />
```

---

### BackToTop

**File**: `src/components/BackToTop.tsx`

Quick navigation to top of page.

**Features**:
- Appears after scrolling
- Smooth scroll animation
- Hover effects
- Fixed positioning

**Usage**:
```tsx
<BackToTop />
```

---

### SocialSidebar

**File**: `src/components/SocialSidebar.tsx`

Fixed social media links sidebar.

**Features**:
- Fixed left positioning
- Social media icons
- Hover animations
- Responsive visibility

**Social Links**:
- GitHub
- LinkedIn
- Twitter
- Email

**Customization**:
```tsx
const socialLinks = [
  { icon: <Github />, url: "your-github-url", label: "GitHub" },
  { icon: <Linkedin />, url: "your-linkedin-url", label: "LinkedIn" },
  // Add more links
];
```

**Usage**:
```tsx
<SocialSidebar />
```

---

### Preloader

**File**: `src/components/Preloader.tsx`

Loading animation for initial page load.

**Features**:
- Animated logo/spinner
- Fade out transition
- Automatic hide after load
- Full-screen overlay

**Usage**:
```tsx
<Preloader />
```

---

## UI Components

The `src/components/ui/` directory contains reusable UI components from shadcn/ui:

### Available Components

- **Button**: Customizable button component
- **Card**: Container component with variants
- **Input**: Form input with validation
- **Label**: Form label component
- **Tabs**: Tabbed interface component
- **Toast**: Notification component
- **Dialog**: Modal dialog component
- **Dropdown**: Dropdown menu component
- **Tooltip**: Tooltip component
- **Badge**: Badge/tag component
- **Avatar**: User avatar component
- **Progress**: Progress bar component
- **Separator**: Divider component
- **And many more...**

### Usage Example

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <Button variant="default" size="lg">
        Click Me
      </Button>
    </Card>
  );
}
```

---

## Best Practices

### Component Structure

1. **Import statements** at the top
2. **Type definitions** (if needed)
3. **Component function**
4. **Return JSX**
5. **Export** at the bottom

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use semantic HTML elements
- Maintain consistent spacing

### Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation
- Maintain color contrast ratios

### Performance

- Lazy load images
- Use React.memo for expensive components
- Optimize animations
- Minimize re-renders

---

## Component Dependencies

```
App.tsx
├── Preloader
├── Header
│   └── ThemeToggle
├── ScrollProgress
├── SocialSidebar
├── Hero
├── About
├── Projects
├── Skills
├── Achievements
├── Education
├── Contact
├── Footer
└── BackToTop
```

---

## Troubleshooting

### Common Issues

**Issue**: Component not rendering
- Check import paths
- Verify component is exported
- Check for TypeScript errors

**Issue**: Styles not applying
- Ensure Tailwind classes are correct
- Check theme configuration
- Verify CSS is imported

**Issue**: Animations not working
- Check Framer Motion is installed
- Verify animation variants
- Check for CSS conflicts

---

## Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
