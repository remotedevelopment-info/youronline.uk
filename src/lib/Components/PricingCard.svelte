<script lang="ts">
	import { goto } from '$app/navigation';
	import PaypalOffer from '$lib/Components/PaypalOffer.svelte';

	export interface Feature {
		name: string; // Feature description
		included: boolean; // Whether feature is included
	}

	export interface PricingProps {
		title: string; // Plan name
		description?: string; // Plan description
		link: string; // Plan link
		price: number; // Monthly price
		features: Feature[]; // Array of features
		isPopular?: boolean; // Whether this is the popular plan
		buttonText?: string; // CTA button text
		paypalId?: string; // PayPal button ID
		period?: string; // Billing period
		showLink?: boolean;
		url?: string; // URL to redirect on button click
	}

	/** @type {PricingProps} */
	let {
		title,
		description = '',
		link,
		price,
		features,
		isPopular = false,
		buttonText = 'Get Started',
		period = 'month',
		showLink = true
	} = $props<PricingProps>();

	async function navigate(period: string, title?: string): Promise<void> {
		const url = `/product/meeting?period=${period}&title=${title || ''}`;
		console.log('Navigating to:', url);
		await goto(url);
	}
</script>

<div
	class="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800
            {isPopular
		? 'ring-2 ring-blue-700 dark:ring-blue-300'
		: 'ring-1 ring-brand-400 dark:ring-brand-500'}"
>
	{#if isPopular}
		<div class="top-0 right-6 absolute -translate-y-1/2">
			<span class="bg-blue-600 dark:bg-blue-500 px-3 py-1 rounded-full text-white text-sm">
				Most Popular
			</span>
		</div>
	{/if}

	<div class="mb-8">
		<h3 class="mb-2 font-bold text-gray-900 dark:text-white text-3xl text-center">{title}</h3>
		<p class="mb-4 text-gray-600 dark:text-gray-400 text-left">
			{description}
		</p>

		<div class="mt-8 mb-0 text-center cta">
			{#if showLink}
				<a
					href={link}
					class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 w-full font-medium text-white text-sm text-center"
				>
					Learn more
				</a>
			{/if}
		</div>
	</div>

	<ul class="flex-grow space-y-4 mb-8">
		{#each features as feature}
			<li class="flex items-center gap-3">
				<span
					class={feature.included
						? 'text-green-500 dark:text-green-400'
						: 'text-gray-400 dark:text-gray-500'}
				>
					{#if feature.included}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					{:else}
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</span>
				<span
					class="{feature.included
						? 'text-gray-700 dark:text-gray-300'
						: 'text-gray-500 dark:text-gray-400'} text-left"
				>
					{feature.name}
				</span>
			</li>
		{/each}
	</ul>

	<div class="mb-4 text-right">
		<span class="font-bold text-gray-900 dark:text-white text-4xl">£{price}</span>
		<span class="text-gray-500 dark:text-gray-400">/{period}</span>
	</div>
	<button
		onclick={() => navigate(period)}
		class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-lg w-full text-white transition-colors duration-200"
	>
		{buttonText}
	</button>
</div>
