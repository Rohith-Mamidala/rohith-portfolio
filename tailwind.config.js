/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      animation: {
        'float':       'float 8s ease-in-out infinite',
        'float-alt':   'float-alt 10s ease-in-out infinite',
        'glow':        'glow 4s ease-in-out infinite',
        'gradient':    'gradient 12s ease infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'spin-slow':   'spin 25s linear infinite',
        'marquee':     'marquee 28s linear infinite',
        'pulse-ring':  'pulse-ring 2s ease-out infinite',
        'blink':       'blink 1.1s step-end infinite',
        'slide-down':  'slide-down 0.35s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%':       { transform: 'translateY(-14px) rotate(1deg)' },
          '66%':       { transform: 'translateY(-7px) rotate(-1deg)' },
        },
        'float-alt': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-18px) rotate(2deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%':       { opacity: '0.65', transform: 'scale(1.08)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
        '400%': '400%',
      },
      boxShadow: {
        'glow':         '0 0 40px rgba(99, 102, 241, 0.22)',
        'glow-lg':      '0 0 80px rgba(99, 102, 241, 0.30)',
        'glow-violet':  '0 0 40px rgba(139, 92, 246, 0.22)',
        'glow-cyan':    '0 0 40px rgba(6, 182, 212, 0.20)',
        'card':         '0 4px 24px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover':   '0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.28)',
        'inner-glow':   'inset 0 0 40px rgba(99,102,241,0.05)',
      },
    },
  },
  plugins: [],
}
