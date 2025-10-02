<?php

  use craft\helpers\App;

  return [
	'*' => [	
		'jpegQuality' => 70,
		'webpQuality' => 70,
		'avifQuality' => 70,
	],
	'production' => [
		'transformer' => 'imgixdownload',
		'imgixConfig' => [
			'default' => [
				'domain' => App::env('IMGIX_SRC_DOMAIN'),
				'useHttps' => true,
				'signKey' => App::env('IMGIX_TOKEN'),
				'sourceIsWebProxy' => false,
				'useCloudSourcePath' => true,				
				'getExternalImageDimensions' => true,
				'defaultParams' => ['auto'=>'compress', 'q'=>70],
			],		
		]
	],
	'staging' => [
		'transformer' => 'imgixdownload',
		'imgixConfig' => [
			'default' => [
				'domain' => App::env('IMGIX_SRC_DOMAIN'),
				'useHttps' => true,
				'signKey' => App::env('IMGIX_TOKEN'),
				'sourceIsWebProxy' => false,
				'useCloudSourcePath' => true,				
				'getExternalImageDimensions' => true,
				'defaultParams' => ['auto'=>'compress', 'q'=>70],
			],		
		]
	],
  ];