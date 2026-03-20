# Project Structure

## Root Directory
```
├── assets/                 # Static assets
│   └── Profile_image.jpg   # Profile photo
├── index.html             # Main HTML file (single-page app)
├── script.js              # Main JavaScript functionality
├── styles.css             # All CSS styles and responsive design
├── package.json           # Project dependencies and scripts
└── package-lock.json      # Dependency lock file
```

## Code Organization

### HTML Structure (`index.html`)
- Single-page application with semantic sections
- Navigation with smooth scroll anchors
- Sections: Hero, About, Skills, Experience, Projects, Blog, Certifications, Contact
- External CDN resources loaded in `<head>`
- Form integration with Formspree

### CSS Architecture (`styles.css`)
- CSS custom properties for theming (`:root` variables)
- Mobile-first responsive design approach
- Component-based styling (header, hero, sections, etc.)
- Grid and Flexbox layouts
- Animation and transition effects
- Media queries for responsive breakpoints

### JavaScript Functionality (`script.js`)
- AOS (Animate On Scroll) initialization
- Typed.js for hero section typewriter effect
- Mobile navigation toggle
- Active navigation link highlighting
- Form validation and submission handling
- Skills carousel/scroll functionality
- Experience stepper interactivity

## Styling Conventions
- BEM-like naming convention for CSS classes
- Consistent spacing using CSS custom properties
- Color scheme defined in CSS variables
- Font families: Montserrat (headings), Open Sans (body), Source Code Pro (code)
- Responsive breakpoints: 768px, 900px, 1100px

## Asset Management
- Profile image stored in `/assets/` directory
- External resources loaded via CDN (fonts, icons)
- Favicon generated as inline SVG data URI