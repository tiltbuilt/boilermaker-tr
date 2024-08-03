# Tilt - BoilerMaker-TR 

This is a starter Craft CMS v5.X setup for site built by TILT. It is opinionated in the sense that it is configured to make use of the following stack:
* DDEV as the local dev server
* Vite for handling of HMR, and front end build features
* SASS/PostCSS for CSS processing
* Alpine JS for Javascript

## Installation Instructions

**ONLY DO THIS IF YOU ARE CREATING A NEW PROJECT** You only need to install the boilerplate if you are the one initiating the build process on a project. If you aren't, whoever did initiate it should have created a repository on Tilt's GitHub account for the new site. Simply clone that repository and then create a blank database and run the `composer update` command from inside the project folder, followed by the the `./craft install` command.

### Download Files

First you need to run the command to download the package files. Open the terminal and go to the folder where you keep all of your sites. Once there, run the following command:

```shell
composer create-project tiltbuilt/boilermaker-tr my/project/path --no-install`
```

Where the project path part is replaced with the name of the folder for the project you are creating (usually the name of the client website, all lower case, no spaces. hyphens and underscores are allowed). The folder needs to be empty.

### Configure DDEV

If you want your site to run on a domain other than https://craftcms.ddev.site, run:

```shell
ddev config
```

Use the following settings:

Project name: e.g. mysite would result in a project URL of https://mysite.ddev.site (you will need this later)
Docroot location: keep as-is, web is the default
Project Type: keep as-is, php is the default

## Installing Craft

To install a clean version of Craft, run:

```shell
make install
```

Follow the prompts.

This command will:

1. Copy your local SSH keys into the container (handy if you are setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/))
2. Start your DDEV project
3. Install Composer
4. Install npm
5. Do a one-time build of Vite
6. Generate `APP_ID` and save to your `.env` file
7. Generate `SECURITY_KEY` and save to your `.env` file
8. Installing Craft for the first time, allowing you to set the admin's account credentials
9. Install all Craft plugins

Once the process is complete, type `ddev launch` to open the project in your default browser. 🚀

## Local development with Vite

To begin development with Vite's dev server & HMR, run:

```shell
make dev
```

This command will:

1. Copy your local SSH keys into the container (handy if you are setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/))
2. Start your DDEV project
3. Install Composer
4. Install npm
5. Do a one-time build of Vite
6. Spin up the Vite dev server

Open up a browser to your project domain to verify that Vite is connected. Begin crafting beautiful things. 

## Makefile

A Makefile has been included to provide a unified CLI for common development commands.

- `make install` - Runs a complete one-time process to set the project up and install Craft.
- `make up` - Starts the DDEV project, ensuring that SSH keys have been added, and npm & Composer have been installed.
- `make dev` - Runs a one-time build of all front-end assets, then starts Vite's server for HMR.
- `make build` - Builds all front-end assets.
- `make pull` - Pull remote db & assets (requires setting up [craft-scripts](https://github.com/nystudio107/craft-scripts/)

<span style="color:red">**IMPORTANT NOTE - Before you run the install process make sure to copy your .npmrc file into the project, otherwise the npm installstep will fail because it tries to installGSAP's paid suite and it requires authentication.**</span>


## Craft CMS Plugins

1. [Blitz](https://plugins.craftcms.com/blitz)
1. [Button Box](https://plugins.craftcms.com/buttonbox)
1. [CK Editor](https://plugins.craftcms.com/ckeditor)
1. [Colour Swatches](https://plugins.craftcms.com/colour-swatches)
1. [Color Mixer](https://plugins.craftcms.com/craft-color-mixer)
1. [Default Dashboard](https://plugins.craftcms.com/default-dashboard)
1. [Element Index Defaults](https://plugins.craftcms.com/element-index-defaults)
1. [Embedded Assets](https://plugins.craftcms.com/embeddedassets)
1. [Expanded Singles](https://plugins.craftcms.com/expanded-singles)
1. [Feed-Me](https://plugins.craftcms.com/feed-me)
1. [Field Manager](https://plugins.craftcms.com/field-manager)
1. [Formie](https://plugins.craftcms.com/formie)
1. [Hyper](https://plugins.craftcms.com/hyper)
1. [Icon Picker](https://plugins.craftcms.com/icon-picker)
1. [Imager-X](https://plugins.craftcms.com/imager-x)
1. [Imager-X Power Pack](https://plugins.craftcms.com/imager-x-power-pack)
1. [Knock Knock](https://plugins.craftcms.com/knock-knock)
1. [Minify](https://plugins.craftcms.com/minify)
1. [Navigation](https://plugins.craftcms.com/navigation)
1. [Postmark](https://plugins.craftcms.com/postmark)
1. [Retcon](https://plugins.craftcms.com/retcon)
1. [Section and Product Type](https://plugins.craftcms.com/section-and-product-type)
1. [Seomatic](https://nystudio107.com/docs/seomatic/)
1. [Servd Assets and Helpers](https://github.com/servdhost/craft-asset-storage)
1. [Shortcodes](https://plugins.craftcms.com/shortcodes)
1. [Social Share](https://plugins.craftcms.com/social-share)
1. [Table Maker](https://plugins.craftcms.com/tablemaker)
1. [Typogrify](https://plugins.craftcms.com/typogrify)
1. [Vite](https://github.com/nystudio107/craft-vite)

## Tailwind Plugins

1. [Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)
1. [Container Queries](https://github.com/tailwindlabs/tailwindcss-container-queries)
1. [Line Clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
1. [Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Javascript Libraries

1. [AlpineJS](https://alpinejs.dev/)
1. [Lazysizes](https://afarkas.github.io/lazysizes/)

## Acknowledgments

This project is based upon the work of a lot of people including the entire team at Craft CMS, Andrew Welch of NY Studio 107, Ryan Irelan of CraftQuest, the team at One Darnley Road and others. A big thank you to all of you for the work you have done and the fact that you are so willing to share it with the community. I could not have gotten this done without the insights and examples you have all provided. I also want to thank the team at TILT for their ongoing support and dedication to making great sites. My thanks to you all!
