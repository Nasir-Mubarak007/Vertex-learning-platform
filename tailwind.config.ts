import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#E83D1A',
          500: '#F36C37',
          400: '#FF8C54',
          300: '#FFBA81',
          100: '#F7E4C5',
        },
        neutral: {
          900: '#1F1D2A',
          800: '#3D3B53',
          700: '#6C6B88',
          600: '#A0A0B1',
          300: '#D0CED1',
          100: '#F4F4F0',
          0: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
        'display-2': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        'heading-1': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'heading-2': ['22px', { lineHeight: '30px', fontWeight: '700' }],
        'heading-3': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'body-large': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-small': ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
        md: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px 0 rgba(0, 0, 0, 0.15)',
        xl: '0 20px 40px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
