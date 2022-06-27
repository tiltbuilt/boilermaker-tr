# Tilt - BoilerMaker-TR 

This is a starter Craft CMS v4.X setup for site built by Tilt. It is opinionated in the sense that it is configured to make use of the following stack:
* Laravel Valet as the local dev server
* Laravel Mix for handling of webpack
* SASS/PostCSS for CSS processing
* Jquery for Javascript

## Installation Instructions

**ONLY DO THIS IF YOU ARE CREATING A NEW PROJECT** You only need to install the boilerplate if you are the one initiating the build process on a project. If you aren't, whoever did initiate it should have created a repository on Tilt's GitHub account for the new site. Simply clone that repository and then create a blank database and run the `composer update` command from inside the project folder, followed by the the `./craft install` command.

### Download Files

First you need to run the command to download the package files. Open the terminal and go to the folder where you keep all of your sites in Valet. Once there, run the following command:

`composer create-project tiltbuilt/boilermaker-tr my/project/path`

Where the project path part is replaced with the name of the folder for the project you are creating (usually the name of the client website, all lower case, no spaces. hyphens and underscores are allowed). Once you have download the files from the repository, you need to have Composer run an update to make sure that it installs all the necessary plugins, etc. before you install Craft so that the project config will remain intact. To do this, run the `composer update` command in the terminal while in the project folder.

### Edit .env File

Once all of the files have copied down, you need to edit the .env file inside the project folder. Open the file in a text editor. You will need to change the following lines:

#### Database Settings
```
DB_DATABASE=
DB_USER=root
DB_PASSWORD=
DB_TABLE_PREFIX=
```

**DB_DATABASE** is the name of the database itself. You need to set that up using the database manager of your choice.

**DB_USER** is the name of the database user. On Valet it is usually root, but it doesn't have to be.

**DB_PASSWORD** is the password for the database user.

**DB_TABLE_PREFIX** is the prefix Craft will attach to the database tables it creates when it installs. This is optional, but I usually set it to some abbreviation of the project name (i.e. MMR)

#### Application Settings
```
APP_ID=CraftCMS-
SECURITY_KEY=
```

**APP_ID** Is a unique identifier used by the site for caching purposes. It typically starts with CraftCMS- and then a unique random string of characters. I typically go to [1Password's Password Generator](https://1password.com/password-generator/) and have it generator a random character string 30 characters in length and then add that after the CraftCMS-.

**SECURITY_KEY** is a unique character string used as the encryption key for encrypting the site. I typically go to [1Password's Password Generator](https://1password.com/password-generator/) and have it generator a random character string 40 characters in length.

#### Site Settings
```
SITE_NAME="Website"
SITE_EMAIL="webbies@tiltbuilt.com"
SITE_URL="http://website.test/"
SITE_PATH="/path/to/root/"
DEV_HOST="website.test"
```

**SITE_NAME** Is the human-friendly name of the website (usually the name of the client company).

**SITE_EMAIL** Is the email address the site will use to send its messages. For local dev it is the Tilt webiies address. For production it is the email address the client wants to use for the site.

**SITE_URL** Is url for the site. For local development on Valet this will typically be website-name.test. Just replace website in the default text with the folder name for the project.

**SITE_PATH** Is the full path to the project root folder (i.e. /Users/Brian/WebDev/sites/boilermaker-tr/). This will vary depending on where you put your Valet files on your hard drive.

**DEV_HOST** Is the site url without the http://. It is used by Laravel Mix to load the correct url for Browsersync. It is only needed for local development and should be removed in the production .env file.

#### SMTP Settings

These variables are included in order to use SMTP for handling the site's email.

#### Asset Settings

These variables are the urls and paths to the asset volumes for the site. Three are created to start with (images, docs, and videos). There are url and path variables for each. If you wish to change the names of the folders themselves, make sure to adjust the names here as well as at the folders themselves. Additional volumes can also be added, but adjustments they will need to be entered correctly into the CP in order for the project config to be correct.

#### IMGIX Settings

These variables hold the credentials needed for using ImgIX for image processing. This should be configured, particularly for production environments.


### Run Craft Installation

Once the .env files has been set properly, you should run the `./craft install` command from inside the project folder in the terminal. This will run the Craft CMS installer and it will ask you questions to set up your user account. It will use the project config to set up all of the fields etc. for the boilerplate setup.


### Create new Git Repo for Project

**ONLY DO THIS IF YOU ARE CREATING A NEW PROJECT** Once you have finished installing the boilerplate. You need to create a new local git repository for your project (if you are starting a new site, if you are working on an existing site or if someone else on the team has already set up a repo for a project, clone the repo that should already exist for the site). 


### Install Javascript Dependencies

Finally you need to install all of the javascript dependencies on the project to be able to start working on the site. To do this, assuming you are running npm, run the `npm install` command from the project folder and it npm will install everything specified in the package.json file.


