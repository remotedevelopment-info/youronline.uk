<script>
    const currentYear = new Date().getFullYear();
    let theme; 
    let isDark = true;

    function toggleDarkMode() {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark');
    }

    function switchTheme(newTheme) {
        //theme = newTheme;
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    /**
     * Navigation link categories and their associated links
     * @type {Object.<string, Array.<{
     *   text: string,
     *   href: string,
     *   blurb?: string
     * }>>}
     */
    const links = {
        product: [
            { text: 'Features', href: '/#features' },
            { text: 'Pricing', href: '/pricing' },
            { text: 'Articles', href: '/articles' },
            { text: 'Success Stories', href: '/#testimonials' },
            { text: 'Components Demo', href: '/demo' },
        ],
        company: [
            { text: 'Cadence-CRM', href: 'https://crm.youronline.app' },
            {
                text: 'Youronline Website',
                href: 'https://youronline.uk',
                blurb: 'YourOnline Builds FAST websites like this one'
            },

        ],
        support: [
            { text: 'Contact', href: '/contact' },
            { text: 'Terms and Conditions', href: '/articles/terms-conditions' },
            { text: 'Privacy Policy', href: '/articles/privacy-policy' }
        ]
    };
</script>

<footer class="w-full">
    <div class="bg-gradient-to-b from-brand-200 dark:from-brand-700 to-brand-300 dark:to-brand-800 pt-2 pb-1 border-t border-brand-300 dark:border-brand-700 w-full">
        <div class="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div class="flex flex-col items-center mt-2">
                <img src="/logo.jpeg" alt="Cadence CRM" class="w-auto h-48" />
                <p class="mt-1 text-brand-500 dark:text-brand-400 text-sm text-base">
                    <em> Your business, in perfect rhythm </em>
                </p>
            </div>

            {#each Object.entries(links) as [category, items]}
                <div class="mt-8">
                    <h3 class="font-semibold text-brand-400 dark:text-brand-300 text-sm uppercase tracking-wider">
                        {category}
                    </h3>
                    <ul class="space-y-2 mt-4">
                        {#each items as { text, href, blurb }}
                            <li>
                                <a {href} class="text-brand-500 hover:text-brand-900 dark:hover:text-white dark:text-brand-400 text-base">
                                    {text}
                                </a>
                                {#if blurb}
                                    <br><em class="text-brand-400 dark:text-brand-300 text-xs">{blurb}</em>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex justify-center items-center gap-1 py-2 min-w-24">
        <button
            onclick={() => switchTheme('purple')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'purple' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="w-5 h-5">
                <circle cx="10" cy="10" r="8" fill="#7C3AED" />
            </svg>
        </button>

        <button
            onclick={() => switchTheme('blue')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'blue' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="w-5 h-5">
                <circle cx="10" cy="10" r="8" fill="#2563EB" />
            </svg>
        </button>

        <button
            onclick={() => switchTheme('green')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'green' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="w-5 h-5">
                <circle cx="10" cy="10" r="8" fill="#059669" />
            </svg>
        </button>

        <button
            onclick={() => switchTheme('orange')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'orange' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="w-5 h-5">
                <circle cx="10" cy="10" r="8" fill="#EA580C" />
            </svg>
        </button>

        <button
            onclick={() => switchTheme('red')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'red' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="w-5 h-5">
                <circle cx="10" cy="10" r="8" fill="#DC2626" />
            </svg>
        </button>
        <button onclick={() => toggleDarkMode()} class="text-xs">
            {isDark === false ? '☀️' : '🌙'}
        </button>
    </div>

    <div class="bg-gradient-to-b from-brand-300 dark:from-brand-800 to-brand-400 dark:to-brand-900 pt-2 pb-3 border-t border-brand-300 dark:border-brand-800">
        <p class="text-brand-500 dark:text-brand-600 text-xs text-base text-center">
            © {currentYear} Software Antelope Ltd. All rights reserved.
        </p>
    </div>
</footer>