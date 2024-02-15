module.exports = {
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        sm: "url('./assets/img/bg-sm.png')",
        md: "url('./assets/img/bg-md.png')",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      "dark"
    ],
  },
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)'
    },
  },
};
