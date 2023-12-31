/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'iconContainer': 'linear-gradient(180deg, rgba(202, 255, 51, 0.05) 0%, rgba(202, 255, 51, 0.00) 100%)',
        'iconSubContainer': 'linear-gradient(180deg, rgba(202, 255, 51, 0.10) -66.22%, rgba(202, 255, 51, 0.00) 85.46%)',
        'faded': 'linear-gradient(180deg, rgba(25, 25, 25, 0.00) 0%, #191919 100%)',
        'ctaBg': "url('/src/assets/cta-bg.webp')"
      }
    },
  },
  plugins: [],
}

