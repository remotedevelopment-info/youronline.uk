<script>
	import Hero from '$lib/Components/Hero.svelte';
	import Feature from '$lib/Components/Feature.svelte';
	import Featured from '$lib/Components/Featured.svelte';
	import TestimonialGrid from '$lib/Components/TestimonialGrid.svelte';
	import PricingGrid from '$lib/Components/PricingGrid.svelte';
	import Contact from '$lib/Components/Contact.svelte';
	import ExclusiveOffer from '$lib/Components/ExclusiveOffer.svelte';
	import SpecialOffer from '$lib/Components/SpecialOffer.svelte';
	import AnimatedScroll from '$lib/Components/AnimatedScroll.svelte';
	import { testimonialData } from '$lib/data/testimonials.js';
	import { pricingPlans } from '$lib/data/pricing.js';
</script>

<div>
	<section id="hero" class="relative">
		<!-- Hero component ... Split layout with image on right -->
		<Hero
			layout="full"
			image="/images/office-team.jpeg"
			h1="Need a project done fast?"
			h3="Remote Software development projects"
			slotted="We build software and websites using latest tools to reduce cost."
			slogan="Build your buisness idea."
		/>
		<AnimatedScroll next="features" xclass="hero-scroll" />
	</section>
	
	<!-- Features Section -->
	<section id="features">
		<!-- Features component -->
        <Feature format="double" background="var(--navy)" foreground="var(--white)">
            {#snippet heading()}
                Our Platform
            {/snippet}

            {#snippet leftside()}
                <img src="/images/office-work.jpeg" alt="Feature demonstration" width="800px" height="auto" />
            {/snippet}

            {#snippet rightside()}
                <div class="text-gray-900 dark:text-gray-100 text-2xl">
                    <h3>We build using components</h3>
                    <p class="text-gray-900 dark:text-gray-100 text-2xl">
                        <strong>YourOnline</strong> is a software delivery platform to build software and websites.
						We specialise in component based software for rapid deployment. 
                    </p>
                    <p>
						We also build a range of online apps and browser based businessa and sales tools that we can personalise and 
						integrate for your business.  
                    </p>
                    <p>
						We are a small team of independent software professionals who have a track record with 
						major corporate clients and small businesses.  We meet with you to understand your needs 
						and can build a frontend website or a complete system with backend databases and APIs.
                    </p>
					<p>We work remotely and in coordination with your team. Rapid production of online content, 
						supporting your business and making your projects a reality.  
					</p>
                </div>
            {/snippet}
            
            {#snippet footer()}
                We start with a free 45 minute consulttion to see if we are a good fit for your project. 
            {/snippet}
        </Feature>
		<AnimatedScroll next="testimonials" />
	</section>

	<!-- Testimonials Section -->
	<section id="testimonials">
		<!-- Testimonials component -->

		<TestimonialGrid
			testimonials={testimonialData}
			title="Success Stories"
			subtitle="See how businesses are orchestrating their success with Cadence CRM"
		/>
	</section>

	<!-- CTA Section with Product Grid -->
	<section id="pricing">
		<PricingGrid plans={pricingPlans} />
	</section>

	<div class="bg-black">
		<h2 class="text-center">Book a FREE discovery chat...</h2>
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
	<!-- Contact Section -->
	<section id="contact">
		<Contact />
	</section>
</div>

<style>
	h1 {
		font-size: 2rem;
	}
	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-top: 1rem;
	}
	
	section {
		position: relative;
		min-height: 100vh;
	}
	
	section#hero {
		overflow: hidden;
		height: 100vh; /* Fixed height to viewport */
		display: flex;
		flex-direction: column;
	}
	
	/* Add specific class for the hero section scroll indicator */
	:global(.hero-scroll) {
		z-index: 20;
	}
</style>
