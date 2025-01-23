/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '390px',
      'lgmobile': '480px',
      'tablet': '640px',
      'lgtablet': '768px',
      'laptop': '1044px',
      'lglaptop': '1280px',
      'desktop': '1440px',
      'lgdesktop': '1920px',
    },
    extend: {
      fontFamily: {
        'brandFont': ['Raleway', 'sans-serif',],
      },
      colors: {
        'brandBlack': '#1B1B1F',
        'brandBlue': '#3D22CF',
        'brandGrey': '#6C7880',
        'brandDarkBlue': '#0A1C8F',
        'absoluteWhite': '#ffffff',
      },

    },
  },
  plugins: [],
}

