

# Modern Bangladeshi Portfolio Website

## Design System
- **Color Palette**: Bangladesh Green (#006747) as primary, Bangladesh Red (#F42A41) for accents/CTAs, warm terracotta and off-white backgrounds
- **Typography**: Modern serif (Playfair Display) for headings, clean sans-serif (Inter) for body text
- **Patterns**: Subtle Jamdani-inspired geometric SVG patterns as low-opacity background overlays and section dividers
- **Spacing**: Generous whitespace throughout for a premium, uncluttered feel

## Sections (Single Page, Top to Bottom)

### 1. Hero — Split Screen
- **Left**: Bold name, title, and a short tagline with a decorative Rickshaw Art-inspired border frame element
- **Right**: Professional headshot placeholder with a floating animated "Available for Hire" badge
- CTA button in Bangladesh Red linking to the Contact section

### 2. About
- Two-column layout: narrative text on one side, a secondary image or highlight card on the other
- Brief personal journey with a warm, conversational tone

### 3. Education & Experience — Timeline
- Vertical timeline with glassmorphism-styled cards (frosted glass effect)
- Each card shows role/degree, organization, date range, and a short description
- Alternating left-right layout on desktop, stacked on mobile

### 4. Skills
- A horizontal auto-scrolling marquee bar with tech logos/icons
- Below it, a grid of "skill chips" with hover animations (scale + color shift)

### 5. Projects & Blogs — Card Grid
- Card-based layout showing cover image, title, tags, and a "Read More" button
- Clicking "Read More" opens a full-screen modal that displays parsed Markdown content
- Content fetched from a configurable GitHub repository via raw GitHub URLs
- Tabbed or filtered view to switch between Projects and Blog posts

### 6. Quick Stats — Bento Grid
- 4-column responsive grid with large animated counter numbers
- Stats like "50+ Projects," "3+ Years Exp," etc. with subtle icons
- Glassmorphism or soft card styling consistent with the rest

### 7. Contact
- Simple contact form wired to Formspree (or mailto fallback)
- Social icons row: GitHub, LinkedIn, X (Twitter)
- Jamdani pattern as a footer decorative element

## Interactions & Animation
- Framer Motion for scroll-reveal animations on each section
- Smooth hover transitions on cards, buttons, and skill chips
- Marquee animation for the skills logo bar
- Number count-up animation for the stats section

## Technical Notes
- All content (projects, blogs) driven by Markdown files fetched from GitHub — no backend needed
- Fully responsive across desktop, tablet, and mobile
- Dark/light mode not included unless requested (the palette is designed for light mode)

