module.exports = {
  purge: {
    enabled: true,
    content: ["./frontend/src/**/*.js", "./frontend/src/**/*.jsx"],
    options: {
      whitelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      //Main
      light: "#feffff",
      prim: "#8fc7b7",
      dark: "#271a25",
      acc: "#e06250",
      //Extras
      error: "#EC6A52",
      succes: "#70C09E",
    },
    fontFamily: {
      header: ['"Fira Sans"'],
      ingress: ["PT Serif"],
      body: ["Martel"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
