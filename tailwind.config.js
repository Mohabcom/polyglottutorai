/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // text: '#111418',
                // background: '#e1e5ea',
                // primary: '#1a4565',
                // secondary: '#ffffff',
                // accent: '#153751',
                text: '#cecece',
                background: '#000000',
                primary: '#267bff',
                secondary: '#252525',
                accent: '#0545a3',
            },
        },
    },
    plugins: [],
};
