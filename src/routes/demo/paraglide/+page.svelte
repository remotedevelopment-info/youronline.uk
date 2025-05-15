<script>
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import * as m from '$lib/paraglide/messages.js';
	
	/** 
	* @param import("$lib/paraglide/runtime").AvailableLanguageTag newLanguage 
	*/ 
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>



<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button on:click={() => switchToLanguage('en')}>en</button>
	<a href="/demo">Back</a>
</div>



			<!-- Full-screen background with centered text -->
			<!-- <Hero
					image="/images/office-team.jpeg"
					h2="Discover Cadence-CRM"
					h1="Build customer relationships"
					slogan="increase the rhythm of your sales success"
					layout="full"
					textAlign="center"
				/> -->

<!--
<div style="display: contents">
	<div class="flex min-h-screen flex-col">
		<div id="up" class="fixed top-0 z-50 w-full s-gHVs9LHR6ofL" style="color: white; background: black;">
			<div class="container flex items-center justify-between s-gHVs9LHR6ofL">
				<div class="flex items-center gap-2 s-gHVs9LHR6ofL">
					<button class="border-0 bg-transparent p-0 s-gHVs9LHR6ofL" data-sveltekit-reload="">
						<img src="/logo.png" alt="logo" class="logo s-gHVs9LHR6ofL">
					</button> 
					<div class="logo-group-text s-gHVs9LHR6ofL">
						<h2 class="brand">Cadence-CRM</h2> 
						<h3 class="brand">Your Sales require your attention</h3>
					</div>
				</div>
				<button class="rounded-lg pb-6 text-2xl hover:bg-gray-100/10 md:hidden s-gHVs9LHR6ofL" aria-label="Toggle Menu" aria-expanded="false">
					<span class="text-8xl mt-0 mb-8 pt-0 pb-8 s-gHVs9LHR6ofL">≡</span>
				</button>
				<nav class="hidden items-center gap-8 md:flex s-gHVs9LHR6ofL">
					<ul class="flex items-center gap-6 s-gHVs9LHR6ofL">
						<li class="s-gHVs9LHR6ofL"><a href="/pricing" class="text-current transition-colors hover:text-gray-300 s-gHVs9LHR6ofL">Pricing</a></li>
						<li class="s-gHVs9LHR6ofL"><a href="/articles" class="text-current transition-colors hover:text-gray-300 s-gHVs9LHR6ofL">Articles</a></li>
					</ul>
					<div class="flex items-center gap-8 s-gHVs9LHR6ofL">
						<a href="/page/contact" class="button cta inverse s-gHVs9LHR6ofL">Let's Chat</a>
						<a href="/page/action" class="button cta  s-gHVs9LHR6ofL">Start now</a>
					</div>
				</nav>
			</div>
		</div>
		<main class="flex-grow">
			<section class="pb-16 md:pb-24">
			</section>
		</main> 
	<footer class="bg-gray-900 py-12 text-white"><div class="container mx-auto px-4">
		<footer class="bg-white dark:bg-gray-900"><div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
		<div class="col-span-1"><img src="/logo.jpeg" alt="Cadence CRM" class="h-48 w-auto">
		<p class="mt-4 text-base text-gray-500 dark:text-gray-400">Your business, in perfect rhythm</p></div>
		<div><h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">product</h3> <ul class="mt-4 space-y-4">
		<li><a href="/features" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Features</a></li><li><a href="/pricing" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Pricing</a></li><li><a href="/success-stories" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Success Stories</a></li>
		</ul></div><div><h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">company</h3> <ul class="mt-4 space-y-4"><li><a href="/about" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</a></li><li><a href="/blog" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Blog</a></li><li><a href="/careers" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Careers</a></li></ul></div><div><h3 class="text-sm font-semibold text-gray-400 dark:text-gray-300 uppercase tracking-wider">support</h3> <ul class="mt-4 space-y-4"><li><a href="/docs" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Documentation</a></li><li><a href="/contact" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</a></li><li><a href="/privacy" class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Privacy Policy</a></li></ul></div></div> <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
			<p class="text-base text-gray-400 dark:text-gray-500 text-center">© 2025 Cadence-CRM. All rights reserved.</p></div></div>
	</footer>
</div>
</footer>
</div>
-->
