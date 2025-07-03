# Theme Switching System Guide

Your medical landing page now has a comprehensive, professional color palette system with easy switching capabilities. Here's how to use it:

## Current Setup (Build-time Switching)

Your `tailwind.config.js` already includes a great system with semantic color keys:

### Available Themes:
- **Default**: Original medical theme (blue/red accents)
- **Professional**: Navy/slate/gold professional theme  
- **Professional Dark**: Darker variant with enhanced contrast

### Theme Colors Available:
- `bg-themeBackground` - Main page background
- `bg-themeSurface` - Card/component surfaces  
- `bg-themeSurfaceLight` - Subtle background areas
- `bg-themePrimary` - Primary brand color
- `bg-themeSecondary` - Secondary/button color
- `bg-themeAccent` - Accent/highlight color
- `text-themeTextPrimary` - Main text color
- `text-themeTextSecondary` - Secondary text color

### To Switch Themes:
1. Edit `tailwind.config.js`
2. Change: `const activeTheme = themes.professional;`
3. Options: `themes.default`, `themes.professional`, `themes.professionalDark`
4. Restart your dev server: `npm run dev`

## Runtime Theme Switching (Advanced)

For instant theme switching without rebuilds:

### 1. Use the Runtime Config:
Replace your current `tailwind.config.js` with `tailwind.config.runtime.js` (already created)

### 2. Use CSS Custom Properties:
Your `global.css` now includes CSS custom properties for all themes

### 3. Add the Runtime Theme Switcher:
```tsx
import RuntimeThemeSwitcher from '@/components/RuntimeThemeSwitcher';

// Add anywhere in your layout:
<RuntimeThemeSwitcher />
```

### 4. Use Runtime Theme Classes:
Instead of `bg-themeBackground`, use `bg-theme-background` (with dashes)
- `bg-theme-primary`
- `bg-theme-secondary` 
- `bg-theme-accent`
- `bg-theme-background`
- `bg-theme-surface`
- `bg-theme-surface-light`
- `text-theme-text-primary`
- `text-theme-text-secondary`

## Converting Components to Use Themes

### Example: Button Component
```tsx
// Before:
className="bg-customBlue text-white"

// After (build-time):
className="bg-themeSecondary text-themeSurface"

// After (runtime):
className="bg-theme-secondary text-theme-surface"
```

### Example: Background Colors
```tsx
// Before:
className="bg-white"

// After (build-time):
className="bg-themeSurface"

// After (runtime):
className="bg-theme-surface"
```

## Navigation Color Control

Your navigation components have been updated to use theme colors:

### TopNav.tsx:
- Uses `text-themeTextPrimary` for main text
- Uses `text-themeSecondary` for the heart icon and buttons
- Uses `bg-themeSecondary` for the appointment button

### Header.tsx:
- Uses `bg-themeBackground` for the header background

### NavMobile.tsx:
- Uses `bg-themeSurface` for the mobile menu background
- Uses theme colors throughout for consistent theming

## Professional Theme Palettes

### Professional Theme:
- **Primary**: Deep slate (#0f172a) - for headings and primary elements
- **Secondary**: Navy blue (#1e3a8a) - for buttons and links  
- **Accent**: Gold (#d97706) - for highlights and CTAs
- **Background**: Light slate (#f1f5f9) - sophisticated page background
- **Surface**: Pure white (#ffffff) - for cards and components
- **Text**: Dark slate with good contrast ratios

### Professional Dark Theme:
- **Primary**: Deep slate (#0f172a)
- **Secondary**: Darker navy (#1e40af)
- **Accent**: Warmer gold (#f59e0b)
- **Background**: Darker slate (#e2e8f0)
- **Surface**: Very light slate (#f8fafc)
- **Text**: Enhanced contrast for readability

## Best Practices

1. **Always use semantic color names** instead of specific colors
2. **Test all themes** to ensure good contrast and readability
3. **Use hover states** with theme colors: `hover:bg-themeAccent`
4. **Group related color changes** when converting components
5. **Keep legacy colors** for backward compatibility during transition

## Quick Theme Preview

Currently active: **Professional Theme**
- Clean, business-oriented appearance
- Navy blue and gold accents
- Excellent readability and contrast
- Perfect for medical/professional services

To switch back to the medical theme, change the activeTheme to `themes.default` in your config.

## Components Already Updated

✅ Header/TopNav - Professional navigation colors
✅ NavMobile - Mobile menu with theme colors  
✅ ButtonRed - Updated to use theme colors with hover states
✅ Basic theme structure in place

## Next Steps

1. **Update remaining components** to use theme colors
2. **Add RuntimeThemeSwitcher** if you want instant switching
3. **Test all themes** across different components
4. **Customize theme palettes** as needed for your brand

Your theme system is now professional, scalable, and easy to maintain!
