<?php

  use craft\helpers\App;

  return [
	'*' => [	
		'jpegQuality' => 70,
		'webpQuality' => 70,
	],
	'production' => [
		'transformer' => 'imgix',
		'imgixConfig' => [
			'default' => [
				'domain' => App::env('IMGIX_SRC_DOMAIN'),
				'useHttps' => true,
				'signKey' => App::env('IMGIX_TOKEN'),
				'sourceIsWebProxy' => false,
				'useCloudSourcePath' => true,				
				'getExternalImageDimensions' => true,
				'defaultParams' => ['auto'=>'compress,format', 'q'=>70],
			],		
		]
	],
	'staging' => [
		'transformer' => 'imgix',
		'imgixConfig' => [
			'default' => [
				'domain' => App::env('IMGIX_SRC_DOMAIN'),
				'useHttps' => true,
				'signKey' => App::env('IMGIX_TOKEN'),
				'sourceIsWebProxy' => false,
				'useCloudSourcePath' => true,				
				'getExternalImageDimensions' => true,
				'defaultParams' => ['auto'=>'compress,format', 'q'=>70],
			],		
		]
	],
  ];