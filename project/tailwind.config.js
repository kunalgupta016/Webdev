/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'accent': 'hsl(240,3.7%,15.9%)',
        'accent-foreground':'hsl(0,0%,98%)',
        'background':'hsl(240,10%,3.9%)',
        'primary':'hsl(0,0%,98%)',
        'secondary':'hsl(240,3.7%,15.9%)',
        'muted-foreground':'hsl(240,5%,64.9%)'
      },
    },
  },
  plugins: [],
}

