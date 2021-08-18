<?php

  use craft\helpers\App;

  return [
	/*'transformer' => 'imgix',*/
	'jpegQuality' => 70,
	'webpQuality' => 70,
	/*
	'imgixConfig' => [
		'default' => [
			'domain' => App::env('IMGIX_SRC_DOMAIN'),
			'useHttps' => true,
			'signKey' => App::env('IMGIX_TOKEN'),
			'sourceIsWebProxy' => false,
			'useCloudSourcePath' => true,
			'addPath' => [
				'images' => 'images',			            
			],
			'getExternalImageDimensions' => true,
			'defaultParams' => ['auto'=>'compress,format', 'q'=>70],
		],		
	]*/
  ];