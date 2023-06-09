/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F66962",

          "primary-focus": "#917CF6",

          secondary: "#D9EEFF",

          "secondary-focus": "#807388",

          accent: "#FDE0DE",

          "accent-focus": "#413655",

          neutral: "#F38681",

          "neutral-focus": "#EEE6EC",

          warning: "#FFE88F",

          "waring-content": "#BEBAC5",

          info: "#DFF1FD",

          "info-content": "#FFB54A",

          success: "#BCD2F7",

          "success-content": "#FF875A",

          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

