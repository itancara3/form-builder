/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main colors
        primary: {
          0: '#ffffff',
          100: '#CFFAFE',
          200: '#A5F3FC',
          500: '#06B6D4',
          600: '#0891B2',
          850: '#15566C',
          950: '#083344'
        },
        secondary: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          300: '#FDBA74',
          500: '#F97316'
        },
        // Notification colors
        success: {
          50: '#FOFDF4',
          100: '#DCFCE7',
          300: '#86EFAC',
          500: '#22C55E'
        },
        warning: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          300: '#FCD34D',
          500: '#F59E0B'
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          300: '#FCA5A5',
          500: '#EF4444'
        },
        info: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          300: '#7DD3FC',
          500: '#0EA5E9'
        },
        // Background colors
        gray: {
          25: '#FCFCFC',
          75: '#F5F9FB',
          100: '#F1F5F9',
          150: '#E8EEF4',
          200: '#E2E8F0',
          250: '#D6DEE9',
          300: '#CBD5E1',
          400: '#94A3B8',
          700: '#334155'
        }
      }
    },
  },
  plugins: [],
}