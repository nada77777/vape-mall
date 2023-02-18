/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#F9C802',
        'main-text': '#2A343D',
        'sub-text': '#A5AFB3',
        'cart-price': '#53656F',
        'item-card': '#f3f5f7',
        'text-company': '#F4BF35',
      },
      backgroundImage: {
        'banner-img': `url('../public/img/banner.jpg')`,
      },
      boxShadow: {
        'shadow': 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
      },
      screens: {
        'xs': '475px',
        'small': '875px',
      },
    },
  },
  plugins: [],
}


/* banner color #F3B413 */
/* button #2b3639
itemcard #f3f5f7 
maintext #72787C
subtext #A5AFB3
search #C3CCCF */
/* //F9C802 */