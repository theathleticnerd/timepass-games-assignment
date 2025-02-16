# Multi-Step Form

A multi-step form built using **Vite**, **React**, and **Tailwind CSS**.

The multi-step form assignment is hosted at [https://timepass-games-assignment-one.vercel.app/](https://timepass-games-assignment-one.vercel.app/).

## 🚀 Features

- Step-by-step form navigation
- Form validation
- Reusable components
- Optimized with `useMemo` and `useRef`
- Mobile-friendly design with Tailwind CSS

## 🛠️ Tech Stack

- [Vite](https://vitejs.dev/) – Fast development & build tool
- [React](https://react.dev/) – Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/theathleticnerd/timepass-games-assignment.git
cd timepass-games-assignment
npm install
```

## 🚀 Running the Project

Start the development server:

```sh
npm run dev
```

## 🏗️ Project Structure

```
📦 multi-step-form
├── 📂 src
│   ├── 📂 components     # Reusable form components
│   ├── 📂 steps          # Individual step components
│   ├── 📂 data           # Static data files
│   ├── 📂 pages          # Pages
│   ├── 📂 router         # Router
│   ├── 📜 App.jsx        # Main entry component
│   ├── 📜 main.jsx       # React root rendering
│   ├── 📜 index.css      # Tailwind global styles
├── 📜 index.html         # Base HTML file
├── 📜 .prettierrc        # Prettier Configuration
├── 📜 .eslintrc          # Eslint Configuration
├── 📜 vite.config.js     # Vite configuration
├── 📜 package.json       # Project metadata & scripts
└── 📜 README.md          # Project documentation
```

## 🖌️ Styling with Tailwind CSS

Tailwind is pre-configured. To extend the styles, update `tailwind.config.js` or add classes directly in JSX:

```jsx
<div className="p-4 bg-light-gray rounded-lg">Step Content</div>
```
