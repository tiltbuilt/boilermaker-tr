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
			'fillInterval' => 200,
		]
	],
	'contentImage-webp' => [
		'transforms' => 'contentImage',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-video' => [
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
			'fillInterval' => 200,
		]
	],
	'image-video-webp' => [
		'transforms' => 'image-video',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-4/3' => [
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
			'fillInterval' => 200,
		]
	],
	'image-4/3-webp' => [
		'transforms' => 'image-4/3',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-3/2' => [
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
			'fillInterval' => 200,
		]
	],
	'image-3/2-webp' => [
		'transforms' => 'image-3/2',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-2/1' => [
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
			'ratio' => 2/1,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 200,
		]
	],
	'image-2/1-webp' => [
		'transforms' => 'image-2/1',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-3/1' => [
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
			'fillInterval' => 200,
		]
	],
	'image-3/1-webp' => [
		'transforms' => 'image-3/1',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-4/1' => [
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
			'ratio' => 4/1,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 200,
		]
	],
	'image-4/1-webp' => [
		'transforms' => 'image-4/1',
		'defaults' => [
			'format' => 'webp',
		]
	],
	'image-square' => [
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
			'fillInterval' => 200,
		]
	],
	'image-square-webp' => [
		'transforms' => 'image-square',
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
			'ratio' => 3/2,
			'format' => 'jpg'
		],
		'configOverrides' => [
			'fillTransforms' => true,
			'fillInterval' => 200,
		]
	],
	'thumbnailWebp' => [
		'transforms' => 'thumbnail',
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
		],		
	],
	'seoFacebookImage' => [
		'transforms' => [
			['width' => 300],
			['width' => 600],
			['width' => 1200],
		],
		'defaults' => [
			'ratio' => 300/157,			
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
		]
	]
];