<?php

namespace modules\iconvolumesvg;

use Craft;
use yii\base\Module as BaseModule;
use craft\elements\Asset;
use craft\events\ModelEvent; // Changed to ModelEvent
use craft\events\GenerateTransformEvent; // Import the transform event class
use yii\base\Event;

/**
 * IconVolumeSvg module
 *
 * @method static IconVolumeSvg getInstance()
 */
class IconVolumeSvg extends BaseModule
{
    public function init(): void
    {
        Craft::setAlias('@modules/iconvolumesvg', __DIR__);

        // Set the controllerNamespace based on whether this is a console or web request
        if (Craft::$app->request->isConsoleRequest) {
            $this->controllerNamespace = 'modules\\iconvolumesvg\\console\\controllers';
        } else {
            $this->controllerNamespace = 'modules\\iconvolumesvg\\controllers';
        }

        parent::init();

        Event::on(
            Asset::class,
            Asset::EVENT_BEFORE_SAVE,
            function (ModelEvent $event) { // Use ModelEvent typehint
                /** @var Asset $asset */
                $asset = $event->sender;

                // 1. Specify the volume handle you want to target
                $targetVolumeHandle = 'icons'; 

                // 2. Specify allowed extensions (lowercase)
                $allowedExtensions = ['svg'];

                // Fetch the asset's volume to check its handle
                $volume = $asset->getVolume();

                if ($volume && $volume->handle === $targetVolumeHandle) {
                    $extension = strtolower($asset->getExtension());

                    if (!in_array($extension, $allowedExtensions, true)) {
                        // Attach the validation error directly to the element
                        $asset->addError('filename', 'This file extension is not allowed in this volume.');
                        
                        // Cancel the save operation cleanly in Craft 5
                        $event->isValid = false;
                    }
                }
            }
        );

        Event::on(
            Asset::class,
            Asset::EVENT_BEFORE_GENERATE_TRANSFORM,
            function (GenerateTransformEvent $event) {
                /** @var Asset $asset */
                $asset = $event->asset; // The asset requested
                $targetVolumeHandle = 'icons'; 

                if ($asset) {
                    $volume = $asset->getVolume();
                    
                    if ($volume && $volume->handle === $targetVolumeHandle) {
                        // Point the transform URL straight to the original file path
                        // This instructs Craft to skip generation and use the source file instead
                        $event->url = $asset->getUrl(); 
                    }
                }
            }
        );
    }

}
