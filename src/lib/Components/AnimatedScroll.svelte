<script>
	import { browser } from '$app/environment';
	let { next, xclass } = $props();
	let hasScrolled = $state(false);

	function scrollToNext() {
		const nextSection = document.querySelector('section#' + next);
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
	if (browser) {
		window.addEventListener('scroll', () => {
			hasScrolled = window.scrollY > 50;
		});
	}
</script>

<div class="block {xclass} scroll-indicator">
	<button
		class="absolute left-1/2 -translate-x-1/2 opacity-90 transition-all
       duration-300 hover:opacity-100 hover:scale-110 text-black dark:text-white
       {hasScrolled ? 'opacity-0 pointer-events-none' : ''}"
		onclick={scrollToNext}
		aria-label="Scroll to next section"
	>
		<div class="bg-white/30 dark:bg-black/30 shadow-lg backdrop-blur-sm p-3 border border-4 dark:border-white border-black rounded-full animate-bounce">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-8 h-8 text-black dark:text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</button>
</div>

<style>
	.scroll-indicator {
		position: fixed; /* Change to fixed to ensure it stays in view */
		bottom: 2.5rem;
		left: 0;
		right: 0;
		z-index: 50; /* Higher z-index to ensure visibility */
		pointer-events: auto; /* Ensure clicks work */
	}
	
	@media (max-height: 600px) {
		.scroll-indicator {
			bottom: 1rem;
		}
	}
</style>
