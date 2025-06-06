// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	adapter: vercel({
		edgeMiddleware: true
	}),
	// site: 'https://counterjs-docs.vercel.app',
	integrations: [
		starlight({
			title: 'CounterJS',
			description: 'A lightweight and powerful library for creating countdown timers in JavaScript',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/eulucastiagolt/counterjs'
				}
			],

			// Internationalization configuration
			locales: {
				// English as the default language
				en: {
					label: 'English',
					lang: 'en',
				},
				// Brazilian Portuguese
				'pt-br': {
					label: 'Português (Brasil)',
					lang: 'pt-BR',
				},
			},
			defaultLocale: 'en',

			// Sidebar configuration
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
					translations: { 'pt-br': 'Guias' }
				},
				{
					label: 'API',
					slug: 'guides/api',
					translations: { 'pt-br': 'API' }
				},
				{
					label: 'Changelog',
					link: '/changelog',
					translations: { 'pt-br': 'Registro de Alterações' }
				},
				{
					label: 'Examples',
					slug: 'guides/example',
					translations: { 'pt-br': 'Exemplos' }
				}
			],

			// Enable edit links
			editLink: {
				baseUrl: 'https://github.com/eulucastiagolt/counterjs/edit/main/docs/src/content/docs/',
			},

			// Using default Starlight styling
		}),
	],
});