/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', '"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        luxury: {
          black: '#050505',
          charcoal: '#1A1A1A',
          obsidian: '#0A0A0A',
          cream: '#FDFCF8',
          gold: '#D4AF37',
          goldLight: '#E8D5A3',
          goldDark: '#B8960C',
          goldGradient: 'linear-gradient(135deg, #D4AF37 0%, #E8D5A3 50%, #D4AF37 100%)',
          glass: 'rgba(255, 255, 255, 0.03)',
          glassBorder: 'rgba(255, 255, 255, 0.08)',
        }
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 4s',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'particle-rise': 'particleRise 15s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'scale-in': 'scaleIn 1.2s ease-out forwards',
        'magnetic': 'magnetic 0.3s ease-out forwards',
        'gold-flow': 'goldFlow 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
          '75%': { transform: 'translateY(-25px) rotate(0.5deg)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(1deg)' },
          '75%': { transform: 'translateY(-20px) rotate(-0.5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(212, 175, 55, 0.4)' },
        },
        particleRise: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) scale(1)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        magnetic: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        goldFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)',
        'gold-radial': 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #050505 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(212, 175, 55, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(212, 175, 55, 0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(212, 175, 55, 0.1) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
