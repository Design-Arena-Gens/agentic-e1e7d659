import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1833',
        gold: '#C5A25A',
        ivory: '#F7F4EE'
      },
      fontFamily: {
        display: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(197,162,90,0.25), 0 8px 30px rgba(197,162,90,0.15)'
      }
    }
  },
  plugins: []
} satisfies Config
