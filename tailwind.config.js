/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0f766e',
                'primary-light': '#14b8a6',
                'primary-dark': '#134e4a',
                secondary: '#0ea5e9',
                bg: '#f8fafc',
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Plus Jakarta Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
