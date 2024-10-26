import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
 
      colors:{
        primary:'#386A8B',
        secondary:'#001F38',
        sec:'#4B5B65',
        text:'#001827',
        redd:"#DF3602"
      },
      fontFamily: {
        euclid: ['Euclid Circular A', 'sans-serif'],
      },
      boxShadow:{
        'custom': '0px 1px 14px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        catImg: "url('./public/images/categories-image.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
