# 🤝 Contributing to Zoha's Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

**Positive behavior includes**:
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards others

**Unacceptable behavior includes**:
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When reporting a bug, include**:
- Clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

**Example**:
```markdown
**Bug**: Navigation menu not closing on mobile

**Steps to Reproduce**:
1. Open site on mobile device
2. Click hamburger menu
3. Click a navigation link
4. Menu remains open

**Expected**: Menu should close after clicking link
**Actual**: Menu stays open

**Environment**: iOS 16, Safari
```

### Suggesting Enhancements

Enhancement suggestions are welcome! Please include:
- Clear description of the enhancement
- Why this enhancement would be useful
- Possible implementation approach
- Examples or mockups (if applicable)

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes** (see [Commit Guidelines](#commit-guidelines))
6. **Push to your fork** (`git push origin feature/AmazingFeature`)
7. **Open a Pull Request**

---

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun
- Git

### Setup Steps

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/zoha-sparkle-code.git
   cd zoha-sparkle-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Make your changes**
   - Follow the [Coding Standards](#coding-standards)
   - Test your changes thoroughly
   - Ensure no console errors

6. **Build and test**
   ```bash
   npm run build
   npm run preview
   ```

---

## Pull Request Process

### Before Submitting

- [ ] Code follows the project's coding standards
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Code is properly formatted
- [ ] Documentation is updated (if needed)
- [ ] Commits follow commit guidelines

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)
Add screenshots here

## Testing
Describe how you tested your changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on multiple browsers
```

### Review Process

1. Maintainer will review your PR
2. Address any requested changes
3. Once approved, PR will be merged
4. Your contribution will be credited

---

## Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` type when possible
- Use meaningful variable names

**Example**:
```typescript
// Good
interface Project {
  title: string;
  description: string;
  tech: string[];
}

const project: Project = {
  title: "My Project",
  description: "Description",
  tech: ["React", "TypeScript"]
};

// Avoid
const project: any = { ... };
```

### React Components

- Use functional components
- Use hooks appropriately
- Keep components focused and small
- Extract reusable logic into custom hooks

**Component Structure**:
```tsx
// Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Types
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

// Component
const MyComponent = ({ title, onAction }: MyComponentProps) => {
  const [state, setState] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <Button onClick={onAction}>Click</Button>
    </div>
  );
};

// Export
export default MyComponent;
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use semantic class names
- Maintain consistent spacing

**Example**:
```tsx
// Good
<div className="flex flex-col md:flex-row gap-4 p-6">
  <Card className="flex-1 hover:shadow-lg transition-shadow">
    Content
  </Card>
</div>

// Avoid inline styles
<div style={{ display: 'flex', padding: '24px' }}>
  Content
</div>
```

### File Organization

```
src/
├── components/
│   ├── ComponentName.tsx    # PascalCase for components
│   └── ui/                  # Reusable UI components
├── hooks/
│   └── useHookName.ts       # camelCase with 'use' prefix
├── lib/
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # Type definitions
```

### Naming Conventions

- **Components**: PascalCase (`MyComponent.tsx`)
- **Hooks**: camelCase with 'use' prefix (`useMyHook.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **Variables**: camelCase (`myVariable`)

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
# Feature
git commit -m "feat(projects): add filter by technology"

# Bug fix
git commit -m "fix(header): resolve mobile menu not closing"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Style
git commit -m "style(about): improve card spacing and alignment"

# Refactor
git commit -m "refactor(skills): extract skill card into separate component"
```

### Best Practices

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Keep subject line under 50 characters
- Capitalize first letter
- No period at the end
- Provide detailed body for complex changes

---

## Testing Guidelines

### Manual Testing

Before submitting a PR, test:

1. **Functionality**
   - Feature works as expected
   - No console errors
   - No broken links

2. **Responsiveness**
   - Mobile (< 640px)
   - Tablet (640px - 1024px)
   - Desktop (> 1024px)

3. **Browser Compatibility**
   - Chrome
   - Firefox
   - Safari
   - Edge

4. **Accessibility**
   - Keyboard navigation works
   - Screen reader friendly
   - Proper ARIA labels
   - Color contrast meets WCAG standards

5. **Performance**
   - Fast load times
   - Smooth animations
   - No layout shifts

---

## Documentation

### When to Update Documentation

Update documentation when:
- Adding new features
- Changing existing functionality
- Modifying configuration
- Adding new dependencies

### Documentation Files

- **README.md**: Project overview and setup
- **COMPONENTS.md**: Component documentation
- **CUSTOMIZATION.md**: Customization guide
- **CONTRIBUTING.md**: This file

---

## Questions or Need Help?

- **Issues**: Open an issue for bugs or questions
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: Contact the maintainer directly

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

**Thank you for contributing! 🎉**

Your contributions help make this project better for everyone.
