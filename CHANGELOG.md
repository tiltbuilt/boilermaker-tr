# Changelog

## 1.4.0 - 2021-07-??
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
- Updated
  - craft 3.6.17 => 3.7.8  
  - architect 2.4.2 => 2.4.3
  - blitz 3.9.0 => 3.10.2
  - feed-me 4.3.6 => 4.4.0
  - field-manager 2.2.3 => 2.2.4
  - freeform 3.11.7 => 3.11.10
  - imager-x v3.4.0 => v3.5.1
  - navigation 1.4.18 => 1.4.20
  - neo 2.10.3 => 2.11.6.1
  - redactor 2.8.7 => 2.8.8
  - retour 3.1.54 => 3.1.59
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