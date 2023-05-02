/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    fontFamily: {
      FontPoppins: ["Poppins", "sans-serif"],
    },
    
    extend: {
      colors: {
        'Shade': '#333',
        'Shade1': '#555',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#FFC107",
        
"secondary": "#3573d6",
        
"accent": "#f45f64",
        
"neutral": "#292F3D",
        
"base-100": "#FFFFFF",
        
"info": "#869CEE",
        
"success": "#108E79",
        
"warning": "#FFC107",
        
"error": "#EE6D89",
        },
      },
    ],
  },
  /* eslint-disable */ plugins: [require("daisyui")],
};
