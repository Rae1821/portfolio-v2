module.exports = {
  content: ["./src/**/*.{html,js}",
            './src/**/*.js',
            'index.html',
            
],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Sacramento: ["Sacramento", "cursive"],
        Licorice: ["Licorice", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
        RobotoCondensed: ["Roboto Condensed", "sans-serif"],
        BadScript: ["Bad Script", "cursive"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
