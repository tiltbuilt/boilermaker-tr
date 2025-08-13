/* CSS */
import "../css/app.css";

/* JS */
import 'lazysizes';



/* SCRIPTS HERE */

(function() {
  // Encapsulated functions
  function accPanelFunction(btn, state) {    
    console.log(btn);
    console.log(state);
    const btnElem = document.getElementById(btn);
    const panel = btnElem.nextElementSibling;
    if (state) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {      
      panel.style.maxHeight = null;
    }
  }
   
  // Expose the function to the global scope under a namespace
  window.tiltBoiler = window.tiltBoiler || {};
  window.tiltBoiler.accPanelFunction = accPanelFunction;  
})();




// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
	console.log("HMR")
  });
}

