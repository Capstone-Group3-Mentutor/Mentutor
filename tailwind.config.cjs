/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "poppins",
    },
    extend: {
      colors: {
        sidebar: "#202442",
        main: "#25294A",
        card: "#2C3159",
        button: "#854AEA",
        putih: "#E6E6E6",
        abu: "#A7A7A7",
        purple: "#473E8B",
        purple: "#473E8B",
        task: "#B7CDFD",
        merah: "#CC5D5D",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "white",
  },
};
