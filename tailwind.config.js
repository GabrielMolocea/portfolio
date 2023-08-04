/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'github-light': "url('/images/github.png')",
        'github-dark': "url('/images/github-white.png')",
        'linkedin': "url('/images/linkedin.png')"
      },
    },
  },
  plugins: [],
}
