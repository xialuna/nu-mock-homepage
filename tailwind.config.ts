import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#F6C900',
          'primary-hover': '#FADF66'
        },
        neutral: {
          50: '#FFFFFF',
          100: '#D2D2D2',
          200: '#A6A5A5',
          300: '#797979',
          400: '#201F1F',
          500: '#1A1919',
          600: '#131313',
          700: '#0D0C0C',
          800: '#060606'
        }
      }
    }
  },
  plugins: []
} satisfies Config
