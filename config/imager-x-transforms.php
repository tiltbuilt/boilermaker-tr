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