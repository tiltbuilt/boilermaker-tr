const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {      
      spacing: {
        'none': '0rem',
        'half': '0.75rem',
        'normal': '1.5rem',
        'double': '3rem',
        'neghalf': '-0.75rem',
        'negnormal': '-1.5rem',
        'negdouble': '-3rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      red: '#ff0000',
      gray: colors.gray,      
    },
    opacity: {
      '0': '0',
      '10': '0.1',
      '20': '0.2',
      '30': '0.3',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '70': '0.7',
      '80': '0.8',
      '90': '0.9',
      '100': '1',
    },
  },
  variants: {},
  plugins: [],
}
