module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#D57556',
        orange2: '#FF6600',
        pink: '#D59CB7',
        pink2: '#D92984',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};


