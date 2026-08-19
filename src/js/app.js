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

/* Only needed for the "CURTAINS PAGE TRANSITIONS" block near the bottom of this file. If you remove/comment out that block (e.g. to use native CSS view-transitions instead), remove this import too. */
import { curtains, wipe } from "motion-plus/curtains";


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



/* ============================================================================
 * PAGE REVEAL ANIMATIONS
 * ----------------------------------------------------------------------------
 * Works regardless of how page transitions are handled (Curtains, native CSS
 * view-transitions, or plain full page loads) - nothing below in the Curtains
 * block is required for this to function, so it's safe to leave in place.
 * ============================================================================ */

// Shared selectors for the section reveal animations
const revealElementSelectorList = [
  "p",
  "ul:not(.tab-list)",
  ".heading", ".btn", ".cta", ".content-image",
  ".accordion", ".icon-content", ".tab-set", ".slider-set",
  ".quote", ".content-video", ".icon-wrapper",
  ".page-header-main-photo", ".stat-ticker-group",
  ".animated", ".form-field-wrapper", ".form-btn-wrapper",
];
const revealSectionSelectorList = [".section-standard", ".section-side-media"];
const elementRevealSelectors = revealSectionSelectorList.flatMap(section => revealElementSelectorList.map(el => `.main ${section} ${el}`)).join(", ");
const backgroundRevealSelectors = ".background-wrapper, .side-media-media";

// Sets up the in-view reveal animations; re-run after every page transition since inView() only observes elements present at call time
function initRevealAnimations() {
  try {
    animate("body", { opacity: 1 });
    document.body.classList.add('motion-loaded');

    inView(backgroundRevealSelectors, (element) => {
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
}

initRevealAnimations();


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


/* ============================================================================
 * CURTAINS PAGE TRANSITIONS (motion-plus)
 * ----------------------------------------------------------------------------
 * Handles AJAX-style navigation with a Curtains wipe effect. To use native CSS
 * view-transitions instead, delete/comment out this entire block along with
 * the `curtains`/`wipe` import at the top of the file - everything above this
 * block (Lenis, Alpine, reveal animations) will keep working unaffected.
 * ============================================================================ */
/* */
// Returns whether at least `amount` (0-1) of an element's height is within the viewport
function isInViewport(el, amount = 0) {
  const rect = el.getBoundingClientRect();
  if (rect.height <= 0) return false;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  return (visibleHeight / rect.height) >= amount;
}

// Snaps already-visible elements straight to their revealed state (no animation) right after a
// transition swap, so only content that is still off-screen plays the scroll-triggered fade-in
function revealAlreadyVisibleElements() {
  document.querySelectorAll(backgroundRevealSelectors).forEach((el) => {
    if (isInViewport(el, 0.01)) {
      el.style.opacity = '1';
    }
  });

  document.querySelectorAll(elementRevealSelectors).forEach((el) => {
    if (isInViewport(el, 0.2)) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }
  });

  document.querySelectorAll(".repeater").forEach((repeater) => {
    if (!isInViewport(repeater, 0)) return;
    repeater.querySelectorAll('.repeater-card').forEach((card) => {
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
  });
}

// 1. Analytics virtual tracker
function trackVirtualPageView(url) {
  const pagePath = new URL(url).pathname;
  const pageTitle = document.title;

  if (typeof gtag === "function") {
    gtag("event", "page_view", { page_title: pageTitle, page_location: window.location.href, page_path: pagePath });
  }
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: "virtual_pageview", page_url: window.location.href, page_title: pageTitle });
  }
  if (typeof fbq === "function") {
    fbq("track", "PageView");
  }
}

// 2. Head tag parser - syncs title, SEOMatic-managed tags (meta, canonical/hreflang, JSON-LD) and stylesheets
function mergeHead(newDoc) {
  document.title = newDoc.title;

  const seoSelectors = [
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[name="robots"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
    'link[rel="canonical"]',
    'link[rel="alternate"][hreflang]',
    'script[type="application/ld+json"]',
  ].join(', ');

  document.querySelectorAll(seoSelectors).forEach(el => el.remove());
  newDoc.querySelectorAll(seoSelectors).forEach(el => {
    document.head.appendChild(el.cloneNode(true));
  });

  newDoc.querySelectorAll('link[rel="stylesheet"]').forEach(newLink => {
    const existingLink = document.querySelector(`link[href="${newLink.getAttribute('href')}"]`);
    if (!existingLink) {
      document.head.appendChild(newLink.cloneNode(true));
    }
  });

  // Copy any page-specific <style> tags in <head> that aren't already present
  newDoc.querySelectorAll('head style').forEach(newStyle => {
    const alreadyPresent = Array.from(document.querySelectorAll('head style'))
      .some(existingStyle => existingStyle.textContent === newStyle.textContent);
    if (!alreadyPresent) {
      document.head.appendChild(newStyle.cloneNode(true));
    }
  });

  // Copy any page-specific <script> tags in <head>; recreated (not cloned) so they actually execute
  newDoc.querySelectorAll('head script').forEach(newScript => {
    const src = newScript.getAttribute('src');
    const alreadyPresent = src
      ? document.querySelector(`head script[src="${src}"]`)
      : Array.from(document.querySelectorAll('head script:not([src])'))
          .some(existingScript => existingScript.textContent === newScript.textContent);
    if (alreadyPresent) return;

    const script = document.createElement('script');
    Array.from(newScript.attributes).forEach(attr => script.setAttribute(attr.name, attr.value));
    script.textContent = newScript.textContent;
    document.head.appendChild(script);
  });
}

// 2b. Sync all per-page <body> attributes (id, class, Alpine x-data/x-init, etc.) without touching
// body's children, so body-level nodes like the curtains overlay aren't destroyed mid-transition
function mergeBodyAttributes(newDoc) {
  const oldBody = document.body;
  const newBody = newDoc.body;

  Array.from(oldBody.attributes).forEach(attr => {
    if (!newBody.hasAttribute(attr.name)) {
      oldBody.removeAttribute(attr.name);
    }
  });

  Array.from(newBody.attributes).forEach(attr => {
    oldBody.setAttribute(attr.name, attr.value);
  });
}

// 3. Isolated Script Initialization (Runs AFTER curtain clears)
function initPageScripts() {
  // Re-run script tags injected inside the body
  document.querySelectorAll("body script").forEach((oldScript) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });

  // Re-arm the reveal-on-scroll animations for the newly injected markup
  initRevealAnimations();
}

// Initialize on initial cold page load
document.addEventListener("DOMContentLoaded", initPageScripts);

// 4. Corrected Async Routing Cycle
async function navigateTo(url, isBackNavigation = false) {
  try {
    // AWAIT ONLY THE DOM SWAP AND PACING TIMER
    await curtains(
      async () => {
        const [response] = await Promise.all([
          fetch(url),
          new Promise((resolve) => setTimeout(resolve, 350)) // Give animation processing buffer time
        ]);

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        
        mergeHead(doc);
        mergeBodyAttributes(doc);

        // Swap only the #main content, not the whole body, so body-level nodes
        // like the curtains overlay aren't destroyed mid-transition
        const newMain = doc.getElementById('main');
        const currentMain = document.getElementById('main');
        if (newMain && currentMain) {
          currentMain.replaceWith(newMain);
        } else {
          document.body.innerHTML = doc.body.innerHTML;
        }
        
        if (!isBackNavigation) {
          window.history.pushState({}, "", url);
        }
        window.scrollTo(0, 0);

        // Content already in view once the curtain clears should appear instantly, not fade in
        revealAlreadyVisibleElements();

        trackVirtualPageView(url);
      },
      { transition: { duration: 0.4 }, effect: wipe({ direction: "left", angle: 12 }) }
    );

    // CRITICAL FIX: Trigger script hooks AFTER the curtains() promise resolves.
    // This allows the reveal timeline to run natively without blocking the stack thread.
    requestAnimationFrame(() => {
      initPageScripts();
    });

  } catch (error) {
    console.error("Transition failed, falling back to hard refresh:", error);
    window.location.href = url; 
  }
}

// 5. Unified Event Hook Listeners
document.addEventListener("click", async (e) => {
  const link = e.target.closest("a");
  if (!link || link.origin !== window.location.origin) return;
  if (link.target && link.target !== "_self") return;
  if (link.hasAttribute("download")) return;

  const currentUrlNoHash = window.location.href.split('#')[0];
  const targetUrlNoHash = link.href.split('#')[0];
  if (currentUrlNoHash === targetUrlNoHash) return;

  e.preventDefault();
  navigateTo(link.href, false);
});

window.addEventListener("popstate", () => {
  navigateTo(window.location.href, true);
});

/* ============================================================================
 * END CURTAINS PAGE TRANSITIONS
 * ============================================================================ */


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

