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
	<div class="flex flex-col justify-center items-center bg-black/50 mt-96 px-12 md:px-0 py-12 w-full">
		<div
			class="container mx-auto px-4 {layout === 'split'
				? 'grid items-center gap-4 md:grid-cols-2'
				: 'flex flex-col items-center justify-center'}"
		>
			<!-- Text Content -->
			<div
				class="{layout === 'full' ? `text-${textAlign} text-white` : 'pr-8'} 
                   {layout === 'split' ? 'order-1 md:order-none' : ''}"
			>
				<h1
					class="mb-4 text-6xl font-bold md:text-5xl lg:text-6xl xl:text-8xl
                       {layout === 'split' ? 'text-gray-900 dark:text-white' : 'text-white'}"
					transition:fade
				>
					{h1}
				</h1>

				<h2
					class="mb-8 text-2xl md:text-3xl
                       {layout === 'split' ? 'text-gray-700 dark:text-gray-300' : 'text-white'}"
					transition:fade={{ delay: 200 }}
				>
					{h2}
				</h2>

				{#if slogan}
					<h3
						class="mb-4 text-xl md:text-2xl
                           {layout === 'split' ? 'text-gray-600 dark:text-gray-400' : 'text-white'}"
						transition:fade={{ delay: 400 }}
					>
						{slogan}
					</h3>
					<p class="mb-4 text-white text-xl">{content}</p>
				{/if}
				<p class="text-white text-xl">
					{slotted}
				</p>
				<h3 class="text-white">{h3}</h3>
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
			<div class="items-self-center mt-12 text-white text-2xl" >{cta}</div>
		</div>
	</div>
</div>

<style>
	.hero {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-size: cover;
		height: calc(100vh - 16rem);
	}
	@media (min-width: 640px) {
		.hero {
			height: calc(100vh - 20rem);
		}
	}
</style>
