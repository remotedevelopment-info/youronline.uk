<script>
    import { fade } from 'svelte/transition';
    import TestimonialCard from './TestimonialCard.svelte';
    
    /** @typedef {import('./TestimonialCard.svelte').TestimonialProps} TestimonialProps */

    /** @typedef {Object} GridProps
     * @property {TestimonialProps[]} testimonials - Array of testimonials
     * @property {string} [title] - Optional section title
     * @property {string} [subtitle] - Optional section subtitle
     */

    /** @type {GridProps} */
    let { 
        testimonials,
        title = "What Our Customers Say",
        subtitle = "Discover how Cadence CRM helps businesses find their rhythm"
    } = $props();
</script>

<article class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12" in:fade>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
             in:fade={{ delay: 200 }}>
            {#each testimonials as testimonial}
                <div in:fade={{ delay: 300 }}>
                    <TestimonialCard {...testimonial} />
                </div>
            {/each}
        </div>
    </div>
</article>