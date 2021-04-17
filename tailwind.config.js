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
        '2x': '3rem',
        '3x': '4.5rem',
        '4x': '6rem',
        'neghalf': '-0.75rem',
        'negnormal': '-1.5rem',
        'neg2x': '-3rem',
        'neg3x': '-4.5rem',
        'neg4x': '-6rem',
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
    fontFamily: {
      
    },
    fontSize: {
      xs: '0.8rem',
      sm: '1.2rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2.4rem',
      '2xl': '3.6rem',
      '3xl': '4.8rem',
      '4xl': '6.0rem',
      '5xl': '7.2rem',
      '6xl': '8.4rem',
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
