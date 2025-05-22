import('tailwindcss').Config

const colors = require('tailwindcss/colors')
module.exports = {  
  plugins: [	
	//require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography'),
	require('@tailwindcss/forms'),
	require('@tailwindcss/container-queries'),	
  ],
  content: [
	'./templates/**/*.{html,twig}', './src/**/*.js',	
  ],
  theme: {
	container: {
	  center: true,
	},
	containers: {		
		/*
		'xs': '0rem',
		'sm': '60rem',
		'md': '75rem',
		'lg': '100rem',
		'xl': '120rem',
		'2xl': '150rem',
		*/
		'xs': '0rem',
		'sm': '64rem',
		'md': '76.8rem',
		'lg': '102.4rem',
		'xl': '128rem',
		'2xl': '153.6rem',		
	},	
	extend: {
	  minHeight: {
		'screenh' : '100vh',
	  },
	  aspectRatio: {
		'4/3': '4/3',
		'3/2': '3/2',
		'3/1': '3/1',
		'2/1': '2/1',
		'4/1': '4/1',  
	  },
	  spacing: {        
	  	'none': '0rem',
		'quarter': '0.375rem',
		'half': '0.75rem',
		'base': '1.5rem',
		'2x': '3rem',
		'3x': '4.5rem',
		'4x': '6rem',
		'neg-half': '-0.75rem',
		'neg-quarter': '-0.375rem',
		'neg-base': '-1.5rem',
		'neg-2x': '-3rem',
		'neg-3x': '-4.5rem',
		'neg-4x': '-6rem',
		'half-normal': 'clamp(0.75rem, 1.175vw, 2.25rem)',
		'normal': 'clamp(1.5rem, 2.35vw, 4.5rem)',
		'extra': 'clamp(3rem, 3.5vw, 6rem)',
		'neg-half-normal': 'clamp(-2.25rem, -1.175vw, -0.75rem)',
		'neg-normal': 'clamp(-4.5rem, -2.35vw, -1.5rem)',
		'neg-extra': 'clamp(-6rem, -3.5vw, -3rem)',
	  },
	},
	colors: {
	  transparent: 'transparent',
	  current: 'currentColor',
	  black: '#000',
	  white: '#fff',
	  red: colors.red,
	  gray: colors.gray, 
	  green: colors.green,     
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
	fontFamily: {
	  //If using a webfont name that has spaces in it, make sure you double wrap the name in both double and single quotes or the font won't load because the font-family css rule will be written improperly
	  /*
	  'brother': [
		"'brother 1816'",      
	  ],
	  */
	},
	fontSize: {
	  xs: ['1.2rem', '1.3'],
	  sm: ['1.4rem', '1.42'],
	  base: ['1.6rem', '1.5'],
	  lg: ['1.8rem', '1.5'],
	  xl: ['2.0rem','1.5'],
	  '2xl': ['2.4rem','1.33'],
	  '3xl': ['3.0rem', '1.2'],
	  '4xl': ['3.6rem', '4.0rem'],
	  '5xl': ['4.8rem', '1'],
	  '6xl': ['6.0rem', '1'],
	  '7xl': ['7.2rem','1'],
	  '8xl': ['9.6rem','1'],
	  'scaling-xs': ['clamp(1rem, 1vw, 1.4rem)','1.3'],
	  'scaling-sm': ['clamp(1.2rem, 1.1vw, 1.6rem)', '1.42'],
	  'scaling-base': ['clamp(1.4rem, 1.25vw, 1.8rem)', '1.5'],
	  'scaling-lg': ['clamp(1.6rem, 1.4vw, 2rem)', '1.5'],
	  'scaling-xl': ['clamp(1.8rem, 1.6vw, 2.4rem)', '1.5'],
	  'scaling-2xl': ['clamp(2rem, 1.88vw, 3rem)', '1.33'],
	  'scaling-3xl': ['clamp(2.4rem, 2.3vw, 3.6rem)', '1.2'],
	  'scaling-4xl': ['clamp(3rem, 2.8vw, 4.8rem)', '1.1'],
	  'scaling-5xl': ['clamp(3.6rem, 3.75vw, 6rem)', '1'],
	  'scaling-6xl': ['clamp(4.8rem, 4.6vw, 7.2rem)', '1'],
	  'scaling-7xl': ['clamp(6rem, 5.625vw, 9.6rem)', '1'],
	  'scaling-8xl': ['clamp(7.2rem, 7.5vw, 12.8rem)', '1'],
	},	
  },
  safelist: [	  
	    
 	  {
		pattern: /(text|bg|btn|icon)-(white|black|transparent|red)/, //adjust colors to match list available in color def
		variants: ['hover', 'focus'],
	  },
	  {
		pattern: /(text|bg|btn|icon)-gray-(100|200|300|400|500|600|700|800|900)/, //adjust colors to match list available in color def
		variants: ['hover', 'focus'],
	  },
	  {
		pattern: /(p|m|px|py|pt|pl|pr|pb|mt|mb|ml|mr)-(none|0|quarter|half|base|2x|3x|4x|normal|extra|neg-quarter|neg-half|neg-base|neg-2x|neg-3x|neg-4x|half-normal|neg-half-normal|neg-normal|neg-extra)/, //adjust sizes to match list available in spacing def
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /text-(scaling-)?(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|left|center|right|justify)/, //adjust sizes to match list available in text size def and alignment settings
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /(not-)?italic/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		  //Add in the names of any fonts being used to make sure the class name is kept
		  pattern: /font-(normal|bold|brother)/, 
		  variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
		},
	  {
		pattern: /tracking-(tighter|tight|normal|wide|wider|widest)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /(normal-case|capitalize|uppercase|lowercase)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /w-(full|1\/5|1\/4|1\/3|2\/5|1\/2|3\/5|2\/3|3\/4|4\/5)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /order-(first|last|1|2|3|4|5)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /(items|self)-(stretch|start|center|end)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /justify-(start|center|end|between|evenly)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /btn-(standard|text|text-arrow|sm|md|lg)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /icon-(small|medium|large)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /aspect-(auto|square|video|4\/3|3\/2|3\/1|2\/1|4\/1)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /(block|hidden|inline|inline-block|flex)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },	  
	  {
	  	pattern: /(text-wrap-left|text-wrap-right|text-wrap-none|hidden|not-hidden|block|flex-wrap|flex-nowrap)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/card', '@sm/card', '@md/card', '@lg/card', '@xl/card', '@2xl/card', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
	    pattern: /columns-(\d)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /(bg|object)-(repeat|repeat-x|repeat-y|no-repeat|auto|contain|cover|center|left-top|top|right-top|left|right|left-bottom|bottom|right-bottom)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },
	  {
		pattern: /opacity-(0|10|20|30|40|50|60|70|80|90|100)/, 
		variants: ['sm', 'md', 'lg', 'xl', '2xl', '@xs', '@sm', '@md', '@lg', '@xl', '@2xl', '@xs/list', '@sm/list', '@md/list', '@lg/list', '@xl/list', '@2xl/list', '@xs/component', '@sm/component', '@md/component', '@lg/component', '@xl/component', '@2xl/component'],
	  },	    	  	    
  ],
};