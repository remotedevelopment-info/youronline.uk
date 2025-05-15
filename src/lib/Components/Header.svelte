<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	/** @typedef {Object} NavItem
	 * @property {string} href
	 * @property {string} text
	 */

	/** @typedef {Object} CTAButton
	 * @property {string} href
	 * @property {string} text
	 * @property {string} class
	 */

	/** @typedef {Object} HeaderProps
	 * @property {Object} children
	 * @property {NavItem[]} navItems
	 * @property {string} [background]
	 * @property {string} [colour]
	 */

	/** @type {HeaderProps} */
	let { children, navItems, background = 'black', colour = 'white' } = $props();

	/** @type {string} */
	let logo = $state('/logo.avif');
	let isDark = $state(false);
	let isMenuOpen = $state(false);

	/** @type {CTAButton[]} */
	const ctaButtons = $state([
		{ href: '/page/contact', text: "Let's Chat", class: 'inverse' },
		{ href: '/page/action', text: 'Start now', class: '' }
	]);

	/** @type {HTMLElement | null} */
	let headerRef;

	/**
	 * Loads home page and sets template properties
	 * @returns {Promise<void>}
	 */
	async function loadHome() {
		if (!browser) return;

		await goto('/', { replaceState: true, invalidateAll: true });
		const defaultTemplate = 'soloentrepreneur';
		let localTemplate = window.localStorage.getItem('templateSelected') || defaultTemplate;

		if (localTemplate === 'soloentrepreneur') {
			document.documentElement?.style.setProperty('--hero-clip-path', 'circle(50% at 50% 50%)');
		}
	}

	/**
	 * Toggles the mobile menu state
	 * @param {Event} event
	 */
	function toggleMenu(event) {
		event.stopPropagation(); // Ensure the event doesn't bubble
		isMenuOpen = !isMenuOpen;
	}

	function toggleDarkMode() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark');
	}

	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			isDark = true;
		}

		/**
		 * Handles clicks outside the header
		 * @param {MouseEvent} event
		 */
		const handleClickOutside = (event) => {
			// Only process if menu is open
			if (!isMenuOpen) return;

			if (headerRef && !headerRef.contains(/** @type {Node} */ (event.target))) {
				isMenuOpen = false;
			}
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div bind:this={headerRef} id="up" class="header-block">
	<div class="flex justify-between items-center w-full">
		<!-- Logo Section -->
		<div class="flex items-center gap-2 w-full">
			<button class="bg-transparent p-2 border-gray-400 border-b" onclick={loadHome} data-sveltekit-reload>
				<img src={logo} alt="logo" class="w-auto h-full logo" />
			</button>
			<div class="flex ml-2 md:ml-3 lg:ml-4">
                <div class="flex-col">
                    {@render children()}
                </div>
                <div class="flex justify-end w-12">
                    <button onclick={() => toggleDarkMode()} class="text-xs">
                        {isDark === false ? '☀️' : '🌙'}
                    </button>
                </div>
			</div>
		</div>

		<!-- Mobile Navigation Toggle -->
		<button
			class="md:hidden hover:bg-brand-100/10 pb-6 rounded-lg text-2xl"
			onclick={toggleMenu}
			aria-label="Toggle Menu"
			aria-expanded={isMenuOpen}
		>
			{#if isMenuOpen}
				<span class="text-8xl">×</span>
			{:else}
				<span class="mt-0 mb-8 pt-0 pb-8 text-8xl">≡</span>
			{/if}
		</button>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex justify-end items-center gap-8 w-full">
			<ul class="flex justify-end items-center gap-6">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="text-current hover:text-brand-300 transition-colors"
							onclick={toggleMenu}
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Desktop CTA Buttons -->
			<div class="flex justify-end items-center gap-8">
				{#each ctaButtons as button}
					<a href={button.href} class="button cta {button.class}" onclick={toggleMenu}>
						{button.text}
					</a>
				{/each}
			</div>
		</nav>

		<!-- Mobile Navigation Menu -->
		{#if isMenuOpen}
			<div
				class="md:hidden block top-40 left-0 absolute bg-brand-900 w-full"
				transition:slide={{ duration: 300 }}
			>
				<nav class="mx-auto px-6 py-4 container">
					<ul class="flex flex-col gap-4">
						{#each navItems as item}
							<li>
								<a
									href={item.href}
									class="menu-item-text"
									onclick={() => (isMenuOpen = false)}
								>
									{item.text}cc
								</a>
							</li>
						{/each}

						{#each ctaButtons as button}
							<li class="mt-6">
								<a
									href={button.href}
									class="button cta {button.class} w-full text-center"
									onclick={() => (isMenuOpen = false)}
								>
									{button.text}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		{/if}
	</div>
</div>

<style>
	.logo {
		width: auto;
		height: 160px;
		min-width: 220px;
	}
	@media (min-width: 768px) {
		.logo {
			width: auto;
			height: 180px;
			min-width: 240px;
		}
	}
	.mobile-nav {
		@apply md:hidden block left-0 z-10 absolute bg-brand-900 w-full;
		top: 175px;
	}
</style>
