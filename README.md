# 🚀 3D Interactive AI Automation Portfolio & Retro OS

[![WebGL 2.0](https://img.shields.io/badge/WebGL-2.0-blue.svg?style=for-the-badge&logo=webgl)](https://get.webgl.org/webgl2/)
[![Three.js](https://img.shields.io/badge/Three.js-v0.137.5-black.svg?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![React](https://img.shields.io/badge/React-17%20%7C%2018-61dafb.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.6%2B-3178c6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Karvion Labs](https://img.shields.io/badge/Karvion%20Labs-2026-purple.svg?style=for-the-badge)](https://github.com/karvionlabs)

> **Award-Caliber WebGL 2.0 Portfolio & Retro Windows Operating System** engineered for showcasing enterprise AI automations, agentic workflows, and high-ticket software systems. 

**Owner & Lead Architect:** Abdullah Karif Shahjada  
**Brand & Laboratory:** Karvion Labs (2026)  
**Original 3D Concept & OS:** Henry Heffernan (2022)  
**Customization, Automation Engineering & CMS:** Abdullah Karif Shahjada  

---

## 🌟 Key Highlights & Engineering Features

### 1. 🖥️ 3D Isometric Room (Three.js + Blender Cycles Baking)
- **Pre-baked Lightmaps:** All Global Illumination (GI), ambient occlusion, and soft shadows were pre-rendered via **Blender Cycles** into high-resolution texture atlases (`room.jpg`).
- **Butter-Smooth 60 FPS:** Uses `MeshBasicMaterial` to eliminate runtime shadow map passes and multi-pass draw calls.
- **Cinematic Zoom Transitions:** GSAP cubic bezier camera tweens seamlessly bridge the gap between the isometric room overview and the inside of the CRT monitor.

### 2. ☕ Procedural GPU Coffee Steam (GLSL Shaders)
- Custom OpenGL Shading Language (`GLSL`) vertex and fragment shaders (`coffee/fragment.glsl`).
- Real-time mathematical Perlin/Simplex noise parametrized by uniform `uTime` renders organic rising atmospheric vapor with zero CPU overhead.

### 3. 💾 The Retro OS Inside the Computer (CSS3DRenderer)
- Real HTML5 DOM transformed into 3D world space using Three.js `CSS3DRenderer` and perspective `matrix3d(...)` calculations.
- Full Single Page Application (SPA) powered by **React** and **TypeScript** with draggable windows, minimize/maximize state machines, and sound-reactive taskbars.

### 4. ⌨️ Mechanical Keyboard Foley Soundstage
- Powered by the **Web Audio API** and HTML5 Audio.
- Keystrokes trigger a randomized selector across 6 distinct mechanical keyboard click samples (`key_1.mp3` through `key_6.mp3`) to eliminate acoustic fatigue.
- Looping background cassette tape ambience captures the tactile warmth of 90s computing.

### 5. 🤖 Featured Enterprise AI Automation Systems
- **Autonomous Inbound Lead Routing:** Multi-agent pipeline with Make, n8n, OpenAI GPT-4, and instant CRM enrichment.
- **Custom E-Commerce Automation:** Real-time stock sync across Shopify, WooCommerce, and ERP databases.
- **Mobile Client Portal:** Responsive PWA with real-time push alerts and live pipeline tracking.
- **Meta Performance Marketing Engine:** Algorithmic ad creative testing and auto-budget reallocation.

### 6. 🔐 Hidden Master Administrative Station
- Isolated management console accessible at `/admin.html` secured with master password authentication (`1234`).
- Real-time CRM Leads Inbox with one-click **CSV Export**.
- Dynamic Project CMS with instant JSON database backup & import.

---

## 🛠️ Complete Tech Stack

| Domain | Technology / Library | Role |
| :--- | :--- | :--- |
| **3D Engine** | Three.js `v0.137.5` / WebGL 2.0 | Hardware-accelerated 3D room rendering & raycasting |
| **3D Projection** | Three.js `CSS3DRenderer` | Matrix3D DOM mapping for the CRT monitor screen |
| **Shaders** | Custom GLSL Fragment & Vertex | Procedural noise-based coffee steam simulation |
| **Inner OS Frontend** | React 17 + TypeScript | Retro Windows 98/2000 draggable window desktop environment |
| **Outer Wrapper** | Vite + TypeScript | High-performance ESM development and production server |
| **Audio Engine** | Web Audio API + HTML5 Audio | Randomized mechanical typing sounds and ambient cassette tone |
| **Data Storage** | HTML5 `localStorage` Repositories | Client leads CRM and dynamic project state |
| **Admin Station** | Semantic HTML5, CSS3 & TypeScript | Secure, isolated master administration control panel |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/karvionlabs/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
Portfolio/
├── public/                  # Static assets served directly
│   ├── admin.html           # Secret Master Administrator Control Station
│   ├── index.html           # 3D outer viewport entry point
│   ├── main.css             # CRT scanlines & 3D canvas styles
│   ├── bundle.cf64568055686c74.js  # Production 3D room bundle
│   ├── models/              # Draco-compressed 3D GLTF models
│   ├── textures/            # Baked room atlases & UI textures
│   ├── audio/               # Foley keyboard click samples & room ambience
│   ├── inner/               # Compiled React Retro OS web app
│   └── Abdullah_Karif_Shahjada_Portfolio_Tech_Architecture.pdf # Technical Blueprint
├── src/                     # Modern Vite outer wrapper
├── temp-inner-site/         # Source code for React Retro OS (TypeScript)
│   └── src/
│       ├── components/applications/Credits.tsx
│       └── components/showcase/projects/Software.tsx
├── tech_docs/               # Technical architecture documentation source
├── package.json             # Root dependencies & build scripts
├── vite.config.ts           # Vite development server configuration
└── README.md                # Project documentation
```

---

## 📜 Credits & Acknowledgments

- **Original OS & 3D Concept:** [Henry Heffernan](https://henryheffernan.com) (2022) — exceptional interactive 3D WebGL design.
- **Customization, Architecture & Content:** [Abdullah Karif Shahjada](https://github.com/karvionlabs) (Karvion Labs, 2026).
- **Sound Design:** Foley samples and vintage cassette ambient audio recordings.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---

<p align="center">
  Crafted with precision by <strong>Abdullah Karif Shahjada</strong> • <strong>Karvion Labs &copy; 2026</strong>
</p>
