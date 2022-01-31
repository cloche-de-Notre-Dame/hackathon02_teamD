const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'text-black': '#243c5a',
      'text-green': '#008c8d',
      'bg-green': '#6bc2c3',
      'bg-black': '#262c3a',
      'progress-pale': '#c5eaea',
      'progress-deep': '#2bb9ba',
      'border-green': '#c5eaea',
    },
    extend: {
      backgroundImage: (theme) => ({
        'bg-hero-pc': "url('../../public/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg')",
      }),
    },
  },
  plugins: [],
};
