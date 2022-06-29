<?php
/**
 * color-swatches plugin for Craft CMS 3.x.
 *
 * Let clients choose from a predefined set of colours.
 *
 * @link      https://percipio.london
 *
 * @copyright Copyright (c) 2020 Percipio.London
 */

/**
 * colour-swatches config.php.
 *
 * This file exists only as a template for the color-swatches settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'colour-swatches.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [

	// Custom  palettes, fixed options [label, default (boolean), colour (array(colour, customOptions)) ]
	'palettes' => [
		'Color Schemes' => [  // custom label				
			[
				'label'   => 'Theme 1',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#FFFFFF',               // the colour shown in the fieldtype (required)
						'themeName' => 'theme1',
						'background'        => 'bg-black',						
						'text'              => 'text-white',
						'heading1Text'              => 'text-white',
						'heading2Text'              => 'text-white',
						'heading3Text'              => 'text-white',
						'heading4Text'              => 'text-white',
						'heading5Text'              => 'text-white',
						'heading6Text'              => 'text-white',
						'textLink'         => 'text-gray-500',
						'textLinkHover'         => 'hover:text-gray-200',
						'buttonSolid'			=> 'bg-gray-300 border text-black',
						'buttonSolid:hover'     => 'bg-white text-black',
						'buttonOutline'			=> 'bg-transparent border-gray-300 text-gray-300',
						'buttonOutline:hover'     => 'bg-white border-white text-black',
						'buttonArrow'			=> 'bg-transparent text-gray-300',
						'buttonArrow:hover'     => 'bg-transparent text-white',
						'containerElementBg' =>	'bg-gray-800',
						'icon1' => 'fill-white',
						'icon2' => 'fill-gray-200',
						
					],
					[
						'color'             => '#000000',               // the colour shown in the fieldtype (required)
						
					],
					[
						'color'             => '#cbd5e1',               // the colour shown in the fieldtype (required)
						
					],					
				]
			],
			[
				'label'   => 'Theme 2',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#000000',               // the colour shown in the fieldtype (required)
						'themeName' => 'theme2',
						'background'        => 'bg-white',						
						'text'              => 'text-gray-900',
						'heading1Text'              => 'text-black',
						'heading2Text'              => 'text-black',
						'heading3Text'              => 'text-black',
						'heading4Text'              => 'text-black',
						'heading5Text'              => 'text-black',
						'heading6Text'              => 'text-black',
						'textLink'         => 'text-gray-500',
						'textHover'         => 'hover:text-gray-300',
						'buttonSolid'			=> 'bg-gray-500 border text-white',
						'buttonSolid:hover'     => 'bg-black text-white',
						'buttonOutline'			=> 'bg-transparent border-gray-500 text-gray-500',
						'buttonOutline:hover'     => 'bg-black border-black text-white',
						'buttonArrow'			=> 'bg-transparent text-gray-500',
						'buttonArrow:hover'     => 'bg-transparent text-black',
						'containerElementBg' =>	'bg-gray-300',
						'icon1' => 'fill-black',
						'icon2' => 'fill-gray-500',
						
					],
					[
						'color'             => '#FFFFFF',               // the colour shown in the fieldtype (required)
						
					],
					[
						'color'             => '#6b7280',               // the colour shown in the fieldtype (required)
						
					],					
				]
			],			
		],
		'Backgrounds' => [  // custom label
			[
				'label'   => 'Transparent',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#cffafe',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-transparent'						
					]
				]
			],
			[
				'label'   => 'White',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#ffffff',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-white'						
					]
				]
			],
			[
				'label'   => 'Black',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#000000',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-black'						
					]
				]
			],
			[
				'label'   => 'Light Gray',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#d1d5db',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-gray-300'						
					]
				]
			],
			[
				'label'   => 'Medium Gray',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#71717a',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-gray-500'						
					]
				]
			],
			[
				'label'   => 'Dark Gray',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#1f2937',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-gray-800'						
					]
				]
			],
			[
				'label'   => 'Red',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#ff0000',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-red'						
					]
				]
			],						
		],
		'Text' => [  // custom label			
			[
				'label'   => 'White',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#ffffff',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-white'						
					]
				]
			],
			[
				'label'   => 'Black',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#000000',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-black'						
					]
				]
			],
			[
				'label'   => 'Light Gray',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#d1d5db',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-gray-300'						
					]
				]
			],
			[
				'label'   => 'Medium Gray',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#71717a',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-gray-500'						
					]
				]
			],
			[
				'label'   => 'Dark Gray',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#1f2937',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-gray-800'						
					]
				]
			],
			[
				'label'   => 'Red',
				'default' => false,
				'color'   =>  [
					[
						'color'             => '#ff0000',               // the colour shown in the fieldtype (required)
						'background'        => 'bg-red'						
					]
				]
			],						
		],
	]

];