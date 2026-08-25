# Rohi Remodeling - Luxury Home Remodeling Web Application

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, high-end presentation web application for **Rohi Remodeling**, featuring interactive remodeling cost estimation, before/after transformation sliders, dark header optimized for the green brand logo, and multi-language support (English, Spanish, French).

---

## ✨ Features

- **Dark Contrast Header**: Specialized `#0A0F1D` background and glassmorphism styling ensuring maximum visual impact for the green logo (`isotipo-sin fondo.png`).
- **Multi-Language Support (i18n)**: Instant client-side switching between **English (EN)**, **Spanish (ES)**, and **French (FR)**.
- **Interactive Before & After Slider**: Touch and drag comparison slider showing kitchen renovation transformations.
- **Interactive Budget Estimator**: Real-time project cost calculator by space type (Kitchen, Bath, Whole Home, Exterior), finish level, and square footage.
- **Service & Portfolio Gallery**: Categorized project showcase with smooth transition filters.
- **The Rohi Method**: Clear 4-step workflow presentation.
- **Contact Form**: Direct quote requests with feedback toast notifications.

---

## 🛠️ Project Structure

```text
Rohi Remodeling/
├── index.html            # Main semantic HTML structure with i18n attributes
├── styles.css            # Custom CSS design system, dark header, and responsive layout
├── app.js                # i18n translation engine & interactive UI logic
├── server.ps1            # Lightweight native PowerShell HTTP server (Port 8080)
├── isotipo-sin fondo.png # Standalone company logo asset
└── img/                  # High-resolution project photography
    ├── hero.jpg
    ├── kitchen_before.jpg
    ├── kitchen_after.jpg
    └── bathroom.jpg
```

---

## 🚀 Getting Started

### Option 1: Direct File Opening
Simply double-click `index.html` or drag it into any modern web browser.

### Option 2: Localhost Server (PowerShell)
To run on a local HTTP server at `http://localhost:8080/`:

```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```

---

## 📄 License
Created for Rohi Remodeling. All rights reserved.
