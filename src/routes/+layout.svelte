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
		{ href: '/apps', text: 'Apps'},
		{ href: '/pricing', text: 'Pricing' },
		{ href: '/articles', text: 'Articles' }
	]);
</script>

<svelte:head>
	<title>YourOnline | Rapid Website Builds</title>
	<meta name="description" content="Fast website development requiring absolutely no tech skills" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://youronline.app/" />
	<meta property="og:title" content="YourOnline: FAST Website build" />
	<meta
		property="og:description"
		content="We compose your website and you pay for hosting for as long as you need. Publish events from Cadence-CRM."
	/>
	<meta property="og:image" content="https://youronline.app/images/youronline.jpg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://youronline.app/" />
	<meta name="twitter:title" content="YourOnline: FAST Website build" />
	<meta
		name="twitter:description"
		content="Staying in contact with prospects to close deals. Cadence-CRM is an easy to use and intuitive, with lead tracking, sales funnel and customer repeat business."
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
		<h2 class="brand">YourOnline</h2>
		<h3 class="brand">Online Software Implemented for you</h3>
	</Header>
	<main class="flex-grow">
		<ParaglideJS {i18n}>
			{@render children()}
		</ParaglideJS>
	</main>
	<Footer />
</div>
