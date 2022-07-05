// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import './app-base.pcss';
import './app-components.pcss';
import './app-utilities.pcss';
import $ from 'jquery';
import 'lazysizes';
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as YTPlayer from 'yt-player';


window.$ = window.jQuery = $;
var duration = duration || 1; // Default animation speed

$(document).ready(function() {	
	
	
	/* REGISTER GSAP PLUGINS */
	
	gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);
	
	
	/* REVEAL ANIMATIONS */
	
	// collect parent triggered reveals
	var fadeIns = gsap.utils.toArray('.elem-block > .anim-elem.fade-in, .elem-block > .anim-parent.fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.fade-in > .inner .anim-pass > .elem-block > .anim-child');
		
	var slideUps = gsap.utils.toArray('.elem-block > .anim-elem.slide-up-fade-in, .elem-block > .anim-parent.slide-up-fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-up-fade-in > .inner .anim-pass > .elem-block > .anim-child');
	
	var slideDowns = gsap.utils.toArray('.elem-block > .anim-elem.slide-down-fade-in, .elem-block > .anim-parent.slide-down-fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-down-fade-in > .inner .anim-pass > .elem-block > .anim-child');
	
	var slideLefts = gsap.utils.toArray('.elem-block > .anim-elem.slide-left-fade-in, .elem-block > .anim-parent.slide-left-fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-left-fade-in > .inner .anim-pass > .elem-block > .anim-child');
	
	var slideRights = gsap.utils.toArray('.elem-block > .anim-elem.slide-right-fade-in, .elem-block > .anim-parent.slide-right-fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-right-fade-in > .inner .anim-pass > .elem-block > .anim-child');
	
	var scaleDowns = gsap.utils.toArray('.elem-block > .anim-elem.scale-down-fade-in, .elem-block > .anim-parent.scale-down-fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.scale-down-fade-in > .inner .anim-pass > .elem-block > .anim-child');
	
	var scaleUps = gsap.utils.toArray('.elem-block > .anim-elem.scale-up-fade-in, .elem-block > .anim-parent.scale-up-fade-in > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.scale-up-fade-in > .inner .anim-pass > .elem-block > .anim-child');	
	
	
	// collect parent triggered reveals with staggering
	
	var fadeInsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
		
	var slideUpsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.slide-up-fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-up-fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
	
	var slideDownsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.slide-down-fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-down-fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
	
	var slideLeftsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.slide-left-fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-left-fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
	
	var slideRightsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.slide-right-fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.slide-right-fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
	
	var scaleDownsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.scale-down-fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.scale-down-fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
	
	var scaleUpsSubsStagger = gsap.utils.toArray('.elem-block > .anim-parent.scale-up-fade-in-stagger > .inner > .elem-block > .anim-child, .elem-block > .anim-parent.scale-up-fade-in-stagger > .inner .anim-pass > .elem-block > .anim-child');
	
	
	// set initial animation states for reveal elements
	
	fadeIns.forEach(aniItem => {
		gsap.set(aniItem,{	
			opacity: 0
		});
	});
	
	fadeInsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			opacity: 0
		});
	});
	
	
	slideUps.forEach(aniItem => {
		gsap.set(aniItem,{	
			y: 50,
			opacity: 0
		});
	});
	
	slideUpsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			y: 50,
			opacity: 0
		});
	});
	
	slideDowns.forEach(aniItem => {
		gsap.set(aniItem,{	
			y: 50,
			opacity: 0
		});
	});
	
	slideDownsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			y: -50,
			opacity: 0
		});
	});
	
	slideLefts.forEach(aniItem => {
		gsap.set(aniItem,{	
			x: 50,
			opacity: 0
		});
	});
	
	slideLeftsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			x: 50,
			opacity: 0
		});
	});
	
	slideRights.forEach(aniItem => {
		gsap.set(aniItem,{	
			x: -50,
			opacity: 0
		});
	});
	
	slideRightsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			x: -50,
			opacity: 0
		});
	});
	
	scaleDowns.forEach(aniItem => {
		gsap.set(aniItem,{	
			scale: 1.2,
			opacity: 0
		});
	});
	
	scaleDownsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			scale: 1.2,
			opacity: 0
		});
	});
	
	scaleUps.forEach(aniItem => {
		gsap.set(aniItem,{	
			scale: 0.8,
			opacity: 0
		});
	});
	
	scaleUpsSubsStagger.forEach(aniItem => {
		gsap.set(aniItem,{	
			scale: 0.8,
			opacity: 0
		});
	});
	
	//Animation Function
	
	
	function addReveals() {				
		
		// Fade Ins
		
		fadeIns.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,			
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(fadeInsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 			
				opacity: 0,			
			},{
				duration: duration * 1.5,		
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});
		
		
		// Slide Ups
		
		slideUps.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,
				y: 0,
				force3D: true,
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(slideUpsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 
				y: 50,
				opacity: 0,
				force3D: true,
			},{
				duration: duration * 1.5,
				y: 0,
				force3D: true,
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});	
		
		
		// Slide Downs
		
		slideDowns.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,
				y: 0,
				force3D: true,
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(slideDownsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 
				y: -50,
				opacity: 0,
				force3D: true,
			},{
				duration: duration * 1.5,
				y: 0,
				force3D: true,
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});
		
		
		// Slide Lefts
		
		slideLefts.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,
				x: 0,
				force3D: true,
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(slideLeftsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 
				x: 50,
				opacity: 0,
				force3D: true,
			},{
				duration: duration * 1.5,
				x: 0,
				force3D: true,
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});
		
		
		// Slide Rights
		
		slideRights.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,
				x: 0,
				force3D: true,
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(slideRightsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 
				x: -50,
				opacity: 0,
				force3D: true,
			},{
				duration: duration * 1.5,
				x: 0,
				force3D: true,
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});
		
		// Scale Downs
		
		scaleDowns.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,
				scale: 1,
				force3D: true,
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(scaleDownsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 
				scale: 1.2,
				opacity: 0,
				force3D: true,
			},{
				duration: duration * 1.5,
				scale: 1,
				force3D: true,
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});	
		
		// Scale Ups
		
		scaleUps.forEach(aniItem => {
			
			gsap.to(aniItem, { 			
				duration: duration * 1.5,
				scale: 1,
				force3D: true,
				opacity: 1,			
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete: postRevealFunction,
				onCompleteParams: [aniItem],			
				scrollTrigger: {
					trigger: aniItem,
					start: "top 95%",
				}			
			})
		});	
		
		
		ScrollTrigger.batch(scaleUpsSubsStagger, {
			onEnter: batch => gsap.fromTo(batch, 
			{ 
				scale: 0.8,
				opacity: 0,
				force3D: true,
			},{
				duration: duration * 1.5,
				scale: 1,
				force3D: true,
				opacity: 1,
				// Note: Easing Pack required for easing
				ease: "expo.out",
				onComplete() {
					for (let i = 0; i < this._targets.length - 1 ; i++) {
						postRevealFunction(this._targets[i]);
					}
				},
				stagger: 0.15			
			}),
			start: "top 95%",
			once: true
		});		
	}
	
	/* POST REVEAL FUNCTIONS */
		
	function postRevealFunction(el) {		
		console.log(el);
	}
	
	
	/* MODAL BEHAVIORS */
	
	var modalOpenTL = gsap.timeline({repeat: 0, paused: true});
	modalOpenTL.fromTo("#modal-overlay", {opacity: 0}, {duration: 0.5, ease: "power1.out", opacity: 1});
	modalOpenTL.fromTo("#modal", {opacity: 0, y: 100}, {duration: 0.5, ease: "power1.out", opacity: 1, y: 0});
	
	var modalCloseTL = gsap.timeline({repeat: 0, paused: true, onComplete: clearModal});
	modalCloseTL.fromTo("#modal-overlay", {opacity: 1}, {duration: 0.5, ease: "power1.out", opacity: 0});
	
	var focusable_selectors = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
	
	function clearModal() {
		$('#modal, #modal-overlay').addClass('closed');	
		$('body').removeClass('modal-active');
		$('#modal-content').html('');
		
		//accessibility features - restore states prior to modal open				
		$('#page-wrapper').find(focusable_selectors).removeAttr('tabindex');
		$('#page-wrapper').removeAttr('aria-hidden');	
		$('#modal').attr('aria-hidden', 'true');
		//set focus to element that triggered modal if it was a button
		var focusTarget = '#' + $('#modal').data('trigger-el');
		console.log(focusTarget);
		$(focusTarget).focus();
		$('#modal').removeAttr('data-trigger-el');				
	}
	
	function showModal(whichModal, triggerEl) {			
		console.log(whichModal);
		//show modal
		$('body').addClass('modal-active');
		$('#modal, #modal-overlay').removeClass('closed');
		//set data attribute with triggering element if there is one to set focus to on close of modal
		if (triggerEl) {
			$('#modal').attr('data-trigger-el', triggerEl);
		}		
		//load content			
		$('#modal-content').load(whichModal, function() {
			var contentHeight = ($('#modal-content-inner-wrapper').innerHeight()) + ($('#modal-title').innerHeight());
			console.log(contentHeight);			
			var modalHeight = (45 + contentHeight) + 'px';
			$('#modal').css('height', modalHeight);
		});			
		modalOpenTL.play(0);
		
		//accessibility features - focus on modal header, trap focus inside modal until closed		
		$('#modal-title').focus();		
		$('#page-wrapper').find(focusable_selectors).attr('tabindex', '-1');
		$('#page-wrapper').attr('aria-hidden', 'true');	
		$('#modal').attr('aria-hidden', 'false');	
	}	
	
	function closeModal() {		
		modalCloseTL.play(0);	
	}
	
	$('#modal-overlay, #btn-modal-close').click(function() {
		closeModal();
	});
	
	$('#modal').click(function(event) {
		event.stopImmediatePropagation();
	});
	
	$('.btn-modal').click(function(e) {
		e.preventDefault();
		var btnId = $(this).attr('id');
		var btnTarget = $(this).data('modal-target');
		showModal(btnTarget, btnId);
	});
	
	/* LOADER FUNCTIONALITY */
		
	function turnoffloader() {
		$('body').addClass('pageloaded');
		addReveals();
		if ($('body').hasClass('load-modal')) {
			var modalUrl = $('body').data('load-modal');
			showModal(modalUrl);
		}
	}
	
	
	/* DO THE THINGS IF NOT IN LIVE PREVIEW IN CONTROL PANEL */
	
	if (!($('body').hasClass('ispreview'))) {
		
		/* GET LOGIN STATUS AND POPULATE CLOGIN BAR IF LOGGED IN */
		
		$("#login-status-bar-wrapper").load("/resources/loginbar");		
				
		var loadAnim = gsap.to("#loader", {duration: 0.5, ease: "power1.out", opacity: 0, paused: true, onComplete:turnoffloader});
		loadAnim.play();			
	}
				
	
	/* ACCORDION BEHAVIOR */
	
	function accordionFunction(toggleFunction, acc, btn, pnl) {		
		var accordion, button, panel;
		/* grab dom elements based on ids */
		accordion = $(acc);
		button = $(btn); /* button id doesn't have hash in it as passed */
		panel = $(pnl);
		
		/* check toggleFunction to see if opening or closing */
		
		if (toggleFunction == 1) {			
			accordion.addClass('expanded');
			var accInner = accordion.find('.accordion-inner');			
			button.addClass('expanded');
			button.attr('aria-expanded', 'true');
			panel.addClass('expanded');
			panel.height(accInner[0].scrollHeight);		
		} else {			
			accordion.removeClass('expanded');
			button.removeClass('expanded');
			button.attr('aria-expanded', 'false');
			panel.removeClass('expanded');
			panel.height(0);
		}
	}
	
	$('.accordion .btn-accordion').click(function() {		
		var mySet, myAcc, myTarget, myId;
		myAcc = '#' + ($(this).parent('.accordion-button-header').parent('.inner').parent('.anim-wrapper').parent('.accordion').attr('id')); /* id of the accordion the clicked button is in */
		myId = '#' + ($(this).attr('id')); /* the id of the button that was clicked */
		myTarget = $(this).data('target'); /* the id of the panel that is triggered by the button */
		mySet = $(this).data('parent'); /* the id of the set containing the accordion if there is one */
		if ($(this).hasClass('expanded')) {
			/* call accordionFunction to close the clicked occordion since it is already open */
			accordionFunction(0, myAcc, myId, myTarget);
		} else {		
			/* check to see if accordion is part of a set and allows multiple opens or not */		
			if (mySet != undefined && $(mySet).hasClass('accordionSetSingleOpen')) { 				
				var closeAcc, closeBtn, closePnl;
				closeAcc = '#' + ($(mySet + ' .accordion.expanded').attr('id'));
				closeBtn = '#' + ($(mySet + ' .accordion.expanded .btn-accordion').attr('id'));
				closePnl = '#' + ($(mySet + ' .accordion.expanded .accordion-panel').attr('id'));				
				accordionFunction(0, closeAcc, closeBtn, closePnl); /* close currently open panel because set doesn't allow multiple opens */
				accordionFunction(1, myAcc, myId, myTarget); /* open the accordion where the button was clicked */
			} else {
				accordionFunction(1, myAcc, myId, myTarget); /* open the accordion where the button was clicked */
			}		
		}
	});
	
	
	/* TABSET BEHAVIORS */
	
	$('.btn-tab').click(function() {		
		if (!($(this).hasClass('active-tab'))) {
			var prevPanel, myTabSet, myPanel;
			myTabSet = $(this).data('parent');
			prevPanel = $(myTabSet + ' .tabPanel.active-tab');
			myPanel = $(this).data('target');		
			//$(myTabSet + ' .tabPanel.prev-tab').removeClass('prev-tab');
			$(myTabSet + ' .btn-tab.active-tab').removeClass('active-tab');
			prevPanel.removeClass('active-tab').addClass('prev-tab');
			prevPanel.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
			function() {	
				prevPanel.removeClass('prev-tab');	
			});
			$(this).addClass('active-tab');
			$(myPanel).addClass('active-tab');
		}
	});
	
	
	/* CONTENT VIDEO HANDLING */
	
	$(document).on('click', '.video-play-btn', function() {
		var $parent = $(this).closest('.contentVideo'),
		fadeOutSelector = '#' + $parent.attr('id') + ' .video-play-btn, ' + '#' + $parent.attr('id') + ' .video-image',
		fadeInSelector = '#' + $parent.attr('id') + ' .video-player',
		$contentToFadeOut = $(fadeOutSelector),
		$contentToFadeIn = $(fadeInSelector),
		videoSelector,
		$video,
		youtubePlayer,
		youtubeVideoId,
		dur = 1,
		tm;
	
		if(!$parent.hasClass('block-video_-playing')) {
			tm = new gsap.timeline();
		
			// $poster = $parent.find('.blc-vid__poster').first();
			videoSelector = fadeInSelector + ' > .video';
			$video = $(videoSelector);
		
			youtubeVideoId = $video.data('youtube-id');
		
			tm.fromTo($contentToFadeIn, dur,
				{
					opacity: 0
				},
				{
					opacity: 1,
					ease: "sine"			
				}
			).fromTo($contentToFadeOut, 2,
				{
					opacity: 1
				},
				{
					opacity: 0,
					ease: "sine",
					onComplete: function() {
						$(fadeOutSelector).css("z-index","-1");
					}
				},
				'-=' + dur
			).add(function() {
				youtubePlayer = new YTPlayer('#vid-' + youtubeVideoId, {
					width: '640',
					height: '360',
					related: false
				});
				youtubePlayer.load(youtubeVideoId, true);
			});
			$parent.addClass('block-video_-playing');
		}
	});
	
	
	/* SLIDER SETUP AND FUNCTIONALITY */
	
	
	$('.sliderSet').each(function() {		
		var timingsetting, swiperEl, swiperOptions;
		swiperEl = '#' + $(this).find('.swiper').attr('id');		
		timingsetting = $(this).data('timing');		
		
		swiperOptions = {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: true,									
		};
		
		if ($(this).data('autoplay') == '1') {
			swiperOptions.autoplay = {
				delay: timingsetting,
				disableOnInteraction: false,
				speed: 600,
			}
		}
		
		if ($(this).data('effect') == 'fade') {
			swiperOptions.effect = 'fade';
			swiperOptions.fadeEffect = {
				crossFade: true
			}
		} 
		
		if (($(this).data('controls') == 'dots') || ($(this).data('controls') == 'both')) {
			swiperOptions.pagination = {
				el: '.swiper-pagination',
				clickable: true
			}
		}
		if (($(this).data('controls') == 'buttons') || ($(this).data('controls') == 'both')) {
			swiperOptions.navigation = {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}
		
		const mySwiper = new Swiper(swiperEl, swiperOptions);
		mySwiper.init();
		
				
	});
	
	/* FIX FORMS TO WORK WITH BLITZ CACHE BY DYNAMICALLY RESETTING CSRF TOKENS AND HASH VALUES */
	
	$( "form" ).each(function() {
		var form = $(this);
		var formhandle = form.data('handle');
		
		$.ajax({
			// Specify the form handle in the GET parameters
			// ! Make sure to change the `myFormHandle` to your specific form handle.
			url: '/resources/formfixer?form=' + formhandle,
			type: 'get',
			dataType: 'json',
			success: function (response) {				
				// Update the Form Hash
				form.children('input[name=formHash]').val(response.hash);
		
				// Update the JS Honeypot (ONLY when JS Enhancement setting is ON)
				
				var honeypot = response.honeypot;
				var honeypotInput = form.children('input[name^="freeform_form_handle"]');
				honeypotInput.attr('id', honeypot.name);
				honeypotInput.attr('name', honeypot.name);
				honeypotInput.val(honeypot.hash);
		
				// Locate and update the CSRF input
				var csrf = response.csrf;
				form.children('input[name=' + csrf.name + ']').val(csrf.value);
				
			},
		});
	});
	

	/* FIX ERROR DISPLAY ON NEWSLETTER FORM */
	
	document.addEventListener("freeform-render-field-errors", function (event) {
		// Stop the default field error rendering
		if (event.form.id == 'newsletter-form') {
			event.preventDefault();
		
			var form = event.form;		
			var errors = event.errors;	
			
			var errorEl = document.createElement('div');
			errorEl.className = 'ff-errors';
			
			for (var fieldHandle in errors) {
				errorEl.appendChild(document.createTextNode(errors[fieldHandle]));
			}
			
			form.appendChild(errorEl);
		}		
	});
		
});
