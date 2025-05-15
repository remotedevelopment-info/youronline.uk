<script lang="ts">
    import { onMount } from 'svelte';
    import PricingCard from './PricingCard.svelte';
    import type { PricingProps } from './PricingCard.svelte';

    interface PricingGridProps {
        paypalId?: string;
        planType?: string;
        title?: string;
        subtitle?: string;
        plans: PricingProps[];
    }

	let {
		paypalId = '', 
		planType = '', 
		title = 'Pricing Plans',
		subtitle = 'Choose the plan that fits your needs',
		plans
	} = $props() as PricingGridProps;

    onMount(() => {
        if (paypalId.length > 0) {
            const paypalButton = document.getElementById(paypalId);
            if (paypalButton) {
                paypalButton.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
</script>

<div class="bg-gray-50 dark:bg-gray-900 py-12">
	<div class="mx-auto px-4 container">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl">
				{title}
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600 dark:text-gray-400 text-xl">
				{subtitle}
			</p>
			<a href="/product/free">Start for free</a>
		</div>

		<div class="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl text-right">
			{#each plans as plan}
				<PricingCard {...plan} />
			{/each}
		</div>
	</div>
	<div class="px-12 md:px-16 lg:px-24">
		<h3>Simple terms</h3>
		<p>
			UK clients may be billed in UK£. VAT is not included in the price. Clients outside the UK may
			be billed in US$.
		</p>
		<p>
			Subscriptions are paid in advance and may be cancelled at any time preventing next payment.
			FREE Website is published on a YourOnline.app subdomain. Updates are published for your
			approval and updates can be reverted. <a href="/articles/terms-conditions"
				>Terms and Conditions</a
			>.
		</p>
		<p>
			Development and staging include hosting for the duration of the project. Domains and hosting
			of live sites is not included.
		</p>
	</div>
</div>

<style>
	p {
		margin-bottom: 1rem;
	}
</style>
