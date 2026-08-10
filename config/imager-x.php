<?php

  use craft\helpers\App;

  return [
	'*' => [	
		'jpegQuality' => 70,
		'webpQuality' => 70,
		'avifQuality' => 70,
	],
	'production' => [
		'transformer' => 'servd'		
	],
	'staging' => [
		'transformer' => 'servd'
	],
  ];