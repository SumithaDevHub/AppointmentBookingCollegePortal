//  /** @type {import('tailwindcss').Config} */
//  export default {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ✅ include index.html and JSX files
  theme: {
    extend: {},
  },
  plugins: [],
}
