<script>
	import { browser } from '$app/environment';
	let { next, xclass, hover } = $props();
	let hasScrolled = $state(false);
    let showTooltip = $state(false);

	function scrollToNext() {
		const nextSection = document.querySelector('section#' + next);
		if (nextSection && browser) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
	if (browser) {
		window.addEventListener('scroll', () => {
			hasScrolled = window.scrollY > 50;
			console.log('window has scrolled', hasScrolled, window.scrollY);
		});
	}
</script>

<div class="block {xclass} scroll-indicator">
	<button
		class="relative left-1/2 -translate-x-1/2 opacity-90 transition-all
       duration-300 hover:opacity-100 hover:scale-110 text-black dark:text-white
       {hasScrolled ? 'opacity-50' : ''}"
		onclick={() => scrollToNext()}
		aria-label="Scroll to next section"
		onmouseover={() => showTooltip = true}
        onmouseout={() => showTooltip = false}
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
	    {#if showTooltip && hover}
        <div class="tooltip">
            {hover}
        </div>
    {/if}
</div>

<style>
	    /* Custom tooltip styles */
    .tooltip {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 60;
    }
	.scroll-indicator {
		position: relative; 
		top: -2rem;
		bottom: 0rem;
		left: 0;
		right: 0;
		z-index: 50; /* Higher z-index to ensure visibility */
		pointer-events: auto; /* Ensure clicks work */
		cursor: pointer;
	}
	.scroll-indicator.hero {
		margin-top: -6rem;
		top: -6rem;
	}
	
	@media (max-height: 600px) {
		.scroll-indicator {
			bottom: 1rem;
		}
	}
</style>

