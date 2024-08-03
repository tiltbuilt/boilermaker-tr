.PHONY: build dev pull up install

build: up
	ddev exec npm run build
dev: build
	ddev exec npm run serve
pull: up
	#ddev exec php craft servd-asset-storage/local/pull-database --from=production --interactive=0
	ddev composer install
install: up build
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft plugin/install blitz
	ddev exec php craft plugin/install buttonbox
	ddev exec php craft plugin/install ckeditor
	ddev exec php craft plugin/install colour-swatches
	ddev exec php craft plugin/install craft-color-mixer
	ddev exec php craft plugin/install default-dashboard
	ddev exec php craft plugin/install element-index-defaults
	ddev exec php craft plugin/install embeddedassets
	ddev exec php craft plugin/install expanded-singles
	ddev exec php craft plugin/install feed-me
	ddev exec php craft plugin/install field-manager	
	ddev exec php craft plugin/install formie
	ddev exec php craft plugin/install hyper
	ddev exec php craft plugin/install icon-picker
	ddev exec php craft plugin/install imager-x
	ddev exec php craft plugin/install imager-x-power-pack
	ddev exec php craft plugin/install knock-knock
	ddev exec php craft plugin/install minify
	ddev exec php craft plugin/install navigation
	ddev exec php craft plugin/install postmark
	ddev exec php craft plugin/install retcon
	ddev exec php craft plugin/install section-and-product-type
	ddev exec php craft plugin/install seomatic
	ddev exec php craft plugin/install servd-asset-storage
	ddev exec php craft plugin/install shortcodes
	ddev exec php craft plugin/install social-share
	ddev exec php craft plugin/install tablemaker
	ddev exec php craft plugin/install typogrify
	ddev exec php craft plugin/install vite
up:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
		ddev auth ssh; \
		ddev start; \
	fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line