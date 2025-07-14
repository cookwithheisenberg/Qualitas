module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A', // navy
        secondary: '#1A2B49', // dark blue
        accent: '#2B4C7E', // accent blue
        muted: '#F5F7FA', // muted background
        card: '#FFFFFF', // card background
        border: '#E3E8EF', // card border
        text: '#1A2B49', // main text
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Aptos', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}; 