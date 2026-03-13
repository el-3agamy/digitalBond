# DigitalBond — Premium Angular 20 SSR Application

DigitalBond is a high-performance, modern web application built with **Angular 20**, featuring **Server-Side Rendering (SSR)**, **Standalone Components (SSC)**, and **Pure CSS** for a sleek, responsive experience.

## 🚀 Key Features

- **✨ 1. Sticky Glassmorphism Navbar**
  - Stays at the top of the screen on scroll.
  - Dynamically changes background from transparent to a dark, blurred glass effect for better readability.
  - Fully responsive mobile menu (hamburger drawer).

- **💬 2. Testimonials Carousel**
  - Interactive carousel for displaying company feedback.
  - Features auto-sliding, previous/next controls, and dot navigation.
  - Smooth CSS-powered transitions.

- **✉️ 3. Contact Form with Validation**
  - Built using Angular Reactive Forms.
  - Real-time validation for Name, Email, Subject, and Message.
  - Error messages only appear when fields are touched and invalid.

- **🎉 4. Success Modal**
  - A beautiful pop-up modal appears upon successful form submission.
  - Uses CSS animations for a smooth "bounce-in" effect.

- **🔗 5. Modern Routing Behavior**
  - Utilizes Angular Router for seamless transitions.
  - Updates the URL to `/done` after form submission without a full page reload.
  - SSR configured to pre-render the Home page and client-render dynamic success states.

## 🛠️ Technology Stack

- **Core**: Angular 20 (Zoneless + Event Replay)
- **Rendering**: Angular SSR (Server-Side Rendering)
- **Architecture**: Standalone Components (SSC)
- **Styling**: Pure CSS3 (Custom properties, Flexbox/Grid, Animations)
- **State Management**: Angular Signals

## 📂 Project Structure

```text
src/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── navbar/       # Sticky Navbar
│   │   ├── testimonials/ # Carousel
│   │   ├── contact-form/ # Reactive Form
│   │   └── modal/        # Success Popup
│   ├── pages/            # Page-level components
│   │   ├── home/         # Main landing page
│   │   └── done/         # Success confirmation page
│   ├── app.routes.ts     # Client-side routing
│   └── app.routes.server.ts # SSR pruning & routing
├── styles.css            # Global design system & theme
└── index.html            # Entry point with SEO meta tags
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm

### Installation

1. Clone the repository (if applicable) or enter the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server on [http://localhost:4200/](http://localhost:4200/):
```bash
npm start
```

### Build

Build the project for production (including SSR):
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📱 Responsiveness

The application is meticulously styled to look premium on all devices:
- **Desktop**: Grid layouts and full-width sections.
- **Tablet**: Optimized spacing and adjusted carousel behavior.
- **Mobile**: Hamburger menu drawer and stacked layouts for readability.

---

Built with ❤️ by DigitalBond Team.
