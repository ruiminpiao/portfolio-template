# portfolio-template
This is a portfolio template designed mainly for other designers in search of a base from which they can build their web portfolio.

You can find the deployed project in: [here](https://ruiminpiao.github.io/portfolio-template/)
---

## Team
- Members: 
Ruimin Piao



---

## Concept

- **Theme:** Creative Portfolio Template
- **Narrative:** This is a website template so that anyone is able to build their website portfolio, without having to do it from scartch. They should substitute the texts with the information that they see more fitting, and the images should also be switched to showcase their works.
- **Goal:** To help other people to build their portfolio on an online site, and allowing them to have a version of their portfolio that is different from a PDF format.



---

## Features 

- Big, clear hero section, with subtitles to guide the user
- Clear, sans serif font for good legibility
- About Section with information about the designer
- Projects Section that features UX cards with the main projects
- Contacts Section with the contact information
- Clear navigation
- Responsive:
  - Scales on mobile and desktop
  - Uses `clamp()` for sizes



---

## Project Structure

PORTFOLIO-TEMPLATE/
├── index.html
├── 404.html
├── README.md
├── LICENSE
├── .gitignore
├── docs/                  # Documentation and plans
│   └── plan.md            # Development plan with AI (if used)
├── assets/
│   ├── css/
│   │   ├── index.css        # “barrel” document: centraliza todos los imports de CSS
│   │   ├── base.css         # reset, variables, estilos de raíz
│   │   ├── layout.css       # utilidades de layout/grid/flex
│   │   ├── components.css   # estilos compartidos de componentes (botones, cards, etc.)
│   │   └── [otros].css      # añade según necesidad
│   ├── js/
│   │   └── main.js
│   ├── images/              # idealmente CDN ideally; si son locales, optimizadas y ligeras
│   └── fonts/               # si usas tipografías personalizadas (se prefieren las de sistema)
└── [configuración de build si aplica]