/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      '252': '252px',
    },
    boxShadow: {
      'bsd1': '0px 10px 20px rgba(0,0,0,0.1)'
    },
    colors: {
      'c-orange1': '#ffb141',
      'c-orange2': '#fb8d17',
      'c-orange3': '#fa8c16',
      'c-orange4': '#ff792c',
      'c-orange5': '#e57905',
      'c-orange6': '#faa515',
      'c-black2': '#666666',
      'grey1': '#e3e3e3',
      'grey6': '#838387',
      'c-white1': '#f5f5f5',
      'rd-orange1': 'radial-gradient(100% 501.4% at 0% 100%,#ffb141 0%,#fb8d17 100%)',
      'rd-orange2': 'radial-gradient(100% 501.4% at 100% 100%,#ffb141 0%,#fb8d17 100%)',
      'rd-orange3': 'radial-gradient(100% 488.28% at 0 100%,#e87800 0,#fa8c16 100%)',
      'rd-orange4': 'radial-gradient(100% 488.28% at 0% 100%,#e87800 0%,#fa8c16 100%)',
      'rd-orange6': 'radial-gradient(100% 500% at 0% 0%,#fa8c16 0%,#874d00 100%)',
      'nude1': '#fff7e6',
      'nude2': '#ffe7ba',
    },
    background: {
      
    },
    backgroundImage: {
      'footer': "url('https://order.thecoffeehouse.com/_nuxt/img/footer-desktop.727f3a2.png')",
    },
    fontSize: {
      '2.5xl': ['28px', '34px'],
    },
    minHeight: {
      'mh100': "100px"
    }
  },
  plugins: [],
}
