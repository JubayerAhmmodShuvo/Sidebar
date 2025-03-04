import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          light: '#bbf7d0',
          dark: '#1a1a1a'
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          light: '#000000',
          dark: '#ffffff'
        },
        primary: {
          light: '#f3f4f6',
          dark: '#374151'
        },
        secondary: {
          light: '#e5e7eb',
          dark: '#1f2937'
        },
        accent: {
          light: '#d1d5db',
          dark: '#4b5563'
        }
      },
    },
  },
  plugins: [],
};

export default config;