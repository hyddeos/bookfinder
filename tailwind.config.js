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
      white: "#ffffff",
      light: "#e7e3d0",
      prim: "#feaf0e",
      dark: "#241f40",
      acc: "#873f42",
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
