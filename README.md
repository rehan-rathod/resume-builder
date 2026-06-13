# 🌌 DevDetect — Premium GitHub Profile Finder

**DevDetect** is a highly aesthetic, responsive, and feature-rich GitHub Profile Finder web application. Built using **React**, **Vite**, and styled with custom **Vanilla CSS**, it provides an elegant dark/light glassmorphic layout to query GitHub user profiles, view stats, inspect repository details, and track search history.

---

## ✨ Features

- **🌓 Glassmorphic Theme Toggle**: Sleek transitions between a deep indigo dark mode and a clean, high-contrast light mode.
- **🔍 Profile Search**: Live search querying the official GitHub API for usernames.
- **⚡ Top 5 Starred Repositories**: Dynamically fetches the user's public repositories, sorts them in JavaScript, and highlights their top 5 most starred repositories with star counts, fork counts, and programming language badges.
- **🕒 Search History (Recent Searches)**: Displays your last 5 searched profiles (saved via `localStorage`) with quick-click navigation for easy re-visiting.
- **✨ Popular Profiles Shortcuts**: Pre-configured search buttons for well-known developers (including the author!) for immediate testing.
- **🎭 Skeleton Loading Screens**: Fluid, CSS-animated skeleton states for a premium, hardware-accelerated user experience.
- **📱 Fully Responsive**: Asymmetrical grid layout on desktop that stacks beautifully on mobile viewports.

---

## 🛠️ Tech Stack & Styling

- **Core**: React 19 + Vite 8
- **Styling**: Vanilla CSS (specifically utilizing HSL custom design system properties for premium theme consistency)
- **Icons**: [Lucide React](https://lucide.dev)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (recommended v18+).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rehan-rathod/github-profile-finder.git
   cd github-profile-finder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👤 Author

Developed by **[Rehan Rathod](https://github.com/rehan-rathod)**.
