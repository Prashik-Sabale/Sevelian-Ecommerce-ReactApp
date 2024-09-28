/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url()",
        'video': "url()"
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      }
    },
  },
  plugins: [],
}

