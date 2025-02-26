import type { Config } from 'tailwindcss'

const globalColors = {
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
  },
  yellow: {
    200: '#FADF66',
    400: '#F6C900'
  }
}

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif']
      },
      colors: globalColors,
      backgroundColor: {
        primary: globalColors.neutral[700],
        secondary: globalColors.neutral[600],
        tertiary: globalColors.neutral[400],
        strong: globalColors.neutral[800],
        brand: globalColors.yellow[400],
        'brand-hover': globalColors.yellow[200]
      },
      textColor: {
        primary: globalColors.neutral[50],
        secondary: globalColors.neutral[100],
        brand: globalColors.yellow[400],
        'on-color': globalColors.neutral[700]
      },
      borderColor: {
        brand: globalColors.yellow[400],
        subtle: globalColors.neutral[50]
      }
    }
  },
  plugins: []
} satisfies Config
