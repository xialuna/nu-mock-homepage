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
      screens: {
        lg: '1080px'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif']
      },
      colors: globalColors,
      fontSize: {
        // Text styles (Web)
        'text-2xl': ['24px', { lineHeight: '32px' }],
        'text-xl': ['20px', { lineHeight: '28px' }],
        'text-l': ['16px', { lineHeight: '24px' }],
        'text-m': ['14px', { lineHeight: '20px' }],

        // Heading styles (Web)
        'heading-5xl': ['72px', { lineHeight: '80px' }],
        'heading-4xl': ['64px', { lineHeight: '72px' }],
        'heading-3xl': ['56px', { lineHeight: '64px' }],
        'heading-2xl': ['48px', { lineHeight: '56px' }],
        'heading-xl': ['40px', { lineHeight: '48px' }],

        // Text styles (Mobile)
        'mobile-2xl': ['20px', { lineHeight: '28px' }],
        'mobile-xl': ['18px', { lineHeight: '28px' }],
        'mobile-l': ['16px', { lineHeight: '26px' }],
        'mobile-m': ['14px', { lineHeight: '26px' }],

        // Heading styles (Mobile)
        'mobile-heading-5xl': ['56px', { lineHeight: '64px' }],
        'mobile-heading-4xl': ['48px', { lineHeight: '56px' }],
        'mobile-heading-3xl': ['40px', { lineHeight: '48px' }],
        'mobile-heading-2xl': ['32px', { lineHeight: '40px' }],
        'mobile-heading-xl': ['28px', { lineHeight: '36px' }],
        'mobile-heading-l': ['24px', { lineHeight: '36px' }]
      },

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
      },

      backgroundImage: {
        'custom-bg': "url('https://nuworks.ph/static/images/bg/BG%20(1).png')"
      }
    }
  },
  plugins: []
} satisfies Config
