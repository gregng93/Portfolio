module.exports = {
  content: ['./index.html', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
