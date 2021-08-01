import $ from 'jquery';
import 'owl.carousel';
import 'lazysizes';
import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as YTPlayer from 'yt-player';


window.$ = window.jQuery = $;
var duration = duration || 1; // Default animation speed

/* REVEAL ANIMATIONS */

// collect parent triggered reveals
var fadeIns = gsap.utils.toArray('.fadeIn, .repeater.fadeInSubs .repeater-list-item, .container2Column.fadeInSubs .columnHalf, .containerWithSidebar.fadeInSubs .columnMain, .containerWithSidebar.fadeInSubs .columnSidebar, .row.fadeInSubs > .column, .accordionSet.fadeInSubs > .accordion, .buttonGroup.fadeInSubs .btn, .header.fadeInSubs .header-subhead, .header.fadeInSubs .header-mainHeading, .header.fadeInSubs .header-content, .header.fadeInSubs .btn, .cta.fadeInSubs .cta-image-wrapper, .cta.fadeInSubs .cta-block-header-subhead, cta.fadeInSubs .cta-block-heading, .cta.fadeInSubs .content, .cta.fadeInSubs .btn, .form.fadeInSubs .freeform-row')
var slideUps = gsap.utils.toArray('.slideUpAndFadeIn, .repeater.slideUpAndFadeInSubs .repeater-list-item, .container2Column.slideUpAndFadeInSubs .columnHalf, .containerWithSidebar.slideUpAndFadeInSubs .columnMain, .containerWithSidebar.slideUpAndFadeInSubs .columnSidebar, .row.slideUpAndFadeInSubs > .column, .accordionSet.slideUpAndFadeInSubs > .accordion, .buttonGroup.slideUpAndFadeInSubs .btn, .header.slideUpAndFadeInSubs .header-subhead, .header.slideUpAndFadeInSubs .header-mainHeading, .header.slideUpAndFadeInSubs .header-content, .header.slideUpAndFadeInSubs .btn, .cta.slideUpAndFadeInSubs .cta-image-wrapper, .cta.slideUpAndFadeInSubs .cta-block-header-subhead, cta.slideUpAndFadeInSubs .cta-block-heading, .cta.slideUpAndFadeInSubs .content, .cta.slideUpAndFadeInSubs .btn, .form.slideUpAndFadeInSubs .freeform-row');
var slideDowns = gsap.utils.toArray('.slideDownAndFadeIn, .repeater.slideDownAndFadeInSubs .repeater-list-item, .container2Column.slideDownAndFadeInSubs .columnHalf, .containerWithSidebar.slideDownAndFadeInSubs .columnMain, .containerWithSidebar.slideDownAndFadeInSubs .columnSidebar, .row.slideDownAndFadeInSubs > .column, .accordionSet.slideDownAndFadeInSubs > .accordion, .buttonGroup.slideDownAndFadeInSubs .btn, .header.slideDownAndFadeInSubs .header-subhead, .header.slideDownAndFadeInSubs .header-mainHeading, .header.slideDownAndFadeInSubs .header-content, .header.slideDownAndFadeInSubs .btn, .cta.slideDownAndFadeInSubs .cta-image-wrapper, .cta.slideDownAndFadeInSubs .cta-block-header-subhead, cta.slideDownAndFadeInSubs .cta-block-heading, .cta.slideDownAndFadeInSubs .content, .cta.slideDownAndFadeInSubs .btn, .form.slideDownAndFadeInSubs .freeform-row');
var slideLefts = gsap.utils.toArray('.slideLeftAndFadeIn, .repeater.slideLeftAndFadeInSubs .repeater-list-item, .container2Column.slideLeftAndFadeInSubs .columnHalf, .containerWithSidebar.slideLeftAndFadeInSubs .columnMain, .containerWithSidebar.slideLeftAndFadeInSubs .columnSidebar, .row.slideLeftAndFadeInSubs > .column, .accordionSet.slideLeftAndFadeInSubs > .accordion, .buttonGroup.slideLeftAndFadeInSubs .btn, .header.slideLeftAndFadeInSubs .header-subhead, .header.slideLeftAndFadeInSubs .header-mainHeading, .header.slideLeftAndFadeInSubs .header-content, .header.slideLeftAndFadeInSubs .btn, .cta.slideLeftAndFadeInSubs .cta-image-wrapper, .cta.slideLeftAndFadeInSubs .cta-block-header-subhead, cta.slideLeftAndFadeInSubs .cta-block-heading, .cta.slideLeftAndFadeInSubs .content, .cta.slideLeftAndFadeInSubs .btn, .form.slideLeftAndFadeInSubs .freeform-row');
var slideRights = gsap.utils.toArray('.slideRightAndFadeIn, .repeater.slideRightAndFadeInSubs .repeater-list-item, .container2Column.slideRightAndFadeInSubs .columnHalf, .containerWithSidebar.slideRightAndFadeInSubs .columnMain, .containerWithSidebar.slideRightAndFadeInSubs .columnSidebar, .row.slideRightAndFadeInSubs > .column, .accordionSet.slideRightAndFadeInSubs > .accordion, .buttonGroup.slideRightAndFadeInSubs .btn, .header.slideRightAndFadeInSubs .header-subhead, .header.slideRightAndFadeInSubs .header-mainHeading, .header.slideRightAndFadeInSubs .header-content, .header.slideRightAndFadeInSubs .btn, .cta.slideRightAndFadeInSubs .cta-image-wrapper, .cta.slideRightAndFadeInSubs .cta-block-header-subhead, cta.slideRightAndFadeInSubs .cta-block-heading, .cta.slideRightAndFadeInSubs .content, .cta.slideRightAndFadeInSubs .btn, .form.slideRightAndFadeInSubs .freeform-row');
var scaleDowns = gsap.utils.toArray('.scaleDownAndFadeIn, .repeater.scaleDownAndFadeInSubs .repeater-list-item, .container2Column.scaleDownAndFadeInSubs .columnHalf, .containerWithSidebar.scaleDownAndFadeInSubs .columnMain, .containerWithSidebar.scaleDownAndFadeInSubs .columnSidebar, .row.scaleDownAndFadeInSubs > .column, .accordionSet.scaleDownAndFadeInSubs > .accordion, .buttonGroup.scaleDownAndFadeInSubs .btn, .header.scaleDownAndFadeInSubs .header-subhead, .header.scaleDownAndFadeInSubs .header-mainHeading, .header.scaleDownAndFadeInSubs .header-content, .header.scaleDownAndFadeInSubs .btn, .cta.scaleDownAndFadeInSubs .cta-image-wrapper, .cta.scaleDownAndFadeInSubs .cta-block-header-subhead, cta.scaleDownAndFadeInSubs .cta-block-heading, .cta.scaleDownAndFadeInSubs .content, .cta.scaleDownAndFadeInSubs .btn, .form.scaleDownAndFadeInSubs .freeform-row');
var scaleUps = gsap.utils.toArray('.scaleUpAndFadeIn, .repeater.scaleUpAndFadeInSubs .repeater-list-item, .container2Column.scaleUpAndFadeInSubs .columnHalf, .containerWithSidebar.scaleUpAndFadeInSubs .columnMain, .containerWithSidebar.scaleUpAndFadeInSubs .columnSidebar, .row.scaleUpAndFadeInSubs > .column, .accordionSet.scaleUpAndFadeInSubs > .accordion, .buttonGroup.scaleUpAndFadeInSubs .btn, .header.scaleUpAndFadeInSubs .header-subhead, .header.scaleUpAndFadeInSubs .header-mainHeading, .header.scaleUpAndFadeInSubs .header-content, .header.scaleUpAndFadeInSubs .btn, .cta.scaleUpAndFadeInSubs .cta-image-wrapper, .cta.scaleUpAndFadeInSubs .cta-block-header-subhead, cta.scaleUpAndFadeInSubs .cta-block-heading, .cta.scaleUpAndFadeInSubs .content, .cta.scaleUpAndFadeInSubs .btn, .form.scaleUpAndFadeInSubs .freeform-row');	


// collect parent triggered reveals with staggering

var fadeInsSubsStagger = gsap.utils.toArray('.repeater.fadeInSubsStagger .repeater-list-item, .container2Column.fadeInSubsStagger .columnHalf, .containerWithSidebar.fadeInSubsStagger .columnMain, .containerWithSidebar.fadeInSubsStagger .columnSidebar, .row.fadeInSubsStagger > .column, .accordionSet.fadeInSubsStagger > .accordion, .buttonGroup.fadeInSubsStagger .btn, .header.fadeInSubsStagger .header-subhead, .header.fadeInSubsStagger .header-mainHeading, .header.fadeInSubsStagger .header-content, .header.fadeInSubsStagger .btn, .cta.fadeInSubsStagger .cta-image-wrapper, .cta.fadeInSubsStagger .cta-block-header-subhead, cta.fadeInSubsStagger .cta-block-heading, .cta.fadeInSubsStagger .content, .cta.fadeInSubsStagger .btn, .form.fadeInSubsStagger .freeform-row')
var slideUpsSubsStagger = gsap.utils.toArray('.repeater.slideUpAndFadeInSubsStagger .repeater-list-item, .container2Column.slideUpAndFadeInSubsStagger .columnHalf, .containerWithSidebar.slideUpAndFadeInSubsStagger .columnMain, .containerWithSidebar.slideUpAndFadeInSubsStagger .columnSidebar, .row.slideUpAndFadeInSubsStagger > .column, .accordionSet.slideUpAndFadeInSubsStagger > .accordion, .buttonGroup.slideUpAndFadeInSubsStagger .btn, .header.slideUpAndFadeInSubsStagger .header-subhead, .header.slideUpAndFadeInSubsStagger .header-mainHeading, .header.slideUpAndFadeInSubsStagger .header-content, .header.slideUpAndFadeInSubsStagger .btn, .cta.slideUpAndFadeInSubsStagger .cta-image-wrapper, .cta.slideUpAndFadeInSubsStagger .cta-block-header-subhead, cta.slideUpAndFadeInSubsStagger .cta-block-heading, .cta.slideUpAndFadeInSubsStagger .content, .cta.slideUpAndFadeInSubsStagger .btn, .form.slideUpAndFadeInSubsStagger .freeform-row');
var slideDownsSubsStagger = gsap.utils.toArray('.repeater.slideDownAndFadeInSubsStagger .repeater-list-item, .container2Column.slideDownAndFadeInSubsStagger .columnHalf, .containerWithSidebar.slideDownAndFadeInSubsStagger .columnMain, .containerWithSidebar.slideDownAndFadeInSubsStagger .columnSidebar, .row.slideDownAndFadeInSubsStagger > .column, .accordionSet.slideDownAndFadeInSubsStagger > .accordion, .buttonGroup.slideDownAndFadeInSubsStagger .btn, .header.slideDownAndFadeInSubsStagger .header-subhead, .header.slideDownAndFadeInSubsStagger .header-mainHeading, .header.slideDownAndFadeInSubsStagger .header-content, .header.slideDownAndFadeInSubsStagger .btn, .cta.slideDownAndFadeInSubsStagger .cta-image-wrapper, .cta.slideDownAndFadeInSubsStagger .cta-block-header-subhead, cta.slideDownAndFadeInSubsStagger .cta-block-heading, .cta.slideDownAndFadeInSubsStagger .content, .cta.slideDownAndFadeInSubsStagger .btn, .form.slideDownAndFadeInSubsStagger .freeform-row');
var slideLeftsSubsStagger = gsap.utils.toArray('.repeater.slideLeftAndFadeInSubsStagger .repeater-list-item, .container2Column.slideLeftAndFadeInSubsStagger .columnHalf, .containerWithSidebar.slideLeftAndFadeInSubsStagger .columnMain, .containerWithSidebar.slideLeftAndFadeInSubsStagger .columnSidebar, .row.slideLeftAndFadeInSubsStagger > .column, .accordionSet.slideLeftAndFadeInSubsStagger > .accordion, .buttonGroup.slideLeftAndFadeInSubsStagger .btn, .header.slideLeftAndFadeInSubsStagger .header-subhead, .header.slideLeftAndFadeInSubsStagger .header-mainHeading, .header.slideLeftAndFadeInSubsStagger .header-content, .header.slideLeftAndFadeInSubsStagger .btn, .cta.slideLeftAndFadeInSubsStagger .cta-image-wrapper, .cta.slideLeftAndFadeInSubsStagger .cta-block-header-subhead, cta.slideLeftAndFadeInSubsStagger .cta-block-heading, .cta.slideLeftAndFadeInSubsStagger .content, .cta.slideLeftAndFadeInSubsStagger .btn, .form.slideLeftAndFadeInSubsStagger .freeform-row');
var slideRightsSubsStagger = gsap.utils.toArray('.repeater.slideRightAndFadeInSubsStagger .repeater-list-item, .container2Column.slideRightAndFadeInSubsStagger .columnHalf, .containerWithSidebar.slideRightAndFadeInSubsStagger .columnMain, .containerWithSidebar.slideRightAndFadeInSubsStagger .columnSidebar, .row.slideRightAndFadeInSubsStagger > .column, .accordionSet.slideRightAndFadeInSubsStagger > .accordion, .buttonGroup.slideRightAndFadeInSubsStagger .btn, .header.slideRightAndFadeInSubsStagger .header-subhead, .header.slideRightAndFadeInSubsStagger .header-mainHeading, .header.slideRightAndFadeInSubsStagger .header-content, .header.slideRightAndFadeInSubsStagger .btn, .cta.slideRightAndFadeInSubsStagger .cta-image-wrapper, .cta.slideRightAndFadeInSubsStagger .cta-block-header-subhead, cta.slideRightAndFadeInSubsStagger .cta-block-heading, .cta.slideRightAndFadeInSubsStagger .content, .cta.slideRightAndFadeInSubsStagger .btn, .form.slideRightAndFadeInSubsStagger .freeform-row');
var scaleDownsSubsStagger = gsap.utils.toArray('.repeater.scaleDownAndFadeInSubsStagger .repeater-list-item, .container2Column.scaleDownAndFadeInSubsStagger .columnHalf, .containerWithSidebar.scaleDownAndFadeInSubsStagger .columnMain, .containerWithSidebar.scaleDownAndFadeInSubsStagger .columnSidebar, .row.scaleDownAndFadeInSubsStagger > .column, .accordionSet.scaleDownAndFadeInSubsStagger > .accordion, .buttonGroup.scaleDownAndFadeInSubsStagger .btn, .header.scaleDownAndFadeInSubsStagger .header-subhead, .header.scaleDownAndFadeInSubsStagger .header-mainHeading, .header.scaleDownAndFadeInSubsStagger .header-content, .header.scaleDownAndFadeInSubsStagger .btn, .cta.scaleDownAndFadeInSubsStagger .cta-image-wrapper, .cta.scaleDownAndFadeInSubsStagger .cta-block-header-subhead, cta.scaleDownAndFadeInSubsStagger .cta-block-heading, .cta.scaleDownAndFadeInSubsStagger .content, .cta.scaleDownAndFadeInSubsStagger .btn, .form.scaleDownAndFadeInSubsStagger .freeform-row');
var scaleUpsSubsStagger = gsap.utils.toArray('.repeater.scaleUpAndFadeInSubsStagger .repeater-list-item, .container2Column.scaleUpAndFadeInSubsStagger .columnHalf, .containerWithSidebar.scaleUpAndFadeInSubsStagger .columnMain, .containerWithSidebar.scaleUpAndFadeInSubsStagger .columnSidebar, .row.scaleUpAndFadeInSubsStagger > .column, .accordionSet.scaleUpAndFadeInSubsStagger > .accordion, .buttonGroup.scaleUpAndFadeInSubsStagger .btn, .header.scaleUpAndFadeInSubsStagger .header-subhead, .header.scaleUpAndFadeInSubsStagger .header-mainHeading, .header.scaleUpAndFadeInSubsStagger .header-content, .header.scaleUpAndFadeInSubsStagger .btn, .cta.scaleUpAndFadeInSubsStagger .cta-image-wrapper, .cta.scaleUpAndFadeInSubsStagger .cta-block-header-subhead, cta.scaleUpAndFadeInSubsStagger .cta-block-heading, .cta.scaleUpAndFadeInSubsStagger .content, .cta.scaleUpAndFadeInSubsStagger .btn, .form.scaleUpAndFadeInSubsStagger .freeform-row');


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
		x: 50,
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
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
			scrollTrigger: {
				trigger: aniItem,
				start: "top 50%",
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
			stagger: 0.15			
		}),
		start: "top 50%",
		once: true
	});		
}

/* LOADER FUNCTIONALITY */

function turnoffloader() {
	$('body').addClass('pageloaded');
	addReveals();	
}



$(document).ready(function() {
	
	console.log('TEST');
	
	/* DO THE THINGS IF NOT IN LIVE PREVIEW IN CONTROL PANEL */
	
	if (!($('body').hasClass('ispreview'))) {
		
		/* GET LOGIN STATUS AND POPULATE CLOGIN BAR IF LOGGED IN */
		
		$("#login-status-bar-wrapper").load("/resources/loginbar");
		
		/* LOADER FUNCTIONALITY */
		
		var turnoffloader = function() {
			$('body').addClass('pageloaded');
		}
		
		var loadAnim = gsap.to("#loader", {duration: 0.5, ease: "power1.out", opacity: 0, paused: true, onComplete:turnoffloader});
		loadAnim.play();			
	}
	
	
	/* REGISTER GSAP PLUGINS */
	
	gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger, ExpoScaleEase, RoughEase, SlowMo);
	
	
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
			button.addClass('expanded');
			button.attr('aria-expanded', 'true');
			panel.addClass('expanded');		
		} else {			
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
					related: false
				});
				youtubePlayer.load(youtubeVideoId, true);
			});
			$parent.addClass('block-video_-playing');
		}
	});
	
	
	/* SLIDER SETUP AND FUNCTIONALITY */
	
	function sliderFlexFix(e) {		
		var myCarousel = e.target;		
		var myItems = $(myCarousel).find('.owl-item');		
		myItems.each(function() {
			$(this).css('height', '');
		});	
		var heightVal = $(myCarousel).find('.owl-stage').height();
		myItems.each(function() {
			$(this).css('height', heightVal + 'px');
		});		
	}
	
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
			lazyLoadEager: 2,
			onInitialized: sliderFlexFix,
			onResized: sliderFlexFix,
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
