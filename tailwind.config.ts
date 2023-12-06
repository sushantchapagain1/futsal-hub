/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--border-color)',
        input: 'var(--input-color)',
        ring: 'var(--ring-color)',
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
        primary: {
          DEFAULT: 'var(--primary-color)',
          foreground: 'var(--primary-foreground-color)',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          foreground: 'var(--secondary-foreground-color)',
        },
        destructive: {
          DEFAULT: 'var(--destructive-color)',
          foreground: 'var(--destructive-foreground-color)',
        },
        muted: {
          DEFAULT: 'var(--muted-color)',
          foreground: 'var(--muted-foreground-color)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          foreground: 'var(--accent-foreground-color)',
        },
        popover: {
          DEFAULT: 'var(--popover-color)',
          foreground: 'var(--popover-foreground-color)',
        },
        card: {
          DEFAULT: 'var(--card-color)',
          foreground: 'var(--card-foreground-color)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
};
