/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBtn: "#0284c7",
        blueBtnFocus: "#1d4ed8",
        textColor: "    #171717",
        textLightColor: "#4b5563",
      },
      animation: {
        'spin-infinite': 'spin 1.5s linear infinite',
      },
    },
  },
  plugins: [],
};
