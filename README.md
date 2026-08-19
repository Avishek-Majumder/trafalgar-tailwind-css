# Trafalgar Landing Page (Tailwind CSS)

Ostad Module 14 Assignment - A responsive healthcare landing page built with Tailwind CSS, HTML5, and JavaScript based on the Figma community design.

---

## Figma Reference
- **Design:** [Trafalgar Landing Page – Figma Community](https://www.figma.com/design/el2yaFEXHtUECTarHtHP9N/Trafalgar-Landing-Page--Community-?node-id=0-1)

---

## Live Demo & Repository
- **Live Demo Link (Vercel):** [https://trafalgar-tailwind-css.vercel.app/](https://trafalgar-tailwind-css.vercel.app/)
- **Live Demo Link (GitHub Pages):** [https://avishek-majumder.github.io/trafalgar-tailwind-css/](https://avishek-majumder.github.io/trafalgar-tailwind-css/)
- **GitHub Repository:** [https://github.com/Avishek-Majumder/trafalgar-tailwind-css.git](https://github.com/Avishek-Majumder/trafalgar-tailwind-css.git)

---

## Overview & Features

- **Figma Design Matching:** Typography, colors (#458FF6, #1F1534, #7D7987), button styles, shadows, and section dividers matching the design.
- **Responsive Layout:** Responsive across mobile (<640px), tablet (768px - 1024px), and desktop (1024px+).
- **Tailwind CSS:** Built using Tailwind utility classes and customized theme tokens.
- **Typography:** Uses Google Font Mulish (weights 300, 400, 600, 700, 800, 900).
- **Vector Graphics:** Custom SVG icons and illustrations for the hero section, clinic features, mobile app showcase, and decorative patterns.
- **Interactive UI:**
  - Mobile drawer navigation with smooth backdrop overlay.
  - Testimonial carousel with previous/next controls, dot pagination, and auto-slide with hover pause.
  - Sticky navigation bar with subtle blur on scroll.
  - Smooth anchor link scrolling across sections.

---

## Project Structure

```
.
├── index.html          # Main landing page markup with Tailwind CSS
├── js/
│   └── main.js         # Interactive slider, mobile menu, and scroll effects
└── README.md           # Project documentation and details
```

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Avishek-Majumder/trafalgar-tailwind-css.git
   cd trafalgar-tailwind-css
   ```

2. Open `index.html` directly in your browser, or start a local server:
   ```bash
   # Using Python
   python -m http.server 8080

   # Or using Node serve
   npx serve .
   ```

3. Open `http://localhost:8080` in your browser.

---

## Deployment

### Vercel
- Hosted and deployed live on Vercel: [https://trafalgar-tailwind-css.vercel.app/](https://trafalgar-tailwind-css.vercel.app/)

### GitHub Pages
1. Go to repository **Settings** > **Pages**.
2. Under **Branch**, select `main` and root `/`.
3. Save to publish.

---

## License
This project was developed for the Ostad Web Development course assignment.
