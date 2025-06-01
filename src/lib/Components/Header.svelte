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

<div bind:this={headerRef} id="up" class="header-block py-1">
	<div class="flex justify-between items-center w-full">
		<!-- Logo Section -->
		<div class="flex items-center gap-1 w-full">
			<button class="flex items-center bg-transparent p-1" onclick={loadHome} data-sveltekit-reload>
				<img src={logo} alt="logo" class="logo" />
			</button>
			<div class="flex ml-1 md:ml-2 lg:ml-3">
                <div class="flex-col">
                    {@render children()}
                </div>
                <div class="flex justify-end w-10">
                    <button onclick={() => toggleDarkMode()} class="text-xs">
                        {isDark === false ? '☀️' : '🌙'}
                    </button>
                </div>
			</div>
		</div>

		<!-- Mobile Navigation Toggle -->
		<button
			class="md:hidden hover:bg-brand-100/10 pb-2 rounded-lg text-xl"
			onclick={toggleMenu}
			aria-label="Toggle Menu"
			aria-expanded={isMenuOpen}
		>
			{#if isMenuOpen}
				<span class="text-4xl">×</span>
			{:else}
				<span class="mt-0 mb-2 pt-0 pb-2 text-4xl">≡</span>
			{/if}
		</button>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex justify-end items-center gap-4 w-full">
			<ul class="flex justify-end items-center gap-4">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="text-current hover:text-brand-300 text-sm transition-colors"
							onclick={toggleMenu}
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Desktop CTA Buttons -->
			<div class="flex justify-end items-center gap-4">
				{#each ctaButtons as button}
					<a href={button.href} class="button cta {button.class} text-sm py-1 px-3" onclick={toggleMenu}>
						{button.text}
					</a>
				{/each}
			</div>
		</nav>

		<!-- Mobile Navigation Menu -->
		{#if isMenuOpen}
			<div
				class="md:hidden block top-24 left-0 absolute bg-brand-900 w-full"
				transition:slide={{ duration: 300 }}
			>
				<nav class="mx-auto px-4 py-2 container">
					<ul class="flex flex-col gap-3">
						{#each navItems as item}
							<li>
								<a
									href={item.href}
									class="text-sm menu-item-text"
									onclick={() => (isMenuOpen = false)}
								>
									{item.text}
								</a>
							</li>
						{/each}

						{#each ctaButtons as button}
							<li class="mt-3">
								<a
									href={button.href}
									class="button cta {button.class} w-full text-center text-sm py-1"
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
		height: 80px; /* Reduced from 160px */
		max-width: 120px; /* Using max-width instead of min-width */
		object-fit: contain; /* Maintain aspect ratio without stretching */
	}
	@media (min-width: 768px) {
		.logo {
			width: auto;
			height: 90px; /* Reduced from 180px */
			max-width: 140px; /* Using max-width instead of min-width */
		}
	}
	.mobile-nav {
		@apply md:hidden block left-0 z-10 absolute bg-brand-900 w-full;
		top: 90px; /* Reduced from 175px */
	}
</style>
