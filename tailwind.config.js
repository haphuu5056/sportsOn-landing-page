/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "6.5xl": "75rem",
      },
      screens: {
        "xs": "360px",
      },
      colors: {
        primary: "#42D38A",
        secondary: "#011108",
        lightGray: "#A0A0A0",
        lightGreenBackground: "#56d9b91a",
        borderGray: "#D9D9D9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
