<script>
    /** @typedef {'double' | 'single'} FeatureFormat */
    
    /** @typedef {Object} FeatureProps
     * @property {FeatureFormat} [format='double'] - Layout format
     * @property {string} [background='var(--black)'] - Background color
     * @property {string} [foreground='var(--white)'] - Foreground color
     * @property {string} [heading=''] - Heading content
     * @property {string} [leftside=''] - Left content
     * @property {string} [rightside=''] - Right content
     * @property {string} [footer=''] - Footer content
     */

    /** @type {FeatureProps} */
    let {
        format = 'double',
        background = 'var(--black)',
        foreground = 'var(--white)',
        heading,
        leftside,
        rightside,
        footer
    } = $props();

    /** @type {string} */
    let featureStyle = $derived(
        `background: ${background}; color: ${foreground}`
    );
</script>
<div class="feature" style={featureStyle}>

    {#if heading}
        <div class="feature-header">
            <h1 class="mb-0 font-bold text-6xl md:text-8xl text-center">
                {@render heading()}
            </h1>
        </div>
    {/if}

    <div class="flex lg:flex-row flex-col justify-center gap-4 mt-0 p-0 w-full">
        <!-- Left side -->
        <div class="feature-side h-auto flex-none p-4 md:p-8 flex items-center justify-center
                    {format === 'double' ? 'lg:w-[42%]' : 'lg:w-full'}
                    [&:has(img)]:w-192 [&:has(img)]:p-0">
            {@render leftside()}
        </div>

        {#if format === 'double'}
            <!-- Right side -->
            <div class="flex flex-none justify-center items-center p-4 [&:has(img)]:p-0 md:p-8 w-full [&:has(img)]:w-full lg:w-[42%] h-auto feature-side">
                {@render rightside()}
            </div>
        {/if}
    </div>

    {#if footer}
        <div class="flex flex-col items-center mx-auto pb-12 w-full">
            {@render footer()}
        </div>
    {/if}
</div>

<style>
    h2 {
        font-size: 3rem;
    }
    .feature {
        border: 12px inset transparent;
        margin: auto;
        max-width: 1440px;
    }
    .feature-header {
        padding: 0;
        background: rgb(var(--brand-900));
        color: rgb(var(--brand-100));
    }
    .feature-header h1 {
        color: rgb(var(--brand-100));
        padding: 2rem;
        margin: 0;
        text-align: center;
        font-size: 4rem;
    }
    .feature-side {
        width: 100%;
        height: auto;
        flex: 0 1 auto;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .feature-side:has(img) {
        width: 100%;
        padding: 0;
    }

    /* Global styles for images within slots */
    .feature-side :global(img) {
        overflow: hidden;
        padding: 0;
        width: auto;
        height: 100%;
        min-height: 320px;
        max-width: 100%;
        object-fit: cover;
    }

    @media (min-width: 1024px) {
        .feature-side :global(img) {
            overflow: hidden;
            padding: 0;
            border-radius: 20px;
            max-height: 600px;
        }
    }

    @media (min-width: 1440px) {
        .feature-side {
            padding: 2rem;
        }
    }

    .feature-image-wrapper {
        @apply w-auto h-auto overflow-hidden;
    }

    @media (min-width: 1024px) {
        .feature-image-wrapper {
            @apply p-0 rounded-2xl;
        }
        .feature-image-wrapper :global(img) {
            @apply max-h-[600px];
        }
    }

    @media (min-width: 1440px) {
        .feature-image-wrapper {
            @apply p-8;
        }
    }
</style>