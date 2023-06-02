module.exports = {
  purge: {
    enabled: true,
    content: [
      './frontend/src/**/*.js',
      './frontend/src/**/*.jsx'
    ],
    options: {
      whitelist: []
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      //Main
      'light': '#feffff',
      'prim': '#61DBFB',
      'sec': '#00b4b6',
      'acc:': '#e06250',
      //Extras
      'error':  '#EC6A52',
      'succes': '#70C09E',
    },
    fontFamily: {
      'sans': ['"Noto Sans JP"'],
      'serif': ['"Noto Serif"'],
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
