<!-- src/lib/components/Image.svelte -->
<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    /** @typedef {'fixed' | 'responsive' | 'contain'} ImageFit */
    /** @typedef {'lazy' | 'eager'} LoadingStrategy */
    /** @typedef {'error' | 'loading' | 'loaded'} ImageState */

    /** @typedef {Object} ImageProps
     * @property {string} src - Base image path
     * @property {string} alt - Alt text for accessibility
     * @property {number | string | undefined} width - Image width in pixels
     * @property {number | string | undefined} height - Image height in pixels
     * @property {ImageFit} [fit='responsive'] - How image should fit container
     * @property {LoadingStrategy} [loading='lazy'] - Image loading strategy
     * @property {string} [className] - Additional CSS classes
     * @property {boolean} [hasDensityVersions=false] - Whether image has density variants
     * @property {string} caption - Caption for the image
     */

    /** @type {ImageProps} */
    let {
        src,
        alt,
        width = '100%',
        height = 'auto',
        fit = 'responsive',
        loading = 'lazy',
        className = '',
        hasDensityVersions = false,
        caption = ''
    } = $props();

    /** @type {boolean} */
    const hasExplicitDimensions = (
        (typeof width === 'number' || typeof width === 'string') && 
        (typeof height === 'number' || typeof height === 'string') &&
        !isNaN(Number(width)) && 
        !isNaN(Number(height))
    );

    const baseClasses = {
        fixed: hasExplicitDimensions
            ? 'object-cover'
            : 'w-full h-full object-cover',
        responsive: hasExplicitDimensions
            ? 'object-cover'
            : 'w-full h-auto object-cover',
        contain: hasExplicitDimensions
            ? 'object-contain'
            : 'max-w-full max-h-full object-contain'
    }[fit];

    const containerClasses = {
        fixed: `relative overflow-hidden ${hasExplicitDimensions ? '' : 'w-full h-full'}`,
        responsive: `relative ${hasExplicitDimensions ? '' : 'w-full'}`,
        contain: `relative flex items-center justify-center ${hasExplicitDimensions ? '' : 'w-full h-full'}`
    }[fit];

    /** @type {Record<string, string>} */
    const styleDimensions = hasExplicitDimensions
        ? { style: `width: ${Number(width)}px; height: ${Number(height)}px;` }
        : {};

    let imageRef;
    let imageState = $state('loading');
    let showLoading = $state(false);

    /** @type {string[]} */
    const densities = ['1x', '2x', '3x'];

    /** 
     * @param {string} baseSrc
     * @param {string} density
     * @returns {string}
     */
    function getDensityPath(baseSrc, density) {
        if (density === '1x') return baseSrc;
        const extension = baseSrc.split('.').pop() ?? '';
        const basePath = baseSrc.slice(0, - (extension.length + 1));
        return `${basePath}@${density}.${extension}`;
    }

    onMount(() => {
        if (!hasDensityVersions) {
            const loadingTimeout = setTimeout(() => {
                if (imageState === 'loading') {
                    showLoading = true;
                }
            }, 200);
            
            return () => clearTimeout(loadingTimeout);
        }
        
        if (imageRef && hasDensityVersions) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            imageState = 'loading';
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.1 }
            );
            observer.observe(imageRef);
        }
    });

    /** @param {Event} event */
    function handleError(event) {
        imageState = 'error';
        console.error('Image failed to load:', src);
    }

    /** @param {Event} event */
    function handleLoad(event) {
        imageState = 'loaded';
        showLoading = false;
    }
</script>

<div 
    class="{containerClasses} {className}"
    {...styleDimensions}
>
    {#if hasDensityVersions}
        <picture bind:this={imageRef}>
            <!-- WebP format with different densities -->
            <source
                type="image/webp"
                srcset={densities
                    .map(density => {
                        const webpPath = src.replace(/\.[^/.]+$/, '.webp');
                        return `${getDensityPath(webpPath, density)} ${density}`;
                    })
                    .join(', ')}
            />
            
            <!-- Original format with different densities -->
            <source
                srcset={densities
                    .map(density => `${getDensityPath(src, density)} ${density}`)
                    .join(', ')}
            />
            
            <img
                {src}
                {alt}
                class="{baseClasses} transition-opacity duration-300"
                {width}
                {height}
                {loading}
                in:fade={{ duration: 300 }}
                on:error={handleError}
                on:load={handleLoad}
            />
        </picture>
    {:else}
        <div bind:this={imageRef}>
            <img 
                {src}
                {alt}
                class="{baseClasses} transition-opacity duration-300"
                {width}
                {height}
                {loading}
                in:fade={{ duration: 300 }}
                on:error={handleError}
                on:load={handleLoad}
            />
        </div>
    {/if}

    {#if imageState === 'loading' && showLoading}
        <div 
            class="absolute inset-0 bg-gray-100 dark:bg-gray-800"
            aria-hidden="true"
        />
    {/if}

    {#if imageState === 'error'}
        <div class="absolute inset-0 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
            <div class="p-4 text-center">
                <svg 
                    class="mx-auto w-12 h-12 text-gray-400 dark:text-gray-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
                <p class="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                    Failed to load image
                </p>
            </div>
        </div>
    {/if}
    {#if caption}
        <figcaption class="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            {caption}
        </figcaption>
    {/if}
</div>