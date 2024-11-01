/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      lg: "1260px",
      md: "786px",
    },
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "serif"],
      },
      colors: {
        greenYellow: "#8FDA08",
        footerColor: "#F9FFE5",
        cardBorderColor: "#6D6D6D",
        cardBackground: "#F6F6F6",
        phantomWallet: "#AB9FF2",
        solflareWallet: "#25263A",
        walletConnect: "#3396FF",
        darkModeFooterColor: "#242424",
      },
      spacing: {
        100: "100px",
        1440: "1440px",
        588: "588px",
        72: "72px",
        86.4: "86.4px",
        1280: "1280px",
      },
    },
  },
  plugins: [],
};
