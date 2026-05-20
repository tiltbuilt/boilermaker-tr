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

  const elements = [
    "p",
    "ul:not(.tab-list)",
    ".heading", ".btn", ".cta", ".content-image",
    ".accordion", ".icon-content", ".tab-set", ".slider-set",
    ".quote", ".content-video", ".icon-wrapper",
    ".page-header-main-photo", ".stat-ticker-group",
    ".animated", ".form-field-wrapper", ".form-btn-wrapper",
  ];

  const sections = [".section-standard", ".section-side-media"];
  const elementRevealSelectors = sections.flatMap(section => elements.map(el => `.main ${section} ${el}`)).join(", ");

  inView(".background-wrapper, .side-media-media", (element) => {
    animate(element, { opacity: 1 }, {
      duration: 0.8,
      ease: [0.3, 0.1, 0.1, 1],
    });
  }, { amount: 0.01, once: true });

  inView(elementRevealSelectors, (element) => {
    animate(element, { opacity: 1, y: 0 }, {
      duration: 0.55,
      ease: [0.3, 0.1, 0.1, 1],
      delay: 0.08,
    });
  }, { amount: 0.2, once: true });

  inView(".repeater", (repeater) => {
    const cards = Array.from(repeater.querySelectorAll('.repeater-card'));
    if (!cards.length) return;

    animate(cards, { opacity: 1, y: 0 }, {
      delay: stagger(0.15),
      duration: 0.5,
      ease: [0.3, 0.1, 0.1, 1],
    });
  }, { amount: 'some', once: true });

} catch (error) {
  // Handle the error, perhaps by logging it or doing nothing
  console.error("Motion.dev failed to load:", error);
}


document.addEventListener('alpine:init', () => {
  
  Alpine.store('contentModal', {
    on: false,
    modalHtml: '',
    showLoading: false,   
  
    open(modalUrl, modalTitle) {      
      this.modalHtml='loading...'; 
      this.showLoading = true; 
      this.on = true;
            
      fetch(modalUrl, {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      })
      .then(response => response.text())
      .then(text => {
        this.modalHtml = text
        this.showLoading = false;			   
      })
      
    },
    
    close() {
      this.on = false;
      this.modalHtml = '';
      this.showLoading = false;   
    }
  });
});


if (typeof window.Alpine === "undefined") {
  Alpine.plugin(collapse);
  Alpine.plugin(focus);
  Alpine.plugin(persist);
  window.Alpine = Alpine;
  window.Swiper = Swiper;  
  Alpine.start();
}


/* Header height padding adjustment */
/* UNCOOMMENT IF NEEDED, USED TO SET PADDING OF MAIN ELEMENT TO HEIGHT OF HEADER WHEN HEADER IS POSITIONED FIXED. NEEDED TO ALLOW FOR NOTIFIC ATION BAR IN THOSE SCENARIOS */ 
/*
function adjustMainPadding() {
  const siteHeader = document.getElementById('site-header');
  const mainElement = document.getElementById('main');
  
  if (siteHeader && mainElement) {
    const headerHeight = siteHeader.offsetHeight;
    if (headerHeight > 0) {
      mainElement.style.setProperty('padding-top', (headerHeight - 2) + 'px', 'important');
    }
  }
}

// Make function globally available
window.adjustMainPadding = adjustMainPadding;

// Run on window resize
window.addEventListener('resize', adjustMainPadding);
*/

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
	console.log("HMR")
  });
}

