<?php

return [
	'contentImage' => [
		'transforms' => [
			['width' => 320],
			['width' => 640],
			['width' => 768],
			['width' => 1024],
			['width' => 1280],
			['width' => 1600],
		],
		'defaults' => [
			'webpQuality' => 70,
			'jpegQuality' => 70
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 300,
		]
	],
	'contentImageWebp' => [
		'transforms' => 'contentImage',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'headerImage-16-9' => [
		'transforms' => [
			['width' => 320],
			['width' => 640],
			['width' => 768],
			['width' => 1024],
			['width' => 1280],
			['width' => 1600],
		],
		'defaults' => [
			'webpQuality' => 70,
			'jpegQuality' => 70,
			'ratio' => 16/9,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 300,
		]
	],
	'headerImageWebp-16-9' => [
		'transforms' => 'headerImage-16-9',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'headerImage-4-3' => [
		'transforms' => [
			['width' => 320],
			['width' => 640],
			['width' => 768],
			['width' => 1024],
			['width' => 1280],
			['width' => 1600],
		],
		'defaults' => [
			'webpQuality' => 70,
			'jpegQuality' => 70,
			'ratio' => 4/3,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 300,
		]
	],
	'headerImageWebp-4-3' => [
		'transforms' => 'headerImage-4-3',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'headerImage-3-2' => [
		'transforms' => [
			['width' => 320],
			['width' => 640],
			['width' => 768],
			['width' => 1024],
			['width' => 1280],
			['width' => 1600],
		],
		'defaults' => [
			'webpQuality' => 70,
			'jpegQuality' => 70,
			'ratio' => 3/2,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 300,
		]
	],
	'headerImageWebp-3-2' => [
		'transforms' => 'headerImage-3-2',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'headerImage-3-1' => [
		'transforms' => [
			['width' => 320],
			['width' => 640],
			['width' => 768],
			['width' => 1024],
			['width' => 1280],
			['width' => 1600],
		],
		'defaults' => [
			'webpQuality' => 70,
			'jpegQuality' => 70,
			'ratio' => 3/1,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 300,
		]
	],
	'headerImageWebp-3-1' => [
		'transforms' => 'headerImage-3-1',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'headerImage-1-1' => [
		'transforms' => [
			['width' => 320],
			['width' => 640],
			['width' => 768],
			['width' => 1024],
			['width' => 1280],
			['width' => 1600],
		],
		'defaults' => [
			'webpQuality' => 70,
			'jpegQuality' => 70,
			'ratio' => 1/1,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 300,
		]
	],
	'headerImageWebp-1-1' => [
		'transforms' => 'headerImage-1-1',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'thumbnail' => [
		'transforms' => [
			['width' => 200],
			['width' => 320],
			['width' => 400],
			['width' => 640],			
		],
		'defaults' => [
			'ratio' => 16/9,
			'format' => 'jpg'
		]
	],
	'thumbnailWebp' => [
		'transforms' => 'thumbnail',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'rentalImg' => [
		'transforms' => [
			['width' => 200],
			['width' => 320],
			['width' => 400],
			['width' => 640],			
		],
		'defaults' => [
			'ratio' => 4/3,
			'format' => 'jpg'
		]
	],
	'rentalImgWebp' => [
		'transforms' => 'rentalImg',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'seoGenericImage' => [
		'transforms' => [
			['width' => 200],
			['width' => 400],
			['width' => 600],
		],
		'defaults' => [
			'ratio' => 16/9,
			'format' => 'jpg'
		]
	],
	'seoFacebookImage' => [
		'transforms' => [
			['width' => 300],
			['width' => 600],
			['width' => 1200],
		],
		'defaults' => [
			'ratio' => 300/157,
			'format' => 'jpg'
		]
	],
	'seoTwitterImage' => [
		'transforms' => [
			['width' => 300],
			['width' => 600],
			['width' => 1200],			
		],
		'defaults' => [
			'ratio' => 2/1,
			'format' => 'jpg'
		]
	]
];