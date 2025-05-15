<script>
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import '$lib/styles.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	let { children } = $props();

	/** @typedef {Object} NavItem
	 * @property {string} href
	 * @property {string} text
	 */
	/** @type {NavItem[]} */
	const navItems = $state([
		{ href: '/pricing', text: 'Pricing' },
		{ href: '/articles', text: 'Articles' },
		{ href: '/apps', text: 'Apps'},
	]);
</script>

<svelte:head>
	<title>YourOnline UK | Direct Contracting</title>
	<meta name="description" content="Professional software development and websites" />
	<meta property="og:type" content="software" />
	<meta property="og:url" content="https://youronline.uk/" />
	<meta property="og:title" content="YourOnline UK: software and website builds" />
	<meta
		property="og:description"
		content="Professinal software development on a reasonable budget."
	/>
	<meta property="og:image" content="https://youronline.uk/images/youronline.jpg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://youronline.uk/" />
	<meta name="twitter:title" content="YourOnline: FAST Websites built with software" />
	<meta
		name="twitter:description"
		content="Professional software development and websites with advice and support."
	/>
	<meta name="twitter:image" content="https://youronline.app/images/youronline.jpg" />

	<!-- Keywords -->
	<meta
		name="keywords"
		content="business website build, free website build, fast website build, construct my website, website design, website development, website hosting, website maintenance, website support, website security, website speed, website seo, website marketing, website sales, website sales funnel, website sales tracking, website sales conversion, website sales"
	/>
</svelte:head>
<div class="flex flex-col min-h-screen">
	<!-- Header Area -->
	<Header navItems={navItems} background="black" colour="white">
		<h2 class="brand">YourOnline UK</h2>
		<h3 class="brand">Software Services and website builds</h3>
	</Header>
	<main class="flex-grow">
		<ParaglideJS {i18n}>
			{@render children()}
		</ParaglideJS>
	</main>
	<Footer />
</div>
