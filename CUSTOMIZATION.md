# 🎨 Customization Guide

This guide will help you customize the portfolio to match your personal brand and preferences.

---

## Table of Contents

- [Personal Information](#personal-information)
- [Colors and Themes](#colors-and-themes)
- [Content Updates](#content-updates)
- [Styling Customization](#styling-customization)
- [Adding New Sections](#adding-new-sections)

---

## Personal Information

### Update Profile Image

Replace the background image in the About section:

1. Add your image to `/public/` directory
2. Update the image path in `About.tsx`:

```tsx
<img 
  src="/your-image.jpg" 
  alt="Profile Background" 
  className="w-full h-full object-cover opacity-100"
/>
```

### Update Resume

Change the resume download link in `About.tsx`:

```tsx
const handleResumeDownload = () => {
  const resumeUrl = "YOUR_RESUME_URL";
  window.open(resumeUrl, "_blank");
};
```

### Update Social Links

Modify social media links in `SocialSidebar.tsx` and `Contact.tsx`:

```tsx
const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/YOUR_USERNAME",
    label: "GitHub"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com/in/YOUR_PROFILE",
    label: "LinkedIn"
  },
  // Add more links
];
```

---

## Colors and Themes

### Primary Color Scheme

Edit `tailwind.config.ts` to change the color palette:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Add custom colors
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
    },
  },
};
```

### CSS Variables

Update CSS variables in `src/index.css`:

```css
:root {
  --primary: 330 81% 60%;        /* Pink */
  --secondary: 280 70% 60%;      /* Purple */
  --accent: 200 70% 60%;         /* Blue */
  
  /* Customize other colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 330 81% 60%;
}

.dark {
  --primary: 330 81% 60%;
  --secondary: 280 70% 60%;
  --accent: 200 70% 60%;
  
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 330 81% 60%;
}
```

### Gradient Customization

Update gradient effects throughout the site:

```tsx
// Example: Update gradient in About.tsx
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>
```

---

## Content Updates

### Hero Section

Update your introduction in `Hero.tsx`:

```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>
<p className="text-xl md:text-2xl text-muted-foreground mb-8">
  Your Professional Title
</p>
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Your brief introduction and what you do
</p>
```

### About Section

Update your bio in `About.tsx`:

```tsx
<p className="text-lg text-muted-foreground leading-relaxed">
  Your personal introduction and background
</p>
```

Update expertise cards:

```tsx
const expertiseAreas = [
  {
    icon: <Code2 className="text-primary" />,
    title: "Your Expertise 1",
    description: "Technologies and skills",
    gradient: "from-primary/10 to-accent/10",
    border: "border-primary/30"
  },
  // Add more expertise areas
];
```

### Projects Section

Add your projects in `Projects.tsx`:

```tsx
const projects = [
  {
    title: "Project Name",
    description: "Brief project description highlighting key features and impact",
    image: "/project-screenshot.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/username/repo",
    demo: "https://project-demo.com"
  },
  // Add more projects
];
```

**Project Image Guidelines**:
- Recommended size: 1200x630px
- Format: JPG or PNG
- Optimize for web (< 500KB)

### Skills Section

Update your skills in `Skills.tsx`:

```tsx
const skillsData = {
  all: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    // Add all your skills
  ],
  frontend: [
    // Frontend specific skills
  ],
  languages: [
    // Programming languages
  ],
  blockchain: [
    // Blockchain technologies
  ],
  tools: [
    // Development tools
  ]
};
```

**Finding Skill Logos**:
- [DevIcon](https://devicon.dev/)
- [Simple Icons](https://simpleicons.org/)
- [SVG Repo](https://www.svgrepo.com/)

### Achievements Section

Add your achievements in `Achievements.tsx`:

```tsx
const achievements = [
  {
    title: "Achievement Title",
    organization: "Organization Name",
    date: "Month Year",
    description: "Achievement description and impact",
    category: "Category (Award/Certification/Recognition)",
    icon: <Trophy className="w-6 h-6" />
  },
  // Add more achievements
];
```

### Education Section

Update your education in `Education.tsx`:

```tsx
const education = [
  {
    degree: "Your Degree",
    institution: "University/College Name",
    duration: "Start Year - End Year",
    specialization: "Your Specialization",
    logo: "/institution-logo.png",
    description: "Additional details or achievements"
  },
  // Add more education entries
];
```

---

## Styling Customization

### Typography

Update font family in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
};
```

Import fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Poppins:wght@600;700;800&display=swap');
```

### Spacing and Layout

Adjust container widths and spacing:

```tsx
// In any component
<div className="container mx-auto px-4 max-w-7xl">
  {/* Your content */}
</div>
```

### Animation Timing

Customize animation durations in Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Content */}
</motion.div>
```

### Border Radius

Update border radius in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
```

Then update the CSS variable in `src/index.css`:

```css
:root {
  --radius: 0.5rem; /* Adjust this value */
}
```

---

## Adding New Sections

### Step 1: Create Component

Create a new file in `src/components/`:

```tsx
// src/components/NewSection.tsx
import { Card } from "@/components/ui/card";

const NewSection = () => {
  return (
    <section id="new-section" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Section <span className="gradient-text">Title</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Section description
          </p>
        </div>
        
        {/* Your content here */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            {/* Card content */}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
```

### Step 2: Import in App

Add to `src/App.tsx`:

```tsx
import NewSection from "./components/NewSection";

function App() {
  return (
    <>
      {/* Other components */}
      <NewSection />
      {/* Other components */}
    </>
  );
}
```

### Step 3: Add Navigation Link

Update `Header.tsx` to include navigation:

```tsx
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "New Section", href: "#new-section" }, // Add this
  // Other items
];
```

---

## Advanced Customization

### Custom Animations

Create custom animation variants:

```tsx
const customVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

<motion.div
  variants={customVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

### Custom Hooks

Create reusable hooks in `src/hooks/`:

```tsx
// src/hooks/useScrollPosition.ts
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};
```

### Custom Utilities

Add utility functions in `src/lib/utils.ts`:

```typescript
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
```

---

## Tips and Best Practices

### Performance

1. **Optimize Images**: Use WebP format and lazy loading
2. **Code Splitting**: Use dynamic imports for large components
3. **Minimize Dependencies**: Only import what you need
4. **Use Production Build**: Test with `npm run build`

### Accessibility

1. **Alt Text**: Add descriptive alt text to all images
2. **ARIA Labels**: Use ARIA labels for interactive elements
3. **Keyboard Navigation**: Ensure all features work with keyboard
4. **Color Contrast**: Maintain WCAG AA standards

### SEO

1. **Meta Tags**: Update in `index.html`
2. **Semantic HTML**: Use proper heading hierarchy
3. **Descriptive Links**: Use meaningful link text
4. **Image Optimization**: Compress and optimize all images

---

## Troubleshooting

### Common Issues

**Colors not updating**:
- Clear browser cache
- Rebuild the project
- Check CSS variable syntax

**Fonts not loading**:
- Verify font import in CSS
- Check font URL is correct
- Ensure font family name matches

**Images not displaying**:
- Check file path is correct
- Verify image is in public folder
- Check file extension matches

---

## Need Help?

- Check the [README](README.md) for general information
- Review [Component Documentation](COMPONENTS.md) for component details
- Open an issue on GitHub for bugs or questions

---

**Happy Customizing! 🎨✨**
