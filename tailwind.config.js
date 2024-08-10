/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'work-hero': "url('./src/assets/work-hero.jpg')",
        'about-hero': "url('./src/assets/about-hero.jpg')",
        'services-hero': "url('./src/assets/services-hero.jpg')",
        'ideas-hero': "url('./src/assets/ideas-hero.jpg')",
        'careers-hero': "url('./src/assets/careers-hero.jpg')",
        'contact-hero': "url('./src/assets/contact-hero.jpg')"
      },
      colors: {
        accent: '#ff6600'
      }
    }
  },
  plugins: []
}
