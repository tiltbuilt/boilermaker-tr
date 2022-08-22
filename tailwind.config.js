const colors = require('tailwindcss/colors')

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
        'quarter': '0.375rem',
        'half': '0.75rem',
        'base': '1.5rem',
        '2x': '3rem',
        '3x': '4.5rem',
        '4x': '6rem',
        'neghalf': '-0.75rem',
        'negbase': '-1.5rem',
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
      xs: ['1.2rem', '1.6rem'],
      sm: ['1.4rem', '2.0rem'],
      base: ['1.6rem', '2.4rem'],
      lg: ['1.8rem', '2.8rem'],
      xl: ['2.0rem','2.8rem'],
      '2xl': ['2.4rem','3.2rem'],
      '3xl': ['3.0rem', '3.6rem'],
      '4xl': ['3.6rem', '4.0rem'],
      '5xl': ['4.8rem', '1'],
      '6xl': ['6.0rem', '1'],
      '7xl': ['7.2rem','1'],
      '8xl': ['9.6rem','1'],
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
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
