# Changelog

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