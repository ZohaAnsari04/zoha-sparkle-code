# 🚀 Quick Start Guide

A quick reference for common tasks and workflows.

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/ZohaAnsari04/zoha-sparkle-code.git
cd zoha-sparkle-code

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173
```

---

## 🔧 Common Tasks

### Update Personal Information

**1. Change Name and Title**
- File: `src/components/Hero.tsx`
- Update the name and professional title

**2. Update Profile Image**
- Add image to `/public/` folder
- File: `src/components/About.tsx`
- Update image path: `src="/your-image.jpg"`

**3. Update Resume Link**
- File: `src/components/About.tsx`
- Change `resumeUrl` variable

**4. Update Social Links**
- File: `src/components/SocialSidebar.tsx`
- File: `src/components/Contact.tsx`
- Update URLs in social links array

---

### Add Content

**Add a New Project**

File: `src/components/Projects.tsx`

```tsx
const newProject = {
  title: "Project Name",
  description: "Brief description",
  image: "/project-image.jpg",
  tech: ["React", "TypeScript"],
  github: "https://github.com/username/repo",
  demo: "https://demo-url.com"
};
```

**Add a New Skill**

File: `src/components/Skills.tsx`

```tsx
const newSkill = {
  name: "Skill Name",
  logo: "https://logo-url.svg"
};

// Add to appropriate category
skills.all.push(newSkill);
skills.frontend.push(newSkill); // or other category
```

**Add an Achievement**

File: `src/components/Achievements.tsx`

```tsx
const newAchievement = {
  title: "Achievement Title",
  organization: "Organization Name",
  date: "Month Year",
  description: "Description",
  category: "Award",
  icon: <Trophy className="w-6 h-6" />
};
```

---

### Customize Appearance

**Change Colors**

File: `src/index.css`

```css
:root {
  --primary: 330 81% 60%;     /* Your color */
  --secondary: 280 70% 60%;   /* Your color */
  --accent: 200 70% 60%;      /* Your color */
}
```

**Change Font**

File: `tailwind.config.ts`

```typescript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

Then import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

**Adjust Animations**

File: Any component with animations

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // Adjust duration
>
```

---

## 🎨 Theme Customization

### Update Theme Colors

1. Edit `src/index.css` for CSS variables
2. Edit `tailwind.config.ts` for Tailwind colors
3. Restart dev server to see changes

### Add New Theme Variant

File: `src/index.css`

```css
.theme-variant {
  --primary: /* your color */;
  --secondary: /* your color */;
  /* ... other colors */
}
```

---

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo on [vercel.com](https://vercel.com)

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder on netlify.com
```

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🐛 Troubleshooting

### Development Server Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear cache
npm cache clean --force
```

### Build Fails

```bash
# Check for TypeScript errors
npm run build

# Fix any reported errors
# Common issues:
# - Missing imports
# - Type errors
# - Unused variables
```

### Styles Not Updating

```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev

# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
```

### Images Not Loading

- Check image is in `/public/` folder
- Verify path starts with `/` (e.g., `/image.jpg`)
- Check file extension matches actual file
- Ensure image file size is reasonable (< 1MB)

---

## 📝 Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint

# Git Workflow
git checkout -b feature/name    # Create new branch
git add .                       # Stage changes
git commit -m "message"         # Commit changes
git push origin feature/name    # Push to remote

# Deployment
npm run build            # Build first
vercel                   # Deploy to Vercel
netlify deploy --prod    # Deploy to Netlify
npm run deploy           # Deploy to GitHub Pages
```

---

## 📚 File Locations Quick Reference

| What to Update | File Location |
|----------------|---------------|
| Personal Info | `src/components/Hero.tsx` |
| Profile Image | `src/components/About.tsx` |
| Resume Link | `src/components/About.tsx` |
| Projects | `src/components/Projects.tsx` |
| Skills | `src/components/Skills.tsx` |
| Achievements | `src/components/Achievements.tsx` |
| Education | `src/components/Education.tsx` |
| Social Links | `src/components/SocialSidebar.tsx` |
| Colors | `src/index.css` |
| Fonts | `tailwind.config.ts` |
| Meta Tags | `index.html` |

---

## 🎯 Best Practices

### Before Committing

- [ ] Test all changes locally
- [ ] Check for console errors
- [ ] Test on mobile view
- [ ] Run build to check for errors
- [ ] Update documentation if needed

### Performance Tips

- Optimize images (use WebP, compress)
- Lazy load images
- Minimize bundle size
- Use production build for deployment

### Accessibility Checklist

- [ ] All images have alt text
- [ ] Proper heading hierarchy
- [ ] Keyboard navigation works
- [ ] Color contrast is sufficient
- [ ] ARIA labels where needed

---

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

---

## 💡 Tips

1. **Use the dev server** - Changes appear instantly
2. **Check browser console** - Catch errors early
3. **Test responsively** - Use browser dev tools
4. **Commit often** - Small, focused commits
5. **Read the docs** - Full documentation in other .md files

---

## 📞 Need Help?

- Check [README.md](README.md) for detailed info
- Review [COMPONENTS.md](COMPONENTS.md) for component details
- See [CUSTOMIZATION.md](CUSTOMIZATION.md) for customization
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Open an issue on GitHub

---

**Happy coding! 🎉**
