module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#161822",
        greenOB: "#22EDB2"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        login: "url('/src/resources/img/bg-home.jpg')"
      }
    },
  },
  plugins: [],
}
