/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },

      fontFamily: {
        sans: ['Inter Tight'],
      },

      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },

      keyframes: {
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        slideUpAndFade: {
          from: { transform: 'translateY(8px)' },
          to: { transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { transform: 'translateX(-8px)' },
          to: { transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { transform: 'translateY(-8px)' },
          to: { transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { transform: 'translateX(8px)' },
          to: { transform: 'translateX(0)' },
        },
      },

      animation: {
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  plugins: [],
}
