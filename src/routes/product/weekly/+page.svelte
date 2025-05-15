<script>
	import Feature from '$lib/Components/Feature.svelte';
	import PricingCard from '$lib/Components/PricingCard.svelte';
	import { pricingPlans, serviceDetails } from '$lib/data/pricing.js';
	
	// Get the weekly plan and its details
	const plan = pricingPlans.find(p => p.period === "week");
	const details = serviceDetails.weekly;
</script>

<svelte:head>
	<title>{details.title} - YourOnline.app</title>
	<meta name="description" content={details.subtitle} />
</svelte:head>

<!-- Hero Banner -->
<Feature 
	background="var(--light-gray)" 
	foreground="var(--black)"
>
	{#snippet heading()}
		<span>{details.title}</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="mx-auto w-full max-w-sm">
			<PricingCard {...plan} showLink={false}/>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="flex flex-col gap-6 p-6 text-brand-100 dark:text-brand-100">
			<h2 class="font-bold text-3xl">{details.subtitle}</h2>
			<p class="text-lg">{details.description}</p>
			
			<h3 class="mt-4 font-bold text-xl">Perfect For:</h3>
			<ul class="space-y-2 pl-6 list-disc">
				{#each details.useCases as useCase}
					<li>{useCase}</li>
				{/each}
			</ul>
			<div class="gap-8 grid grid-cols-1 md:grid-cols-2">
				{#each details.process as step, i}
					<div class="flex items-start gap-4">
						<div class="flex justify-center items-center bg-blue-600 rounded-full w-10 h-10 font-bold text-white text-xl">
							{i+1}
						</div>
						<p class="text-lg">{step}</p>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
</Feature>

<!-- Benefits -->
<Feature
	background="var(--light-gray)"
	foreground="var(--black)"
>
	{#snippet heading()}
		<span>Why Weekly Sprints?</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Rapid Progress</h3>
			<p class="mb-4">Our focused weekly sprints deliver tangible results every week. See your ideas come to life faster than traditional development cycles.</p>
			
			<h3 class="mb-4 font-bold text-2xl">Complete Infrastructure</h3>
			<p>We handle all the technical details, from hosting to staging environments, so you can focus on your business while we handle the implementation.</p>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">AI-Powered Development</h3>
			<p class="mb-4">We leverage AI agents to accelerate development, allowing our human experts to focus on complex problems and strategic decisions.</p>
			
			<h3 class="mb-4 font-bold text-2xl">Daily Communication</h3>
			<p>With daily standups and continuous progress updates, you're always in the loop about what's happening with your project.</p>
		</div>
	{/snippet}
</Feature>

<!-- Weekly Scope -->
<Feature
	background="var(--white)"
	foreground="var(--black)"
>
	{#snippet heading()}
		<span>What Can Be Accomplished in a Week?</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold dark:text-brand-600 text-2xl">Frontend Development</h3>
			<ul class="space-y-2 mb-6 pl-6 list-disc">
				<li>Complete website landing pages</li>
				<li>Interactive UI components</li>
				<li>Frontend application features</li>
				<li>Responsive design implementation</li>
			</ul>
			
			<h3 class="mb-4 font-bold text-brand-600 text-2xl">AI Implementation</h3>
			<ul class="space-y-2 pl-6 list-disc">
				<li>Custom AI agent setup</li>
				<li>Integration with existing systems</li>
				<li>Workflow automation</li>
				<li>LLM fine-tuning and configuration</li>
			</ul>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-brand-600 text-2xl">Backend Features</h3>
			<ul class="space-y-2 mb-6 pl-6 list-disc">
				<li>API endpoint development</li>
				<li>Data modeling and integration</li>
				<li>Authentication systems</li>
				<li>Performance optimizations</li>
			</ul>
			
			<h3 class="mb-4 font-bold text-brand-600 text-2xl">DevOps Setup</h3>
			<ul class="space-y-2 pl-6 list-disc">
				<li>CI/CD pipeline configuration</li>
				<li>Hosting environment setup</li>
				<li>Monitoring and logging</li>
				<li>Security implementation</li>
			</ul>
		</div>
	{/snippet}
	{#snippet footer()}
		<div class="p-8 text-center">
			<h2 class="mb-6 font-bold text-brand-600 dark:text-brand-800 text-3xl">Ready to accelerate your development?</h2>
			<div class="flex flex-wrap justify-center gap-4">
				<button onclick={()=> goto("https://calendly.com/youronline-app/30min")} 
					class="bg-brand-500 hover:bg-brand-600 dark:bg-brand-800 px-6 py-3 rounded-lg font-medium text-white">
					Book a Consultation
				</button>
			</div>
		</div>
	{/snippet}
</Feature>

