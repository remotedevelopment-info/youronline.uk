<script>
	import Feature from '$lib/Components/Feature.svelte';
	import PricingCard from '$lib/Components/PricingCard.svelte';
	import { pricingPlans, serviceDetails } from '$lib/data/pricing.js';

	// Get the hourly plan and its details
	const plan = pricingPlans.find(p => p.period === "hour");
	const details = serviceDetails.hourly;
</script>

<svelte:head>
	<title>{details.title} - YourOnline.app</title>
	<meta name="description" content={details.subtitle} />
</svelte:head>

<!-- Hero Banner -->
<Feature background="var(--light-gray)" foreground="var(--black)">
	{#snippet heading()}
		<span>{details.title}</span>
	{/snippet}

	{#snippet leftside()}
		<div class="mx-auto w-full max-w-sm">
			<PricingCard {...plan} showLink={false} />
		</div>
	{/snippet}

	{#snippet rightside()}
		<div class="flex flex-col gap-6 p-6">
			<h2 class="font-bold text-3xl">{details.subtitle}</h2>
			<p class="text-lg">{details.description}</p>

			<h3 class="mt-4 font-bold text-xl">Perfect For:</h3>
			<ul class="space-y-2 pl-6 list-disc">
				{#each details.useCases as useCase}
					<li class="dark:text-white">{useCase}</li>
				{/each}
			</ul>

			<div class="gap-8 grid grid-cols-1 md:grid-cols-2 mt-8">
				{#each details.process as step, i}
					<div class="flex items-start gap-4">
						<div
							class="flex justify-center items-center bg-blue-600 rounded-full w-10 h-10 font-bold text-white text-xl"
						>
							{i + 1}
						</div>
						<p class="text-lg">{step}</p>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
</Feature>

<!-- Benefits -->
<Feature background="var(--light-gray)" foreground="var(--black)">
	{#snippet heading()}
		<span>Why On-Demand Expertise?</span>
	{/snippet}

	{#snippet leftside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Cost-Effective Expertise</h3>
			<p class="mb-4">
				Access senior developer talent without the cost of a full-time hire. Our hourly model means
				you only pay for what you need.
			</p>

			<h3 class="mb-4 font-bold text-2xl">AI-Enhanced Development</h3>
			<p>
				We combine human expertise with cutting-edge AI tools to deliver solutions faster and more
				efficiently than traditional development approaches.
			</p>
		</div>
	{/snippet}

	{#snippet rightside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Knowledge Transfer</h3>
			<p class="mb-4">
				We don't just solve problems, we teach your team how to use AI tools effectively, building
				your internal capabilities for the future.
			</p>

			<h3 class="mb-4 font-bold text-2xl">Rapid Response</h3>
			<p>
				When technical challenges arise, you need answers quickly. Our on-demand service ensures you
				get expert help when you need it most.
			</p>
		</div>
	{/snippet}
	{#snippet footer()}
		<h2 class="mb-6 font-bold text-3xl">Ready to get started?</h2>
		<div class="bg-black w-full">
			<div class="mt-4">
				<!-- Calendly inline widget begin -->
				<div
					class="calendly-inline-widget"
					data-url="https://calendly.com/youronlineuk/discovery-chat"
					style="min-width:320px;height:700px;"
				></div>
				<script
					type="text/javascript"
					src="https://assets.calendly.com/assets/external/widget.js"
					async
				></script>
				<!-- Calendly inline widget end -->
			</div>
		</div>
	{/snippet}
</Feature>
