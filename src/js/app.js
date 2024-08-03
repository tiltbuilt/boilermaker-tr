/* CSS */
import "@css/app.pcss";
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

/* JS */
import 'lazysizes';
import { gsap } from "gsap";    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
/* The following plugins are Club GSAP perks */
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";
//import * as YTPlayer from 'yt-player';


/* SCRIPTS HERE */


/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
 */
import Alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';
import focus from '@alpinejs/focus';
import persist from '@alpinejs/persist';

var duration = duration || 1;
gsap.registerPlugin(Flip,ScrollTrigger,ScrollToPlugin,Draggable,MotionPathPlugin,TextPlugin,DrawSVGPlugin,ScrambleTextPlugin,SplitText,RoughEase,ExpoScaleEase,SlowMo,CustomEase);    

document.addEventListener('alpine:init', () => {
  Alpine.data('sectionStandard', (animateContent, staggerAnimations) => ({
    init() {       
      if (animateContent) {
        const animParent = this.$refs.animparent;
        const animSelector = "#" + animParent.getAttribute('id') + " .animate" ;
        const animCast = document.querySelectorAll(animSelector);        
        if (staggerAnimations) {          
          ScrollTrigger.batch(animCast, {
            onEnter: batch => gsap.from(batch, 
            {
              duration: duration * 1.5,		
              y: 50,
              opacity: 0,
              // Note: Easing Pack required for easing
              ease: "expo.out",
              onComplete() {
                this.postRevealFunction;
              },
              stagger: 0.15			
            }),
            start: "top 95%",
            once: true
          });         
        } else {
          animCast.forEach(animItem => {              
            gsap.from(animItem, { 			
              duration: duration * 1.5,
              y: 50,			
              opacity: 0,              			
              // Note: Easing Pack required for easing
              ease: "expo.out",
              onComplete: this.postRevealFunction,              	
              scrollTrigger: {
                trigger: animParent,
                start: "top 95%",
              }			
            })
          });
        }
      } else {
        const animElem = this.$refs.animate;     
        gsap.from(animElem, {
          duration: duration * 1.5,
          y: 50,          
          opacity: 0,			
          // Note: Easing Pack required for easing
          ease: "expo.out",
          onComplete: this.postReveal,          			
          scrollTrigger: {
            trigger: animElem,
            start: "top 95%",
          }
        })
      }      
    },
        
    postReveal() {
      
    }    
      
  })),
  
  Alpine.data('sectionSidePhoto', (animateContent, staggerAnimations) => ({
    init() {       
      if (animateContent) {
        const animParent = this.$refs.animparent;
        const animSelector = "#" + animParent.getAttribute('id') + " .animate" ;
        const animCast = document.querySelectorAll(animSelector);        
        if (staggerAnimations) {          
          ScrollTrigger.batch(animCast, {
            onEnter: batch => gsap.from(batch, 
            {
              duration: duration * 1.5,	              
              opacity: 0,
              // Note: Easing Pack required for easing
              ease: "expo.out",
              onComplete() {
                this.postRevealFunction;
              },
              stagger: 0.15			
            }),
            start: "top 95%",
            once: true
          });         
        } else {
          animCast.forEach(animItem => {              
            gsap.from(animItem, { 			
              duration: duration * 1.5,              			
              opacity: 0,              			
              // Note: Easing Pack required for easing
              ease: "expo.out",
              onComplete: this.postRevealFunction,              	
              scrollTrigger: {
                trigger: animParent,
                start: "top 95%",
              }			
            })
          });
        }
      } else {
        const animElem = this.$refs.animate;     
        gsap.from(animElem, {
          duration: duration * 1.5,          
          force3D: true,
          opacity: 0,			
          // Note: Easing Pack required for easing
          ease: "expo.out",
          onComplete: this.postReveal,          			
          scrollTrigger: {
            trigger: animElem,
            start: "top 95%",
          }
        })
      }      
    },
        
    postReveal() {
      
    }    
      
  }))
  
 
    
})

if (typeof window.Alpine === "undefined") {
  Alpine.plugin(collapse);
  Alpine.plugin(focus);
  Alpine.plugin(persist);
  window.Alpine = Alpine;
  window.Swiper = Swiper;  
  Alpine.start();
}


// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
	console.log("HMR")
  });
}

