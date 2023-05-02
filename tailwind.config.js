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
          "primary": [255, 193, 7],
          "secondary": [53, 115, 214],
          "accent": [16, 15, 15, 0.31],
          "neutral": [41, 47, 61],
          "base-100": [255, 255, 255],
          "info": [134, 156, 238],
          "success": [16, 142, 121],
          "warning": [255, 193, 7],
          "error": [238, 109, 137]
      },
      },
    ],
  },
  /* eslint-disable */ plugins: [require("daisyui")],
};
