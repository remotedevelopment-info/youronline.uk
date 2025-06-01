<script>
	import { fade } from 'svelte/transition';
	/** @typedef {Object} HeroProps
	 * @property {string} image - URL of the background/side image
	 * @property {string} image2 - URL of the second image for split layout
	 * @property {string} h1 - Main heading
	 * @property {string} h2 - Secondary heading
	 * @property {string} [h3] - Optional tertiary heading
	 * @property {string} [slogan] - Optional slogan text
	 * @property {string} [content] - Optional content text
	 * @property {string} [slotted] - Slotted content
	 * @property {string} [cta] - Call to action text
	 * @property {'full' | 'split'} [layout='full'] - Layout style
	 * @property {'left' | 'center' | 'right'} [textAlign='center'] - Text alignment for full layout
	 */
	/** @type {HeroProps} */
	let {
		image,
		image2,
		h1,
		h2,
		h3,
		slogan = '',
		content = '',
		layout = 'full',
		textAlign = 'center',
		slotted = '',
		cta = 'Act now!'
	} = $props();
	function scrollDown() {
		const scroll = document.querySelector('#feature');
		scroll?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div
	class="hero {layout === 'split' ? 'overflow-hidden bg-gray-50 dark:bg-gray-900' : ''}"
	class:bg-cover={layout === 'full'}
	class:bg-center={layout === 'full'}
	style={layout === 'full' ? `background-image: url(${image})` : ''}
>
	{#if layout === 'full'}
		<!-- Darker overlay for better contrast in both modes -->
		<div class="absolute inset-0 text-white"></div>
	{/if}
	<div class="flex flex-col justify-center items-center px-12 md:px-0 py-12 w-full hero-content">
		<div
			class="container mx-auto max-w-96 bg-black/50 px-4 backdrop-blur-sm {layout === 'split'
				? 'grid items-center gap-4 md:grid-cols-2'
				: 'flex flex-col items-center justify-center'}"
		>
			<!-- Text Content -->
			<div
				class="{layout === 'full' ? `text-${textAlign} text-white` : 'pr-8'} 
                   {layout === 'split' ? 'order-1 md:order-none' : ''}"
			>
				<h1
					class="mb-4 text-4xl font-bold md:text-4xl lg:text-4xl xl:text-6xl
                       {layout === 'split' ? 'text-gray-900 dark:text-white' : 'text-white'}"
					transition:fade
				>
					{h1}
				</h1>
				<h3 class="text-white text-xl">{h3}</h3>
				<p class="text-white text-sm">
					{slotted}
				</p>
				{#if slogan}
					<p
						class="mb-4 text-xl md:text-xl
                           {layout === 'split' ? 'text-gray-600 dark:text-gray-400' : 'text-white'}"
						transition:fade={{ delay: 400 }}
					>
						{slogan}
					</p>
					<p class="mb-4 text-white text-xl">{content}</p>
				{/if}
			</div>

			<!-- Image for split layout -->
			{#if layout === 'split'}
				<div class="relative order-none md:order-1 w-full">
					<img
						src={image}
						alt="Hero"
						class="block sm:block md:block lg:block shadow-xl dark:shadow-gray-700/30 rounded-lg w-full h-auto"
						transition:fade
					/>
					<img
						src={image2}
						alt="Hero"
						class="lg:hidden block shadow-xl dark:shadow-gray-700/30 rounded-lg w-full h-auto"
						transition:fade
					/>
				</div>
			{/if}
			<div class="mt-8 font-semibold text-white text-2xl text-center">{cta}</div>
		</div>
	</div>
</div>

<style>
	.hero {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center; /* Center content vertically */
		align-items: center;
		background-size: cover;
		background-position: center;
		height: 100vh; /* Full viewport height */
		max-height: 100vh; /* Ensure it doesn't overflow */
		min-height: 500px; /* Minimum height on small screens */
	}

	.hero-content {
		width: 100%;
		padding-top: 3rem; /* Add some top padding */
		padding-bottom: 5rem; /* Add space for the scroll button */
	}
</style>
