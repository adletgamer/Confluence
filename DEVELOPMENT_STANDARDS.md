# Confluxi Frontend — Development Standards & Project Preparation Guide

## 1. PROJECT SETUP & INITIALIZATION

### 1.1 Environment Setup
- **Node.js**: ≥18.17 (use `.nvmrc` for version management)
- **Package Manager**: pnpm (faster, more reliable than npm)
- **Git**: Initialize with meaningful `.gitignore` (node_modules, .env.local, .next, dist)

### 1.2 Initial Repository Structure
```
confluxi/
├── app/              # Next.js app router
├── components/       # Reusable React components
├── lib/              # Utilities, mock data, types
├── public/           # Static assets
├── scripts/          # Build and automation scripts
├── tests/            # Jest/Vitest tests
├── .env.example      # Example environment variables
├── .prettierrc.json  # Code formatting
├── .eslintrc.json    # Linting rules
├── tsconfig.json     # TypeScript config
└── package.json      # Dependencies
```

### 1.3 Dependencies Management
- Use `pnpm add` / `pnpm remove` (never mix with npm/yarn)
- Lock file: `pnpm-lock.yaml` (commit to repo)
- Regular audits: `pnpm audit` for security vulnerabilities
- Keep dependencies minimal and up-to-date (monthly reviews)

---

## 2. CODE ARCHITECTURE & STRUCTURE

### 2.1 Component Organization
- **Shared Components** (`components/shared.tsx`): PageHeader, MetricCard, StatusBadge, FeatureCard
- **Layout Components** (`components/app-sidebar.tsx`, `components/navbar.tsx`): Persistent UI elements
- **Page-Specific Components** (`components/home-sections.tsx`): Feature-rich sections for home page
- **UI Library** (`components/ui/`): Button, Input, Select (shadcn/ui components)

### 2.2 File Naming Conventions
- **Components**: PascalCase (`AppSidebar.tsx`)
- **Utilities**: camelCase (`mockData.ts`, `utils.ts`)
- **Pages**: lowercase with dashes for routes (`/dashboard`, `/loans/new`, `/[id]`)
- **Types/Interfaces**: PascalCase with `Props` suffix (`PageHeaderProps`)

### 2.3 Component Hierarchy
```
RootLayout (app/layout.tsx)
├── Navbar (always visible)
├── AppSidebar (for /app routes)
├── Main Content
└── Footer
```

### 2.4 Separation of Concerns
- **Server Components (RSC)**: Fetch data, authentication, business logic
- **Client Components ("use client")**: Interactive elements, form handling, state management
- **Shared Components**: Reusable UI that doesn't require state
- Never pass event handlers to server components; wrap in client boundaries

---

## 3. DESIGN SYSTEM & STYLING

### 3.1 Color Tokens (Premium Institutional Fintech)
```css
/* Background: soft neutral gray-blue (#F7F8FC equivalent) */
--background: oklch(0.972 0.008 260);

/* Text: deep slate */
--foreground: oklch(0.185 0.05 260);

/* Cards: pure white */
--card: oklch(0.99 0.001 0);

/* Primary: clean professional blue */
--primary: oklch(0.475 0.25 261);

/* Secondary: subtle light gray */
--secondary: oklch(0.94 0.005 260);

/* Muted: for subtle elements */
--muted-foreground: oklch(0.51 0.04 260);
```

### 3.2 Border Radius (Premium Feel)
- **Cards**: 20px (`rounded-[20px]`)
- **Buttons/Inputs**: 14px (`rounded-[14px]` or `rounded-[12px]`)
- **Small elements**: 10px (`rounded-[10px]`)

### 3.3 Spacing & Whitespace
- Use consistent gap: 4px, 6px, 8px, 12px, 16px, 24px, 32px
- Page padding: 24px-32px (responsive: `px-5 sm:px-8`)
- Section margins: 32px-48px between major sections

### 3.4 Typography
- **Font**: Inter (sans-serif) for all text
- **Headings**: h1 (3-4xl, font-semibold), h2 (2-3xl, font-semibold), h3 (base-lg, font-semibold)
- **Body**: 14-16px with leading-relaxed (1.6) for readability
- **Labels**: text-xs, font-semibold, uppercase tracking-wide

### 3.5 Shadow System
- **Subtle**: `shadow-sm` for hover states and elevation
- **Cards**: No default shadow, add on hover
- **Modals**: Use `shadow-lg` sparingly

### 3.6 Hover & Transition States
- All interactive elements: `transition-colors duration-200` or `transition-all duration-200`
- Button hover: opacity/color shift, subtle shadow lift
- Card hover: shadow enhancement, slight background shift

---

## 4. TESTING STRATEGY

### 4.1 Test Types
- **Unit Tests**: Component logic, utility functions (Jest, Vitest)
- **Integration Tests**: Page interactions, form submission flows
- **E2E Tests**: Critical user journeys (Cypress, Playwright)
- **Visual Regression**: Design consistency (Percy, Chromatic)

### 4.2 Test Coverage Requirements
- Critical paths: 80%+ coverage
- Utilities: 100% coverage
- Components: 60%+ coverage
- **Never test third-party library behavior**

### 4.3 Test File Naming
- `components/button.test.tsx` (colocate with component)
- `__tests__/` directory for non-colocated tests
- Use descriptive test names: `test('renders with correct status badge color')`

### 4.4 Mock Data
- Use `lib/mock-data.ts` for consistent test fixtures
- Never hardcode data in components
- Mock external API calls in tests

---

## 5. VERSION CONTROL & GIT WORKFLOW

### 5.1 Commit Strategy
```
type(scope): description

fix(dashboard): adjust metric card border styling
feat(audit): add premium timeline design
refactor(components): extract PageHeader styling
docs(setup): add development standards guide
```

**Commit Types**:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring (no behavior change)
- `style`: Styling/design changes
- `docs`: Documentation
- `test`: Test additions/changes

### 5.2 Branch Naming
- `main`: Production-ready code
- `dev`: Development branch
- `feature/loan-approval`: Feature branches
- `fix/sidebar-hover-state`: Bug fixes
- `refactor/component-cleanup`: Refactoring

### 5.3 Pull Request Process
1. Create feature branch from `dev`
2. Open PR with clear description and screenshots
3. Peer code review (minimum 1 approval)
4. Automated checks pass (lint, tests, build)
5. Squash merge to maintain clean history

---

## 6. CONTINUOUS INTEGRATION & DEPLOYMENT

### 6.1 Pre-Commit Hooks (Husky)
```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run type-check"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": "eslint --fix",
    "*.{css,scss}": "stylelint --fix"
  }
}
```

### 6.2 CI Pipeline (GitHub Actions)
1. **Lint**: ESLint + Prettier formatting
2. **Type Check**: TypeScript strict mode
3. **Test**: Run full test suite
4. **Build**: Next.js build verification
5. **Deploy**: Automated to staging/production

### 6.3 Deployment Checklist
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Lighthouse score >90
- [ ] No console warnings
- [ ] Design reviewed (Figma/design tool)
- [ ] Accessibility audit passed (axe)
- [ ] Production env vars configured

---

## 7. ERROR HANDLING & DEBUGGING

### 7.1 Error Boundaries
- Wrap entire route groups in error boundaries
- Display user-friendly error messages (never internal details)
- Log errors to monitoring service (Sentry, LogRocket)

### 7.2 Console Logging Strategy
```typescript
// ✅ Debug logging during development
console.log("[v0] Component rendered:", { props, state })

// ❌ Never commit debug logs
console.log("Debug info")

// ✅ Structured error logging
console.error("Failed to fetch loans:", error.message)
```

### 7.3 Debugging Techniques
1. **Network Tab**: Check API response timing and payloads
2. **React DevTools**: Inspect component props and state
3. **Lighthouse**: Performance, accessibility, best practices
4. **Accessibility Tree**: Verify semantic HTML structure

### 7.4 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Event handler on Server Component | Wrap in `"use client"` boundary |
| Hydration mismatch | Ensure SSR content matches client render |
| Missing skeleton loader | Add Suspense boundary with fallback |
| Layout shift (CLS) | Define explicit dimensions for dynamic content |

---

## 8. CODE QUALITY & BEST PRACTICES

### 8.1 TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "skipLibCheck": true
  }
}
```

### 8.2 ESLint Rules
- `no-console`: Warn (error in production)
- `no-unused-vars`: Error
- `prefer-const`: Error
- `react/prop-types`: Off (using TypeScript)
- `react-hooks/rules-of-hooks`: Error

### 8.3 Component Best Practices
```typescript
// ✅ Good: Memoized, typed props, clear exports
interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {action && <div>{action}</div>}
    </div>
  )
}

// ❌ Bad: Inline styles, unclear naming, missing types
const Header = (props) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <h1 style={{ fontSize: '28px' }}>{props.t}</h1>
  </div>
)
```

### 8.4 Performance Optimization
- Use `Image` component for images (next/image)
- Implement code splitting with dynamic imports
- Lazy load non-critical components
- Memoize expensive calculations with `useMemo`
- Use `useCallback` for stable function references

---

## 9. DOCUMENTATION STANDARDS

### 9.1 README Sections
- Quick start instructions
- Environment setup
- Project structure overview
- Development workflow
- Deployment process
- Troubleshooting guide

### 9.2 Component Documentation
```typescript
/**
 * Displays loan metrics in a premium card format
 * 
 * @param label - Metric label (e.g., "Total Borrowed")
 * @param value - Metric value (string or number)
 * @param subtitle - Optional secondary text
 * @param icon - Optional icon component (20-24px)
 * 
 * @example
 * <MetricCard
 *   label="Credit Score"
 *   value={750}
 *   subtitle="Excellent"
 *   icon={<Shield size={20} />}
 * />
 */
export function MetricCard({ label, value, subtitle, icon }: MetricCardProps) {
  // Implementation
}
```

### 9.3 Inline Comments
- Comment **why**, not what (code should be self-explanatory)
- Explain non-obvious logic
- Mark workarounds with `// TODO:` or `// FIXME:`
- Keep comments updated when code changes

---

## 10. TEAM COLLABORATION & REVIEW PROCESS

### 10.1 Code Review Checklist
- [ ] No unused imports or variables
- [ ] All TypeScript types are explicit
- [ ] Props are properly typed
- [ ] No hardcoded values (use constants/configs)
- [ ] Accessibility attributes present (alt, aria-labels, roles)
- [ ] Mobile responsive (tested on multiple breakpoints)
- [ ] No console errors or warnings
- [ ] Performance optimized (no unnecessary re-renders)
- [ ] Tests added for new functionality
- [ ] Design matches specification

### 10.2 Design Review Process
1. **Before Implementation**: Confirm design spec with team
2. **During Development**: Reference design tokens and spacing system
3. **After Completion**: Screenshot comparison with Figma/design tool
4. **A/B Testing**: Document any intentional deviations

### 10.3 Async Communication
- Use GitHub issues for feature requests and bugs
- Link PRs to related issues
- Document decisions in commit messages
- Keep README updated with architecture changes

---

## 11. MAINTENANCE & MONITORING

### 11.1 Regular Maintenance Tasks
- **Weekly**: Check dependency updates, review open PRs
- **Monthly**: Security audit, performance review, accessibility audit
- **Quarterly**: Major dependency updates, refactoring sprints

### 11.2 Performance Monitoring
- Track Core Web Vitals (LCP, FID, CLS)
- Monitor bundle size (keep under 150KB gzipped)
- Watch error rates and user feedback
- Profile slow routes with Lighthouse

### 11.3 Accessibility Compliance
- Maintain WCAG 2.1 AA compliance
- Test with screen readers (NVDA, JAWS)
- Verify keyboard navigation
- Validate color contrast ratios (4.5:1 for text)

---

## 12. SECURITY BEST PRACTICES

### 12.1 Environment Variables
- Never commit `.env.local`
- Use `.env.example` as template
- Sensitive values only in secrets management
- Rotate secrets regularly

### 12.2 Dependency Security
- Regular `pnpm audit` checks
- Use dependabot or renovate for auto-updates
- Review dependency versions before major updates
- Remove unused dependencies quarterly

### 12.3 Input Validation
- Validate all user inputs server-side
- Sanitize HTML content
- Prevent XSS with proper escaping
- Use parameterized queries (when backend needed)

---

## 13. TROUBLESHOOTING COMMON ISSUES

### Hydration Mismatch
**Symptom**: "Hydration failed" warning in console
**Solution**: 
- Check `useEffect` dependencies
- Ensure SSR output matches client output
- Avoid dynamic imports in critical paths

### Slow Build Time
**Symptom**: `next build` takes >60 seconds
**Solution**:
- Analyze build: `ANALYZE=true npm run build`
- Remove unused dependencies
- Check for large images in public folder
- Enable SWC minification

### Type Errors in Components
**Symptom**: TypeScript complaints about prop types
**Solution**:
- Define explicit interface for all props
- Use `React.ReactNode` for flexible children
- Extend component props: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}`

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server (localhost:3000) |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint and formatting checks |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm test` | Run test suite |
| `pnpm test:watch` | Run tests in watch mode |

---

## Resources
- Next.js Docs: https://nextjs.org/docs
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- React Patterns: https://patterns.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com
- Web Accessibility: https://www.w3.org/WAI/
