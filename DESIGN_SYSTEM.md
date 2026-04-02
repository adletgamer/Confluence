# Confluxi Design System — Premium Institutional Fintech

## Overview
Confluxi's design system follows institutional fintech principles (Stripe, Mercury, Ramp aesthetic). The system prioritizes clarity, trustworthiness, and premium whitespace while maintaining accessibility and performance.

---

## Color Tokens

### Primary Palette
```
Background:  oklch(0.972 0.008 260)  — Soft neutral gray-blue (#F7F8FC equivalent)
Foreground:  oklch(0.185 0.05 260)   — Deep slate (text)
Card:        oklch(0.99 0.001 0)     — Pure white
Primary:     oklch(0.475 0.25 261)   — Professional blue (CTAs, navigation active state)
Secondary:   oklch(0.94 0.005 260)   — Subtle light gray (backgrounds, hover states)
Muted:       oklch(0.92 0.008 260)   — Muted elements (borders, dividers)
Muted Text:  oklch(0.51 0.04 260)    — Secondary text, helper text
```

### Status Colors
```
Verified:     bg-emerald-50, text-emerald-700, border-emerald-200
Active:       bg-emerald-50, text-emerald-700, border-emerald-200
In Progress:  bg-blue-50, text-blue-700, border-blue-200
Pending:      bg-amber-50, text-amber-700, border-amber-200
Rejected:     bg-red-50, text-red-700, border-red-200
```

---

## Border Radius System

| Element | Value | Tailwind Class |
|---------|-------|----------------|
| Cards | 20px | `rounded-[20px]` |
| Buttons/Inputs | 14px | `rounded-[14px]` |
| Small elements | 12px | `rounded-[12px]` |
| Icon containers | 10px | `rounded-[10px]` |

---

## Typography System

### Headings
```
H1:  text-3xl sm:text-4xl font-semibold tracking-tight
H2:  text-2xl sm:text-3xl font-semibold tracking-tight
H3:  text-lg font-semibold
```

### Body Text
```
Body:       text-base leading-relaxed (14-16px)
Small:      text-sm leading-relaxed
XSmall:     text-xs
Labels:     text-xs font-semibold uppercase tracking-wide
```

### Font Family
- **Primary**: Inter (sans-serif)
- **Mono**: Geist Mono (code blocks)

---

## Spacing & Whitespace

### Scale
```
2px, 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
```

### Common Uses
```
Component padding:    px-6 py-5 (cards)
Form input padding:   px-4 py-2.5
Section padding:      px-5 sm:px-8
Gaps between items:   gap-4, gap-6, gap-8
Vertical spacing:     mb-6, mt-2, py-5
```

---

## Component Library

### PageHeader
Premium page title with optional subtitle and action button.
```typescript
<PageHeader
  title="Dashboard"
  subtitle="Overview of your lending activity"
  action={<Button>New Loan Request</Button>}
/>
```
**Styling**: Large title (3-4xl), subtle border-bottom, generous spacing

### MetricCard
Display key metrics with icon and optional subtitle.
```typescript
<MetricCard
  label="Total Borrowed"
  value="$150,000"
  subtitle="Across all loans"
  icon={<DollarSign size={20} />}
/>
```
**Styling**: White card, 20px radius, 6px icon background, hover shadow

### StatusBadge
Colored status indicator with soft backgrounds.
```typescript
<StatusBadge status="verified" />
```
**Styling**: Soft tinted background, clean typography, 12px padding

### FeatureCard
Icon + title + description for feature lists.
```typescript
<FeatureCard
  icon={<Shield size={20} />}
  title="Risk Assessment"
  description="AI-powered credit analysis"
/>
```
**Styling**: White card, 20px radius, icon in secondary background

---

## Interactive States

### Buttons
```
Default:  bg-primary text-white
Hover:    opacity-90, shadow-md
Pressed:  scale-98 (subtle scale down)
Disabled: opacity-50 cursor-not-allowed
```

### Links
```
Default:  text-primary
Hover:    text-primary/80
Focus:    outline-2 outline-ring (focus-visible)
```

### Inputs
```
Default:   border-border bg-white
Focus:     ring-2 ring-ring border-primary
Invalid:   border-destructive ring-destructive/20
Disabled:  opacity-50 cursor-not-allowed
```

---

## Cards & Containers

### Standard Card
```html
<div className="bg-card border border-border rounded-[20px] p-6 shadow-sm hover:shadow-md transition-shadow">
  <!-- Content -->
</div>
```

### Card with Header
```html
<div className="bg-card border border-border rounded-[20px] overflow-hidden shadow-sm">
  <div className="px-6 py-5 border-b border-border/50">
    <h2 className="text-lg font-semibold">Title</h2>
  </div>
  <div className="p-6"><!-- Content --></div>
</div>
```

### Grouped Items
```html
<div className="divide-y divide-border/50">
  <!-- Items separated by subtle divider -->
</div>
```

---

## Layout Patterns

### Grid Responsive Pattern
```typescript
// 1 col on mobile, 2 on tablet, 3 on desktop
className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"

// 2/3 main content, 1/3 sidebar
className="grid lg:grid-cols-3 gap-6"
<div className="lg:col-span-2">Main</div>
<div>Sidebar</div>
```

### Sidebar + Content Layout
```
<div className="flex">
  <AppSidebar />  <!-- w-60, fixed height, sticky -->
  <main>          <!-- flex-1, main content -->
    <Navbar />
    <Content />
  </main>
</div>
```

---

## Accessibility Standards

### Color Contrast
- Text on background: ≥4.5:1 (WCAG AA)
- Large text: ≥3:1
- UI components: ≥3:1

### Interactive Elements
- Minimum target size: 44×44px
- Focus indicators: 2px outline in ring color
- Keyboard navigation: All interactive elements focusable
- ARIA labels: For icon-only buttons and status changes

### Semantic HTML
```html
<!-- ✅ Good -->
<nav aria-label="Main navigation">
  <a href="/dashboard">Dashboard</a>
</nav>

<!-- ❌ Bad -->
<div className="nav">
  <span>Dashboard</span>
</div>
```

---

## Shadow System

### Shadows
```
No shadow:    Default cards
shadow-sm:    Hover states, light elevation
shadow-md:    Modals, important containers
```

**Rules**:
- Cards: No default shadow, add on hover
- Buttons: No shadow by default
- Modals: shadow-lg (rare)

---

## Animation & Transitions

### Duration
```
duration-200   — Quick interactions (buttons, hovers)
duration-300   — Progress bars, state changes
duration-500   — Important transitions (progress)
```

### Common Patterns
```typescript
// Hover transition
className="hover:shadow-md transition-shadow duration-200"

// Color transition
className="hover:bg-secondary transition-colors duration-200"

// All properties
className="hover:shadow-md transition-all duration-200"

// Disabled (no animation)
className="pointer-events-none opacity-50"
```

---

## Responsive Design

### Breakpoints
```
Mobile:   <640px  (default)
Tablet:   ≥640px  (sm:)
Desktop:  ≥1024px (lg:)
```

### Mobile-First Strategy
```typescript
// ✅ Good: Mobile first, enhance for larger screens
className="text-lg sm:text-xl lg:text-2xl"
className="grid sm:grid-cols-2 lg:grid-cols-4"
className="flex flex-col lg:flex-row"

// ❌ Bad: Desktop first
className="hidden md:block"  // Avoid if possible
```

---

## Dark Mode (Future)
Currently light mode only. When implementing dark mode:
- Use CSS variables (already in place)
- Follow system preference or user toggle
- Maintain same contrast ratios
- Use slightly lighter backgrounds (not pure black)

---

## Premium Design Principles

1. **Whitespace First**: Generous spacing feels premium
2. **Soft Shadows**: Subtle elevation, not harsh drop shadows
3. **Cohesive Radius**: Consistent 20px cards, 14px buttons
4. **Typography Hierarchy**: Clear visual distinction between text sizes
5. **Color Restraint**: Limited, intentional color palette
6. **Interaction Feedback**: Smooth transitions, clear hover/active states
7. **Edge Cases**: Skeleton loaders, error states, empty states all designed
8. **Performance**: SVG icons, optimized images, minimal CSS

---

## Design Review Checklist

- [ ] Card radius: 20px for main containers
- [ ] Button radius: 14px for actions
- [ ] Spacing consistent with 8px scale
- [ ] Text contrast ≥4.5:1
- [ ] Hover states on interactive elements
- [ ] Mobile responsive (tested at 375px, 640px, 1024px)
- [ ] No hardcoded colors (use tokens)
- [ ] Icon sizes consistent (20px, 24px, 18px)
- [ ] Status badges use soft colors
- [ ] Cards have subtle shadow on hover
- [ ] Focus indicators visible
- [ ] Empty states designed
- [ ] Loading states (skeleton/spinner)

---

## Resources
- Color system: oklch() colors (perceptually uniform)
- Icons: lucide-react (24px default)
- Tailwind CSS: v4 (utility-first styling)
- Component library: shadcn/ui (accessible components)
- Design tool: Figma (design specs)
