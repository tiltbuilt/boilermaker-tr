/* CSS */
import "@css/app.pcss";

/* JS */
import 'lazysizes';



/* SCRIPTS HERE */



// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
	console.log("HMR")
  });
}

