import 'owl.carousel/dist/assets/owl.carousel.css';
import './app-base.scss';
import './app-components.scss';
import './app-utilities.scss';
import 'owl.carousel';
import 'lazysizes';
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const YTPlayer = require('yt-player');

$(document).ready(function() {
	
	console.log('running!');
	
	/* REGISTER GSAP PLUGINS */
	
	gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);
	
	/* ACCORDION BEHAVIOR */
	
	function accordionFunction(toggleFunction, acc, btn, pnl) {	
		console.log(toggleFunction);
		console.log(acc);
		console.log(btn);
		console.log(pnl);
		var accordion, button, panel;
		/* grab dom elements based on ids */
		accordion = $(acc);
		button = $(btn); /* button id doesn't have hash in it as passed */
		panel = $(pnl);
		
		/* check toggleFunction to see if opening or closing */
		
		if (toggleFunction == 1) {
			console.log('opening');
			accordion.addClass('expanded');
			button.addClass('expanded');
			button.attr('aria-expanded', 'true');
			panel.addClass('expanded');		
		} else {
			console.log('closing');
			accordion.removeClass('expanded');
			button.removeClass('expanded');
			button.attr('aria-expanded', 'false');
			panel.removeClass('expanded');
		}
	}
	
	$('.accordion .accordion-button').click(function() {		
		var mySet, myAcc, myTarget, myId;
		myAcc = '#' + ($(this).parent('h1,h2,h3,h4,h5,h6').parent('.accordion').attr('id')); /* id of the accordion the clicked button is in */
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
				closeAcc = '#' + ($(mySet + ' > .accordion.expanded').attr('id'));
				closeBtn = '#' + ($(mySet + ' > .accordion.expanded .accordion-button').attr('id'));
				closePnl = '#' + ($(mySet + ' > .accordion.expanded .accordion-panel').attr('id'));
				accordionFunction(0, closeAcc, closeBtn, closePnl); /* close currently open panel because set doesn't allow multiple opens */
				accordionFunction(1, myAcc, myId, myTarget); /* open the accordion where the button was clicked */
			} else {
				accordionFunction(1, myAcc, myId, myTarget); /* open the accordion where the button was clicked */
			}		
		}
	});
	
	
	/* TABSET BEHAVIORS */
	
	$('.tab-button').click(function() {
		console.log('click!');
		if (!($(this).hasClass('active-tab'))) {
			var prevPanel, myTabSet, myPanel;
			myTabSet = $(this).data('parent');
			prevPanel = $(myTabSet + ' .tabPanel.active-tab');
			myPanel = $(this).data('target');		
			//$(myTabSet + ' .tabPanel.prev-tab').removeClass('prev-tab');
			$(myTabSet + ' .tab-button.active-tab').removeClass('active-tab');
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
					realted: false
				});
				youtubePlayer.load(youtubeVideoId, true);
			});
			$parent.addClass('block-video_-playing');
		}
	});
	
	
	/* SLIDER SETUP AND FUNCTIONALITY */
	
	
	$('.sliderSet').each(function() {
		var autoplaysetting = false;
		var timingsetting, dotvalue, owl;
		owl = $(this).children('.owl-carousel');
		timingsetting = $(this).data('timing');
		if ($(this).data('autoplay') == '1') {
			autoplaysetting = true;
		}
		if (($(this).data('controls') == 'dots') || ($(this).data('controls') == 'both')) {
			dotvalue = true;
		} else {
			dotvalue = false;
		}
		owl.owlCarousel({
			loop: true,
			items: 1,
			dots: dotvalue,
			autoplay: autoplaysetting,
			autoplayTimeout: timingsetting,
			lazyLoad: true,
			lazyLoadEager: 2
		});		
	});
	
	$('.owl-prev').click(function() {
		var mytarget = $(this).data('target');
		$(mytarget).trigger('prev.owl.carousel');
	});
	
	$('.owl-next').click(function() {
		var mytarget = $(this).data('target');
		$(mytarget).trigger('next.owl.carousel');
	});
});
