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
  "palettes" => [
    "Text" => [
      // custom label
      [
        "label" => "Black",
        "default" => false,
        "color" => [
          [
            "color" => "#000000", // the colour shown in the fieldtype (required)
            "class" => "text-black",
          ],
        ],
      ],
      [
        "label" => "White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "text-white",
          ],
        ],
      ],
      [
        "label" => "Light Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#d1d5db", // the colour shown in the fieldtype (required)
            "class" => "text-gray-300",
          ],
        ],
      ],
      [
        "label" => "Medium Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#6b7280", // the colour shown in the fieldtype (required)
            "class" => "text-gray-500",
          ],
        ],
      ],
      [
        "label" => "Dark Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#1f2937", // the colour shown in the fieldtype (required)
            "class" => "text-gray-800",
          ],
        ],
      ],
      [
        "label" => "Red - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "text-red-primary",
          ],
        ],
      ],
      [
        "label" => "Red - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "text-red-secondary",
          ],
        ],
      ],
      [
        "label" => "Red - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#690A09", // the colour shown in the fieldtype (required)
            "class" => "text-red-dark",
          ],
        ],
      ],
      [
        "label" => "Blue - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#232C39", // the colour shown in the fieldtype (required)
            "class" => "text-blue-primary",
          ],
        ],
      ],
      [
        "label" => "Blue - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "text-blue-secondary",
          ],
        ],
      ],
      [
        "label" => "Blue - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#13181F", // the colour shown in the fieldtype (required)
            "class" => "text-blue-dark",
          ],
        ],
      ],
      [
        "label" => "Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "text-gold",
          ],
        ],
      ],
      [
        "label" => "Tan",
        "default" => false,
        "color" => [
          [
            "color" => "#EFD6BE", // the colour shown in the fieldtype (required)
            "class" => "text-tan",
          ],
        ],
      ],
      [
        "label" => "Tan - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#BE996F", // the colour shown in the fieldtype (required)
            "class" => "text-darktan",
          ],
        ],
      ],
    ],
    "Header" => [
      // custom label
      [
        "label" => "Black",
        "default" => false,
        "color" => [
          [
            "color" => "#000000", // the colour shown in the fieldtype (required)
            "class" => "header-black",
          ],
        ],
      ],
      [
        "label" => "White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "header-white",
          ],
        ],
      ],
      [
        "label" => "Light Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#d1d5db", // the colour shown in the fieldtype (required)
            "class" => "header-gray-300",
          ],
        ],
      ],
      [
        "label" => "Medium Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#6b7280", // the colour shown in the fieldtype (required)
            "class" => "header-gray-500",
          ],
        ],
      ],
      [
        "label" => "Dark Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#1f2937", // the colour shown in the fieldtype (required)
            "class" => "header-gray-800",
          ],
        ],
      ],
      [
        "label" => "Red - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "header-red-primary",
          ],
        ],
      ],
      [
        "label" => "Red - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "header-red-secondary",
          ],
        ],
      ],
      [
        "label" => "Red - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#690A09", // the colour shown in the fieldtype (required)
            "class" => "header-red-dark",
          ],
        ],
      ],
      [
        "label" => "Blue - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#232C39", // the colour shown in the fieldtype (required)
            "class" => "header-blue-primary",
          ],
        ],
      ],
      [
        "label" => "Blue - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "header-blue-secondary",
          ],
        ],
      ],
      [
        "label" => "Blue - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#13181F", // the colour shown in the fieldtype (required)
            "class" => "header-blue-dark",
          ],
        ],
      ],
      [
        "label" => "Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "header-gold",
          ],
        ],
      ],
      [
        "label" => "Tan",
        "default" => false,
        "color" => [
          [
            "color" => "#EFD6BE", // the colour shown in the fieldtype (required)
            "class" => "header-tan",
          ],
        ],
      ],
      [
        "label" => "Tan - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#BE996F", // the colour shown in the fieldtype (required)
            "class" => "header-darktan",
          ],
        ],
      ],
      [
        "label" => "Red & Tan",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "header-redtan",
          ],
          [
            "color" => "#BE996F", // the colour shown in the fieldtype (required)
            "class" => "header-redtan",
          ],
        ],
      ],
      [
        "label" => "Red & Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "header-redgray",
          ],
          [
            "color" => "#d1d5db", // the colour shown in the fieldtype (required)
            "class" => "header-redgray",
          ],
        ],
      ],
      [
        "label" => "White & Red",
        "default" => false,
        "color" => [
          [
            "color" => "#ffffff", // the colour shown in the fieldtype (required)
            "class" => "header-whitered",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "header-whitered",
          ],
        ],
      ],
      [
        "label" => "White & Blue",
        "default" => false,
        "color" => [
          [
            "color" => "#ffffff", // the colour shown in the fieldtype (required)
            "class" => "header-whiteblue",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "header-whiteblue",
          ],
        ],
      ],
      [
        "label" => "Gold & Red",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "header-goldred",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "header-goldred",
          ],
        ],
      ],
      [
        "label" => "Gold & Blue",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "header-goldblue",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "header-goldblue",
          ],
        ],
      ],
    ],
    "Background" => [
      // custom label
      [
        "label" => "Transparent",
        "default" => false,
        "color" => [
          [
            "color" => "#ecfeff", // the colour shown in the fieldtype (required)
            "class" => "bg-transparent",
          ],
        ],
      ],
      [
        "label" => "Black",
        "default" => false,
        "color" => [
          [
            "color" => "#000000", // the colour shown in the fieldtype (required)
            "class" => "bg-black",
          ],
        ],
      ],
      [
        "label" => "White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "bg-white",
          ],
        ],
      ],
      [
        "label" => "Light Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#d1d5db", // the colour shown in the fieldtype (required)
            "class" => "bg-gray-300",
          ],
        ],
      ],
      [
        "label" => "Medium Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#6b7280", // the colour shown in the fieldtype (required)
            "class" => "bg-gray-500",
          ],
        ],
      ],
      [
        "label" => "Dark Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#1f2937", // the colour shown in the fieldtype (required)
            "class" => "bg-gray-800",
          ],
        ],
      ],
      [
        "label" => "Red - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "bg-red-primary",
          ],
        ],
      ],      
      [
        "label" => "Red - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#690A09", // the colour shown in the fieldtype (required)
            "class" => "bg-red-dark",
          ],
        ],
      ],
      [
        "label" => "Blue - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#232C39", // the colour shown in the fieldtype (required)
            "class" => "bg-blue-primary",
          ],
        ],
      ],      
      [
        "label" => "Blue - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#13181F", // the colour shown in the fieldtype (required)
            "class" => "bg-blue-dark",
          ],
        ],
      ],
      [
        "label" => "Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "bg-gold",
          ],
        ],
      ],
      [
        "label" => "Tan",
        "default" => false,
        "color" => [
          [
            "color" => "#EFD6BE", // the colour shown in the fieldtype (required)
            "class" => "bg-tan",
          ],
        ],
      ],
      [
        "label" => "Tan - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#BE996F", // the colour shown in the fieldtype (required)
            "class" => "bg-darktan",
          ],
        ],
      ],
    ],
    "Border" => [
      // custom label
      [
        "label" => "Black",
        "default" => false,
        "color" => [
          [
            "color" => "#000000", // the colour shown in the fieldtype (required)
            "class" => "border-black",
          ],
        ],
      ],
      [
        "label" => "White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "border-white",
          ],
        ],
      ],
      [
        "label" => "Light Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#d1d5db", // the colour shown in the fieldtype (required)
            "class" => "border-gray-300",
          ],
        ],
      ],
      [
        "label" => "Medium Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#6b7280", // the colour shown in the fieldtype (required)
            "class" => "border-gray-500",
          ],
        ],
      ],
      [
        "label" => "Dark Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#1f2937", // the colour shown in the fieldtype (required)
            "class" => "border-gray-800",
          ],
        ],
      ],
      [
        "label" => "Red - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "border-red-primary",
          ],
        ],
      ],
      [
        "label" => "Red - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "border-red-secondary",
          ],
        ],
      ],
      [
        "label" => "Red - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#690A09", // the colour shown in the fieldtype (required)
            "class" => "border-red-dark",
          ],
        ],
      ],
      [
        "label" => "Blue - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#232C39", // the colour shown in the fieldtype (required)
            "class" => "border-blue-primary",
          ],
        ],
      ],
      [
        "label" => "Blue - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "border-blue-secondary",
          ],
        ],
      ],
      [
        "label" => "Blue - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#13181F", // the colour shown in the fieldtype (required)
            "class" => "border-blue-dark",
          ],
        ],
      ],
      [
        "label" => "Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "border-gold",
          ],
        ],
      ],
      [
        "label" => "Tan",
        "default" => false,
        "color" => [
          [
            "color" => "#EFD6BE", // the colour shown in the fieldtype (required)
            "class" => "border-tan",
          ],
        ],
      ],
      [
        "label" => "Tan - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#BE996F", // the colour shown in the fieldtype (required)
            "class" => "border-darktan",
          ],
        ],
      ],
    ],
    "Button" => [
      // custom label            
      [
        "label" => "White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "btn-white",
          ],
        ],
      ],
      [
        "label" => "Red - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "btn-red-primary",
          ],
        ],
      ],
      [
        "label" => "Red - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-red-secondary",
          ],
        ],
      ],
      [
        "label" => "Red - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#690A09", // the colour shown in the fieldtype (required)
            "class" => "btn-red-dark",
          ],
        ],
      ],
      [
        "label" => "Blue - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#232C39", // the colour shown in the fieldtype (required)
            "class" => "btn-blue-primary",
          ],
        ],
      ],
      [
        "label" => "Blue - Secondary",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-blue-secondary",
          ],
        ],
      ],
      [
        "label" => "Blue - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#13181F", // the colour shown in the fieldtype (required)
            "class" => "btn-blue-dark",
          ],
        ],
      ],
      [
        "label" => "Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-gold",
          ],
        ],
      ],      
    ],
    
    "Slider Button" => [
      // custom label      
      [
        "label" => "White Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-white-gold",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-white-gold",
          ],
        ],
      ],
      [
        "label" => "Gold White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-gold-white",
          ],
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-gold-white",
          ],
        ],
      ],
      [
        "label" => "Red Blue",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-red-blue",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-red-blue",
          ],
        ],
      ],
      [
        "label" => "Blue Red",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-blue-red",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-blue-red",
          ],
        ],
      ],
      [
        "label" => "Red Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-red-gold",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-red-gold",
          ],
        ],
      ],
      [
        "label" => "Blue Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-blue-gold",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-blue-gold",
          ],
        ],
      ],
      [
        "label" => "Red White",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-red-white",
          ],
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-red-white",
          ],
        ],
      ],
      [
        "label" => "Blue White",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-blue-white",
          ],
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "btn-slider-blue-white",
          ],
        ],
      ],      
    ], 
    
    "Slider Dots" => [
      // custom label      
      [
        "label" => "White Gold Red",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "dots-white-gold-red",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "dots-white-gold-red",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "dots-white-gold-red",
          ],
        ],
      ],
      [
        "label" => "White Gold Blue",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "dots-white-gold-blue",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "dots-white-gold-blue",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "dots-white-gold-blue",
          ],
        ],
      ],
      [
        "label" => "Blue Red Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "dots-blue-red-gold",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "dots-blue-red-gold",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "dots-blue-red-gold",
          ],
        ],
      ],
      [
        "label" => "Red Blue Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "dots-red-blue-gold",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "dots-red-blue-gold",
          ],
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "dots-red-blue-gold",
          ],
        ],
      ],     
    ], 
    
    "Accordion Buttons" => [
      // custom label      
      [
        "label" => "Red Blue",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-red-blue",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-red-blue",
          ],
        ],
      ],
      [
        "label" => "Blue Red",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-blue-red",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-blue-red",
          ],
        ],
      ],
      [
        "label" => "Red Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-red-gold",
          ],          
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-red-gold",
          ],
        ],
      ],
      [
        "label" => "Blue Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-blue-gold",
          ],          
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-acc-blue-gold",
          ],
        ],
      ],     
    ],
    
    "Tab Buttons" => [
      // custom label      
      [
        "label" => "Red Blue",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-red-blue",
          ],
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-red-blue",
          ],
        ],
      ],
      [
        "label" => "Blue Red",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-blue-red",
          ],
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-blue-red",
          ],
        ],
      ],
      [
        "label" => "Red Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#AD1715", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-red-gold",
          ],          
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-red-gold",
          ],
        ],
      ],
      [
        "label" => "Blue Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#13376A", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-blue-gold",
          ],          
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "btn-tab-blue-gold",
          ],
        ],
      ],     
    ],
    
    "Icons" => [
      // custom label      
      [
        "label" => "Black",
        "default" => false,
        "color" => [
          [
            "color" => "#000000", // the colour shown in the fieldtype (required)
            "class" => "text-black",
          ],
        ],
      ],
      [
        "label" => "White",
        "default" => false,
        "color" => [
          [
            "color" => "#FFFFFF", // the colour shown in the fieldtype (required)
            "class" => "text-white",
          ],
        ],
      ],
      [
        "label" => "Light Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#d1d5db", // the colour shown in the fieldtype (required)
            "class" => "text-gray-300",
          ],
        ],
      ],
      [
        "label" => "Medium Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#6b7280", // the colour shown in the fieldtype (required)
            "class" => "text-gray-500",
          ],
        ],
      ],
      [
        "label" => "Dark Gray",
        "default" => false,
        "color" => [
          [
            "color" => "#1f2937", // the colour shown in the fieldtype (required)
            "class" => "text-gray-800",
          ],
        ],
      ],
      [
        "label" => "Red - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#9D2920", // the colour shown in the fieldtype (required)
            "class" => "text-red-primary",
          ],
        ],
      ],      
      [
        "label" => "Red - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#690A09", // the colour shown in the fieldtype (required)
            "class" => "text-red-dark",
          ],
        ],
      ],
      [
        "label" => "Blue - Primary",
        "default" => false,
        "color" => [
          [
            "color" => "#232C39", // the colour shown in the fieldtype (required)
            "class" => "text-blue-primary",
          ],
        ],
      ],      
      [
        "label" => "Blue - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#13181F", // the colour shown in the fieldtype (required)
            "class" => "text-blue-dark",
          ],
        ],
      ],
      [
        "label" => "Gold",
        "default" => false,
        "color" => [
          [
            "color" => "#FFB600", // the colour shown in the fieldtype (required)
            "class" => "text-gold",
          ],
        ],
      ],
      [
        "label" => "Tan",
        "default" => false,
        "color" => [
          [
            "color" => "#EFD6BE", // the colour shown in the fieldtype (required)
            "class" => "text-tan",
          ],
        ],
      ],
      [
        "label" => "Tan - Dark",
        "default" => false,
        "color" => [
          [
            "color" => "#BE996F", // the colour shown in the fieldtype (required)
            "class" => "text-darktan",
          ],
        ],
      ],
    ],
        
  ],
];
