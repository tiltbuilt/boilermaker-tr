<?php
  return [
	// If true, optimizes the saving of Neo fields by only saving existing blocks that have had their content modified
	'saveModifiedBlocksOnly' => true,
	// If true, optimizes the saving of elements with Neo fields by offloading generating search keywords to a task
	'generateKeywordsWithTask' => true,
  ];