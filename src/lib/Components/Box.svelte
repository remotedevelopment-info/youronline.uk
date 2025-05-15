<script lang="ts">
	let { children, title = 'Box', variant = 'full', scheme = '', rounded = 0 } = $props();
</script>

<div class="box {variant} {scheme}" style="--box-border-radius: {rounded}px; --box-width: {variant === 'half' ? '50%' : '100%'}">
	<h2>{title}</h2>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	h2 {
		text-align: center;
	}
	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		box-shadow: 2px 0 2px rgba(0, 0, 0, 0.3);
		border-radius: var(--box-border-radius, 20px);
		background: rgb(var(--brand-600));
		color: rgb(var(--brand-200));
		margin: 3rem auto;
		padding: 1rem;
		min-width: 300px;
	}
	.box.full {
		width: 100%;
	}
	.box.wide {
		width: 80%;
	}
	.box.half {
		width: 50%;
	}
	.box.quarter {
		width: 25%;
	}
	.box.quarter,
	.box.half {
		min-width: 400px;
	}
	.box h2 {
		margin: 1rem;
	}
	@media (min-width: 600px) {
		.box {
			padding: 1rem;
		}
	}
	@media (min-width: 768px) {
		.box {
			padding: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.box {
			padding: 2rem;
		}
	}
</style>
