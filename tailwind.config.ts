import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            '2xs': '360px',
            'xs': '400px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                background: "#050505",
                foreground: "#FFFFFF",
                primary: {
                    DEFAULT: "#FF4A25", // OFFICIAL BRAND COLOR: MIRADOR ORANGE
                    foreground: "#FFFFFF",
                },
                industrial: {
                    50: "#F8FAFC",
                    100: "#F1F5F9",
                    200: "#E2E8F0",
                    300: "#CBD5E1",
                    400: "#94A3B8",
                    500: "#64748B",
                    600: "#475569",
                    700: "#334155",
                    800: "#1E293B",
                    900: "#0F172A",
                },
                accent: {
                    DEFAULT: "#FF4A25",
                },
                mirador: {
                    dark: "#00153D",
                    orange: "#FF4A25",
                },
                border: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["Work Sans", "sans-serif"],
                display: ["Clash Grotesk", "sans-serif"],
                stardom: ["Clash Grotesk", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            backgroundImage: {
                'blueprint-grid': "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}

export default config