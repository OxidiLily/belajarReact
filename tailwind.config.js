/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    keyframes: {
        typing: {
            '0%': { width: '0ch' },
            '100%': { width: '100%' },
        },
    },
    animations: {
        typing: 'typing 1s steps(40, end) infinite',
    },
};