/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f172a', // Deep slate/navy background
                primary: '#2563eb',    // Vivid blue
                secondary: '#7c3aed',  // Violet
                accent: '#22d3ee',     // Cyan
                glass: 'rgba(255, 255, 255, 0.1)',
                'glass-heavy': 'rgba(255, 255, 255, 0.2)',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
