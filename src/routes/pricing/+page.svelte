<script>
	import { goto } from '$app/navigation';
	import SpecialOffer from '$lib/Components/SpecialOffer.svelte';
	import PricingGrid from '$lib/Components/PricingGrid.svelte';
	import { pricingPlans } from '$lib/data/pricing.js';
</script>

<!-- CTA Section with Product Grid -->
<section class="bg-gray-50 dark:bg-gray-900">
	<div class="page-content">
		<!-- Product Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
			<!-- Product cards will be mapped here -->
			<PricingGrid plans={pricingPlans} />
		</div>
		<SpecialOffer />
	</div>
</section>
