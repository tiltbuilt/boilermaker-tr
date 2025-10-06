# Changelog

## 3.2.3 - 2025-10-06
### Fixed
- Corrected code in page header template and global macro to allow video backgrounds to autoplay correctly

## 3.2.2 - 2025-10-03
### Fixed
- Invalid media query in slider css file
- Error in Make file when trying to install plugins twice
- Put ddev base project path in for Craft Web  Root env var to prevent issues with uploads not working
- Put DDEV url environment variable in as primary url in env

### Updated
- README file to draw attention to ddev start step

## 3.2.1 - 2025-10-03
### Fixed
- Put in env vars in the starter env file to handle switching asset filesystems between local development and Servd asset platform for staging and production

### Updated
- README file updated to reflect most recent version and added clearer instructions for the install process

## 3.2.0 - 2025-10-02
### Upgraded
- Craft CMS and all Plugins

### Added
- Critter plugin for Critical CSS handling
- Imager-X ImgIX Local Storage Plugin to attempt to help image performance

### Changed
- Remove Adjustment blocks as type and moved all djsutments directly to element entry types themselves
- Put in image sizing to attempt to set sizes attributes on images
- Changed layout blocks to use grid for layout
- Changed available widths on columns to match grid system

## 3.1.0 - 2025-08-25
### Upgraded
- Front end build process now uses Vite 7.0+ and Tailwind CSS 4.1+

## 3.0.14 - 2025-05-23
### Changed
- Setup of modals to use Alpine Store feature
- Link setup to use native Link field rather than Hyper plugin
- GSAP to use free version

### Fixed
- Excerpt issue on content cards in repeater
- Class names for content sections loaded in modals to correctly set styles
- animClass tag error in quote block 
- ddev 1.24.5 gitignore bug

### Added
- Link Cards as repeater content type
- Text alignment controls to all container type blocks
- Default titles and entry type labels to all card displays in the CP


## 3.0.13 - 2025-04-11
### Changed
- Setup on page header aspect rations to enforce the aspect set in globals as a minimum

### Added
- Video background capability in page header

## 3.0.12 - 2025-04-09
### Fixed
- Fixes to vite config for update
- Fix to global macro background setup to accommodate svg background images
- Fixed errors in Imager-X transform configs
- Fixed syntax error in slide template
- Fixed positioning of image on 2 column side photo block
- Fixed text wrap settings
- Fixed excerpt output on content card repeaters

### Added
- auto as spacing option
- auto as image width option
- Cloner plugin to plugin stack



## 3.0.11 - 2024-12-12
### Fixed
- Fixes to styling on various components
- Fix to CSRF issue with Formie forms

### Added
- Half-Normal scaling spacing option
- Documents asset volume added to CKEditor configs to allow linking to PDF assets
- Linking ability in heading blocks
- Alignment control to button groups


## 3.0.10 - 2024-10-03
## 3.0.9 - 2024-10-03
### Fixed
- Icon issue on Slider Set
- Path issue on imager-x config

### Changed
- CTA Setup to be more flexible

### Added
- Template for embed block type (OOPS! Good catch Chris!)


## 3.0.9 - 2024-09-05
### Fixed
- Fixed rendering of content cards in repeater

## 3.0.8 - 2024-09-05
### Fixed
- Fixed rendering of social media icons from Global macro
- Fixed error with background images in global macro

## 3.0.7 - 2024-08-25
### Fixed
- Fixed rendering of social media icons from Global macro


## 3.0.6 - 2024-08-20
### Changed
- Row matrix field now renders as inline blocks in the control panel to cut down on the number of flyouts
- Image blocks and CTA blocks now use their image asset fields as thumbnails in the control panel
- Added upload_dirs config setting to ddev config to improve Mutagen performance
- Added classes to help distinguish between CTA types. Changed labelling on CTA Type field to match
- Added a default color scheme setting and made color schemes non-required in section blocks and the page header
- Added bullet-list class filter to text output to make ul lists styled with bullets

### Fixed
- Fixed issue with search indexes not updating due to animation and color variables not being present
- Fixed issue with sort order from field on select entry repeaters not being respected
- Fixed class name issue in Button Group template that was causing button colors to not render correctly from Button Color field


## 3.0.5 - 2024-08-09
### Changed
-Added class names for CTA types into template to help distinguish between them, renamed CTA types to CTA with Photo and CTA without Photo

### Fixed
-Fixed classname issue on button color overrides
-Notification bar alerts now load


## 3.0.4 - 2024-08-05
### Fixed
-Fixed issue with path settings for asset folders in .env


## 3.0.3 - 2024-08-03
### Fixed
- Fixed deployment issue with version number


## 3.0.2 - 2024-08-03
### Fixed
- Fixed issue with installing GSAP paid plugins
- Fixed issue with naming of site during install


## 3.0.1 - 2024-08-03
### Fixed
- issue with name of example env file preventing it from being copied on project initiation

## 3.0.0 - 2024-08-03

## Updated
 - Craft and all plugins to minimum of Craft 5.2.9 and compatible

## Removed
 - Neo
 - Freeform

## Changed
 - Dev environment switched to DDEV
 - System now uses Craft and internal Matrix/CKEditor setup with Nested Entry Types instead of Neo for the Page Builder
 - System now uses Formie plugin to handle form functionality
 - Now uses Vite for front end build and asset processing
 - Now uses Servd as default hosting platform
 - System now defaults to installing the current versions of all plugins at the first install of the project
 - Now uses Makefile for managing CLI commands

## 2.8.3 - 2024-02-25

## Updated
- craft 4.7.3 => 4.7.4
- blitz 4.11.1 => 4.11.2
- ckeditor 3.7.3 => 3.8.0
- freeform 5.0.11 => 5.0.14.1
- neo 4.0.5 => 4.0.6
- seomatic 4.0.40 => 4.0.42

## 2.8.2 - 2024-02-25
### Fixed
- issue with project config not being applied on install


## 2.8.1 - 2024-02-19
### Fixed
- version numbers

## 2.8.0 - 2024-02-19
## Updated
- craft 4.5.9 => 4.7.3
- blitz 4.7.0 => 4.11.1
- embeddedassets 3.1.8 => 3.2.0
- feed-me 5.2.0 => 5.3.0
- freeform 4.1.11 => 5.0.11
- imager-x 4.2.3 => 4.3.1
- navigation 2.0.22 => 2.0.25
- neo 3.9.8 => 4.0.5
- retcon 2.7.4 => 2.7.5
- retour 4.1.14 => 4.1.15
- seomatic 4.0.33 => 4.0.40
- icon-picker 2.0.15 => 2.0.16
- ckeditor 3.6.0 => 3.7.3
- minify 4.0.0-beta.2 => 4.0.1

## Removed
- Redactor and related plugins

## Added
- CKeditor

## Changed
- Changed Redactor Configs to work with CKEditor
- Updated templates to work new version of freeform
- Changed icon picker fields to handle different types of icons

### Fixed
- bug in global macro that cause multi-image backgrounds to fail


## 2.7.0 - 2023-10-31
## Updated
- craft 4.4.16.1 => 4.5.9
- blitz 4.5.0 => 4.7.0
- embeddedassets 3.1.6 => 3.1.8
- feed-me 5.1.3.1 => 5.2.0
- field-manager 3.0.7 => 3.0.8
- freeform 4.1.6 => 4.1.11
- imager-x 4.2.1 => 4.2.3
- navigation 2.0.19 => 2.0.22
- neo 3.8.3 => 3.9.8
- retcon 2.7.3 => 2.7.4
- retour 4.1.12 => 4.1.14
- seomatic 4.0.30 => 4.0.33
- icon-picker 2.0.13 => 2.0.15

## Removed
- Redactor and related plugins

## Added
- CKeditor

## Changed
- Changed Redactor Configs to work with CKEditor
- Changed text content block to automatically make bullet lists and also allow for multi-column ul lists
- Fixed icon picker value issues in accordion block
- Fixed error in Imager-X transform list that caused square images to misrender



## 2.6.0 - 2023-08-02
## Updated

- craft 4.4.10.1 => 4.4.16.1
- blitz 4.4.4 => 4.5.0
- embeddedassets 3.1.5 => 3.1.6
- feed-me 5.1.3.1 => 5.2.0
- field-manager 3.0.5 => 3.0.7
- freeform 4.0.23 => 4.1.6
- imager-x 4.1.13 => 4.2.1
- navigation 2.0.17 => 2.0.19
- neo 3.7.8 => 3.8.3
- retcon 2.6.1 => 2.7.3
- section-and-product-type 2.0.1 => 2.0.3
- seomatic 4.0.24 => 4.0.30

## 2.5.0 - 2023-05-11
### Updated
- Craft and Plugins

## 2.4.2 - 2023-02-01
### Updated
- Plugins
### Fixed
- sprite vs value issue in Global Macros with Icon Picker

## 2.4.1 - 2023-01-24
### Updated
- Icon Picker Plugin
### Fixed
- issue with project config related to icon picker version that was preventing config from loading

## 2.4.0 - 2023-01-23
### Updated
- Craft and Plugins
### Fixed
- User permissions for content admin group

## 2.3.4 - 2022-10-10
### Fixed
- template mistakes in page header, entry and sliderSet

## 2.3.3 - 2022-10-07
### Fixed
- error where individual buttons in button group would not have their custom ids or custom class fields output in the template

## 2.3.2 - 2022-10-06
### Fixed
- Error with backgroundPosition variable in video background block

## 2.3.1 - 2022-09-29
### Changed
- Switched notification bar alerts from global field to entry type to allow scheduling
### Updated
- Craft and all plugins


## 2.3.0 - 2022-09-22
### Changed
- Incorporated various improvements gleaned from use on projects
- Made color scheme field required on section level elements and slides and CTAs, inherited on others if not selected.
### Updated
- Craft and all plugins


## 2.2.1 - 2022-08-21
### Fixed
- Syntax error in page template


## 2.2.0 - 2022-08-21
### Changed
- EVERYTHING!!!!!!
- Removed Adjustments Layer setup in Neo Field - We Hardly Knew Ye - For UI Improvements to Editing Experience
- Simplified Animation Setup
### Updated
- Craft and all plugins
### Added
- Ability to have embedded assets which can include YouTube videos, Vimeo videos, and Google Maps among other things

## 2.1.4 - 2022-07-18
### Fixed
- Corrected issue with .gitignore file in the dist folder
- Updated Craft and Neo. Neo update fixes issues with copy/paste/clone feature

## 2.1.3 - 2022-07-13
### Fixed
- Problem where turning on dots on the slider set would prevent drag from working

## 2.1.2 - 2022-07-13
### Changed
- Updates to Craft and Plugins
- Removed videos asset group, images will now hold video and images
- added full width vs constrained mode to page header and slides
- new improved color coding in Neo fields (thanks Chris!)

## 2.1.1 - 2022-07-06
### Changed
- Updates to Craft and Plugins
- Fixed project config for easier site naming
- Fixed twigpack config to use valet urls correctly and not have issues with webfont loading
- put in temporary correction to page header background issue until more permanent fix is in place

### Changed
- Changed field setup to consolidate style adjustments on a per device size basis rather than per style basis to cut down on UI elements

## 2.1.0 - 2022-07-05
### Updated
- Craft to 4.1.1 and plugin updates

### Changed
- Changed field setup to consolidate style adjustments on a per device size basis rather than per style basis to cut down on UI elements

### Added
- Color coding to the Neo blocks in the CP to help with finding things

## 2.0.3 - 2022-06-28
### Updated
- Changed project config setting to allow for easier renaming of the site from the .env file

## 2.0.2 - 2022-06-28
### Updated
- Neo to version 3.1.5 to fix issue with duplicate content on front end in unsaved drafts

## 2.0.1 - 2022-06-27
### Fixed
- naming issues in env example to correct project setup errors

## 2.0.0 - 2022-06-27
### Changed
- Updated Craft CMS to version 4 and all plugins to latest releases
- Overhauled Page Builder feature to use styling adjustment model to keep styling adjustments in CP down to only an as needed basis
- Overhauled animation system to to simplify development and use

## 1.5.0 - 2021-11-05
### Changed
- Updated Craft CMS and Plugins to latest releases

## 1.4.1 - 2021-08-18
### Changed
- Composer file update for release

## 1.4.0 - 2021-08-18
### Changed
- Fixed container class on 2 column container
- Fixed name of public folder in env example file
- Cleaned testing images out of src/img folder
- Added background opacity field to background field setup on content wrapper block
- Fixed nesting rules on main and half-width columns to not allow nested containers
- Fixed reference to companyInfo.socialLinks in global macro
- Fixed id settings in header block component
- Fixed header text content in page header component
- Added positioning switch for subhead positioning to header and cta blocks
- npm audit fixes
- changed dist folder gitgnore settings to include fonts and icons
- changed all header text field handles to headerText for consistency
- added share icon partial
- added better sizing on images to help with reveal animations
- added background capability to containers
- added animated reveals to most page components
- added modal capabilities
- Updated
  - craft 3.6.17 => 3.7.9  
  - architect 2.4.2 => 2.4.3
  - blitz 3.9.0 => 3.10.2
  - feed-me 4.3.6 => 4.4.0
  - field-manager 2.2.3 => 2.2.4
  - freeform 3.11.7 => 3.11.10
  - imager-x v3.4.0 => v3.5.2
  - navigation 1.4.18 => 1.4.20
  - neo 2.10.3 => 2.11.6.1
  - redactor 2.8.7 => 2.8.8
  - retour 3.1.54 => 3.1.60
  - seomatic 3.3.43 => 3.3.48
  - twigpack 1.2.14 => 1.2.15


## 1.3.0 - 2021-06-21
### Changed
- Updated
  - craft 3.6.15 => 3.6.17 
  - retour 3.1.53 => 3.1.54
  - seomatic 3.3.42 => 3.3.43
  - freeform 3.11.4.1 => 3.11.7
  - neo 2.9.8 => 2.10.3
  - field manager 2.2.2 => 2.2.3
  - navigation 1.4.16 => 1.4.18
- Modified EDC Macro to properly implement opacity on video backgrounds
- Added wider range of options for padding and margins
- Updated 2 column containers to use new padding and margin settings
- Modified image component to allow floats and image wrapping if needed
- Added eager loading of social links
  
## 1.2.2 - 2021-04-22
### Changed
- Updated composer.json file to reflect new release.

## 1.2.1 - 2021-04-22
### Changed
- Updated composer.json file to reflect new release.

## 1.2.0 - 2021-04-22
### Added
- Added long format text content block type
- Added 404 fields to globals to allow for custom 404 page content
### Removed
- Removed ImageOptimize plugin
### Changed
- Updated:
  - craft 3.6.7 => 3.6.12
  - feed-me 4.3.5.1 => 4.3.6
  - redactor 2.8.5 => 2.8.6
  - retour 3.1.48 => 3.1.52
  - seomatic 3.3.33 => 3.3.40
  - twigpack 1.2.10 => 1.2.13
  - architect 2.4.1 => 2.4.2
  - blitz 3.7.0 => 3.8.0
  - freeform 3.10.8 => 3.11.0
  - imager-x 3.3.0 => 3.4.0
  - neo 2.9.0 => 2.9.6
  - navigation 1.4.13 => 1.4.15
- Changed base font size to 10px for easier size calculations
- Updated UI sprite sheet to include more icon options
- Added wider range of spacing options and changed naming conventions
- Adjusted image block type to not use ImgIX processing when asset is an SVG file
- Fixed template error  and constraint issue in Container with Sidebar template
- Changed configuration of asset sources to allow for subfolders for better organization
- Updated button and button group blocks to have size control
- Updated Slider Set Slides to not use Flexbox for layout
- Updated slider to images to use lazysizes instead of built-in lazy load in owl carousel
- Added Render as Button as option to all Repeaters
- Changed Icon Content block to use svg use tag instead of inline
- Updated templates to eager load asset fields, neo blocks, and entry fields
  
## 1.1.0 - 2021-03-02
### Changed
- Updated:
  - craft 3.6.6 => 3.6.7
  - image-optimize 1.6.23 => 1.6.26
  - neo 2.8.19 => 2.9.0
  - retour 3.1.46 => 3.1.48
  - seomatic 3.3.32 => 3.3.33
  - twigpack 1.2.9 => 1.2.10
  
- Updated readme to include instructions regarding app id and security key environment variables 

## 1.0.0 - 2021-02-18
### Added
- Initial Release