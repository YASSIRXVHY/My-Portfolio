/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F1E6',
          deep: '#EEE7D5',
          card: '#FBF8F0',
        },
        ink: {
          DEFAULT: '#221D14',
          soft: '#6A6150',
          faint: '#95896F',
        },
        line: {
          DEFAULT: '#D8CDB6',
          strong: '#B8A87F',
        },
        pen: {
          DEFAULT: '#B3392C',
          deep: '#8E2A20',
          wash: '#F6E3DD',
        },
        mark: '#EFDF9B',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        serif: ['"Newsreader Variable"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
