module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
      backgroundColor: ['active'],
      display: ['group-hover'],
      position: ['group-hover'],
      translate: ['group-hover'],
      borderRadius: ['hover'],
    },
  },
  plugins: [
  ],
}
