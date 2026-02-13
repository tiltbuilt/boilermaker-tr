import Lenis from 'lenis';
import 'lenis/dist/lenis.css'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

/* CSS */
import "../css/app.css";

/* JS */
import { animate, stagger, scroll, cubicBezier, inView, frame, time } from "motion";


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


/* Lenis setup to smooth scrolling */
const lenis = new Lenis();

// Define a function to update Lenis on each frame
function update() {
  // Use motion's synced time.now() to call lenis.raf()
  lenis.raf(time.now());
}
// Subscribe the update function to motion's global frame loop
// The 'true' argument ensures it runs before other frame updates
frame.update(update, true);



try {
  animate("body", { opacity: 1 });
  document.body.classList.add('motion-loaded');

  const selectors = "p, ul, .heading, .btn, .cta, .content-image, .icon-content, .accordion, .tab-set, .slider-set, .quote, .content-video, .icon-wrapper"

  inView(".section-standard .background-wrapper, .section-side-media .side-media-media", (element) => {
    animate(element, { opacity: 1}, { duration: 1.5 });
    //console.log("in view:", element);
  }, { amount: 0.01}, { once: true });

  inView(".section-standard, .section-side-media", (element) => {
  animate(element.querySelectorAll(selectors), { opacity: 1, y: 0 }, { 
    delay: stagger(0.1, { startDelay: 0.1 }), 
    duration: 0.5, 
    ease: [0.3, 0.1, 0.1, 1] 
  });
}, { amount: 0.3, once: true });
  
  inView(".section-standard .repeater, .section-side-media .repeater", (target) => {
    animate(
      '.repeater-card', 
      { opacity: 1, y: 0}, 
      /*{ ease: [.17,.67,.83,.67], opacity: { ease: [.17,.67,.83,.67]} }, 
      { duration: 1.5, y: { duration: 2} }, */
      { delay: stagger(0.3) });
    },
    { amount: 0.15 }, 
    { once: true }
  );   


} catch (error) {
  // Handle the error, perhaps by logging it or doing nothing
  console.error("Motion.dev failed to load:", error);
}


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

