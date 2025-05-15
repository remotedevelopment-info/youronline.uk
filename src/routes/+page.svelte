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
	<section id="hero">
		<!-- Hero component ... Split layout with image on right -->
		<Hero
			layout="full"
			image="/images/person1.jpeg"
			h1="Your online business idea"
			h2="You have a brilliant idea. How do you put it in front of the world."
			slogan="We work with you to create a compelling online experience."
			content="You pay one subscription for development, hosting and updates."
			slotted="Create a plaform.  Implement your unique idea.  Get your business online."
			h3="Get leads.  Make sales.  Repeat business."
		/>
		<AnimatedScroll next="features" />
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
                    <h3>Get more sales every day</h3>
                    <p class="text-gray-900 dark:text-gray-100 text-2xl">
                        <strong>YourOnline</strong> a FAST site template using modern technology to render your content
                        very efficiently.
                    </p>
                    <p>
                        You can collect information from simple to build forms, connect your Cadence-CRM to the
                        site and sort our your online presence quickly. A minimum of effort.
                    </p>
                    <p>
                        Your YourOnline site is a "frontend" site that can publish your events and take
                        bookings. With Cadence-CRM integration, your new prospects can signup to your newsletter
                        and you can send them emails from the CRM.
                    </p>
                </div>
            {/snippet}
            
            {#snippet footer()}
                Get your site build started
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

	<!-- Contact Section -->
	<section id="contact">
		<Contact />
	</section>

	<section id="exclusive">
		<ExclusiveOffer />
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
	/* .right {
		text-align: right;
	} */
</style>
