// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#3b82f6",     // Xanh dương (nút Đăng ký)
      primaryDark: "#2563eb", // Xanh dương đậm hơn (hover)
      accent: "#facc15",      // Vàng rực (dùng để nhấn mạnh)
    },
  },
},

  plugins: [],
}
