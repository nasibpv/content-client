/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.postimg.cc/sxgJ8r2P/IMG-20240409-WA0037.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}

