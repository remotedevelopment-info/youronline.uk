<script>
	import { browser } from '$app/environment';
	let {
		header,
		openHeader = '',
		headerStyle = '',
		variant,
		opened = false,
		icon = '',
		id,
		comment = 'Click to open',
		children
	} = $props();
	let openState = $state(opened);

	$effect(() => {
		if (variant === 'inline' && browser) {
			document.documentElement.style.setProperty('--accordion-header-background', 'none');
		}
	});

	function toggleOpen() {
		openState = !openState;
	}

	const downarrow = '/images/icons/down.svg';
</script>

<div class="accordion-container">
	<div class="accordion size {openState ? 'large' : 'small'}">
		<div
			class="accordion-header {headerStyle} {openState ? 'opened' : 'closed'}"
			onclick={toggleOpen}
			onkeypress={toggleOpen}
			role="button"
			tabindex="0"
			aria-expanded={openState}
			aria-controls={`accordion-body-${id}`}
		>
			<div class="accordion-header__text">
				{#if !openState}
					<div class="accordion-header__text--header {variant}">
						<h4>{header}</h4>
					</div>
					<div class="accordion-header__text--comment">
						<em>
							{comment}
						</em>
					</div>
				{:else}
					<div class="accordion-header__text--header {variant} inline">
						<h3>{openHeader}</h3>
					</div>
				{/if}
			</div>
			<button class="control" aria-label={openState ? 'Close accordion' : 'Open accordion'}>
				{#if openState}
				<svg class:turn={openState} width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M7 10l5 5 5-5z" />
				  </svg>
				{:else}
				<svg class:turn={openState} width="48" height="48" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M7 10l5 5 5-5z" />
				  </svg>
				{/if}
			</button>
		</div>
		<div class="accordion-icon">
			{icon}
		</div>
		<div class="accordion-body {openState ? 'opened' : 'closed'}">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.accordion-container {
		display: block;
		z-index: 10;
	}
	.accordion {
		/* set pointer to an arrow */
		cursor: pointer;
		pointer-events: auto;
	}
	.size.small {
		font-size: smaller;
		margin-left: 0;
	}
	.size.large {
		height: auto;
		font-size: small;
	}
	.accordion {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		margin: 0.25rem 0;
		border: 1px outset var(--medium-dark);
		background: var(--dark);
	}

	.size.small .accordion-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 100%;
		font-size: 1.25rem;
		border-radius: 0.25rem;
	}
	.size.small .accordion-header.emphasis {
		font-weight: 700;
	}
	.accordion-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		font-size: 2rem;
		background: var(--accordion-header-background, white);
		color: var(--accordion-header-color, black);
		box-shadow: 0 0 1.5rem var(--dark);
		font-weight: 600;
	}
	.accordion-header.closed {
		padding: 0 1rem 1.5rem;
		opacity: 0.85;
	}
	.accordion-header.closed h4 {
		font-size: 2rem;
	}
	.accordion-header.opened {
		color: var(--accordion-header-color, white);
		background: var(--accordion-header-background, transparent);
		padding: 0 0.5rem;
	}
	.accordion-header.opened h3 {
		font-size: 3rem;
	}
	.accordion-header.closed h4 {
		color: var(--accordion-header-color, black);
	}
	.accordion-header__text {
		align-items: center;
		justify-content: start;
	}
	.accordion-header__text--header.inline {
		font-weight: 400;
		min-width: unset;
		--accordion-header-background: var(--dark);
	}
	.accordion-header__text--comment {
		font-size: 1rem;
		font-style: italic;
	}
	.accordion-header.emphasis {
		font-weight: 700;
		color: var(--white);
		margin-left: 0;
	}
	.accordion.size.small .accordion-header.large {
		font-size: 1.25rem;
		font-weight: 900;
		margin: 0.25rem 0;
	}
	.accordion.size.large .accordion-header.large {
		font-family: 'Archivo Black', sans-serif;
		font-size: 1.75rem;
		font-weight: 900;
		margin: 0.5rem 0.25rem 0;
	}
	.accordion-body {
		padding: 0 0.5em;
		margin: 0;
		background: var(--accordion-body-background, var(--light));
		color: var(--accordion-body-color, var(--dark));
		display: none;
		font-size: large;
	}
	.accordion-body.opened {
		display: block;
	}
	.accordion-body.closed {
		display: none;
	}

	.accordion-header .control {
		fill: var(--accordion-header-color, black);
		filter: invert(82%) sepia(93%) saturate(1352%) hue-rotate(200deg) brightness(119%)
			contrast(119%);
		font-weight: 900;
		transition: all 0.5s ease-out;
		width: 48px;
		height: auto;
	}
	.accordion-header.opened .control {
		fill: var(--accordion-header-color, white);
		filter: invert(22%) sepia(93%) saturate(1352%) hue-rotate(200deg) brightness(119%)
			contrast(119%);
	}
	.accordion-header.closed .control {
		fill: var(--accordion-header-color, red);
		filter: invert(22%) sepia(93%) saturate(1352%) hue-rotate(200deg) brightness(119%)
			contrast(119%);
	}
	.control .turn {
		transform: rotate(180deg);
	}
</style>
