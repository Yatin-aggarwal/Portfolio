/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '2%':'2%',
        '1%':'1%',
        '1/50':'4%',
        '1/10':'10%',
        '2/10':'20%',
        '3/10':'30%',
        '4/10':'40%',
        '9/10':'90%',
        '8/10':'80%',
        '7/10':'70%',
        '6%':'6%',
        '8%':'9%',
        '3%':'3%',
        '0.5%':'0.5%'


      }
    },
  },
  plugins: [],
}