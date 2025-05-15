<script lang="ts">
	let { colour, image, caption, background, header, children } = $props();
	// set css properties based on parameters
	let style:string = $state('');
	if (!image.length) {
		style = `
		background-color: ${background};
        background-size: cover; 
		background-position: center;
		color: white`;
	} else {
		style = `
		background-color: ${background};
        background-image: url(${image}); 
		background-size: cover; 
		background-position: center;
        color: ${colour}`;
	}

</script>

<div class="band" {style}>
	<div class="panel">
		{#if header}
			<div class="panel-header">{header}</div>
		{/if}
		{@render children()}
	</div>
	<div class="caption">
		{caption}
	</div>
</div>

<style>
	.band {
		font-size: 1.25rem;
		min-height: max-content;
		height: fit-content;
		flex: 1 1 auto;
		display: flex;
		background-size: cover;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0;
		margin: 0;
		z-index: 5;
	}
	.panel {
		margin: 0;
		padding: 2rem;
		background: rgba(0, 0, 0, 0.5);
		text-align: left;
		font-size: 1.25rem;
	}
	.panel-header {
		text-align: center;
		font-size: small;
		text-transform: uppercase;
	}
	.caption {
		font-size: x-small;
		text-align: center;
		color: var(--light);

	}
	@media (min-width: 600px) {
		.band {
			padding: 1rem 0;
		}
		.panel {
			margin: 1rem 4rem;
			font-size: 1.25rem;
		}
	}
	@media (min-width: 768px) {
		.band {
			padding: 4rem 2rem;
		}
		.panel {
			margin: 2rem 8rem;
			max-width: 800px;
			font-size: 1.5rem;
		}
	}
</style>
