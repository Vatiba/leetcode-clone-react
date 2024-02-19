module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        sm: "url('./src/shared/assets/img/bg-sm.png')",
        md: "url('./src/shared/assets/img/bg-md.png')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "dark",
      "light",
      "forest"
    ],
  },
};
