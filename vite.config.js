import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';
//import critical from 'rollup-plugin-critical';
import manifestSRI from 'vite-plugin-manifest-sri';
import path from 'path';
import viteCompression from 'vite-plugin-compression2';
import ViteRestart from 'vite-plugin-restart';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
	base: command === 'serve' ? '' : '/dist/',
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
		},
		manifest: true,
		outDir: path.resolve(__dirname, 'web/dist/'),
		rollupOptions: {
			input: {
				app: path.resolve(__dirname, 'src/js/app.js'),
			}
		},
		sourcemap: true,
	},
	plugins: [
		tailwindcss(),
		manifestSRI(),
		/*
		critical({
		  criticalUrl: 'https://greauxhealthy.ddev.site',
		  criticalBase: './web/dist/criticalcss/',		 
		  criticalPages: [					
		  ],
		  criticalConfig: {
			penthouse: {
				timeout: 60000,
			},
			dimensions: [
				{
				  height: 700,
				  width: 500,
				},
				{
				  height: 900,
				  width: 1300,
				},
			],
		  },	  
		}),
		*/
		viteCompression({
			filter: /\.(js|mjs|json|css|map)$/i
		}),
		ViteRestart({
			reload: [
				'templates/**/*',
			],
		}),
	],
	publicDir: path.resolve(__dirname, 'src/public'),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@css': path.resolve(__dirname, 'src/css'),
			'@js': path.resolve(__dirname, 'src/js'),
		},
	},
	server: {
		// Allow cross-origin requests -- https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6
		allowedHosts: true,
		cors: {
			  origin: /(\.local|\.site|localhost)/
		},
		fs: {
			  strict: false
		},
		headers: {
			  "Access-Control-Allow-Private-Network": "true",
		},
		host: '0.0.0.0',
		origin: 'http://localhost:3000',
		port: 3000,
		strictPort: true,
	},
}));