<script lang="ts">
    import { onMount } from 'svelte';
    import PricingCard from './PricingCard.svelte';
    import type { PricingProps } from './PricingCard.svelte';

    interface PricingGridProps {
        paypalId?: string;
        planType?: string;
        title?: string;
        subtitle?: string;
		terms?: string;
		footnote?: string;
        plans: PricingProps[];
    }

	let {
		paypalId = '', 
		planType = '', 
		title = 'Pricing Plans',
		subtitle = `Choose the plan that fits your needs.  
			Prices for weekly/monthly are fixed cost alternatives to hourly rate charging.  
			New clients pay a refundable* commencement fee of 50% up-front, then invoiced weekly/monthly after 14 days. 
			Specialist is a solo developer. Team is a supervised team of remote developers with a maximum size of three developers and one lead developer. 
			We recommend teams for larger projects, and a specialist for urgent and short term projects.`,
		terms = 'Prices subject to monthly review (depending upon demand). Book now at the stated price for a renewable contract for up to six months.',
		footnote = '*Refundable fee the unused proportion, e.g.after 7 days, if not completely satisfied we can return half of your downpayment.',
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
			<p class="mx-auto max-w-xl text-gray-600 dark:text-gray-400 text-lg">
				{terms}
			</p>
			<p class="mx-auto max-w-xl text-gray-600 dark:text-gray-400 text-base">
				{footnote}
			</p>
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
			be billed in US$ in advance.
		</p>
		<p>
			Initial contract invoiced in advance on agreed payment terms. We provide a shared timesheet for hourly rate contract. 
			FREE Website is published on a YourOnline.uk subdomain. Updates are published for your
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
