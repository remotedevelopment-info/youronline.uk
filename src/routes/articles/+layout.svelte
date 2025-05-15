<script>
	import { pageState } from '$lib/states/pageState.svelte';
    let { children } = $props();
</script>

<div class="shadow-lg mx-auto mt-6 mb-1 px-4 max-w-7xl">
	<header class="flex justify-between items-baseline">
		<h2>{pageState.title}</h2>
		<p><a href="/articles">{pageState.strapline}</a>
	</header>
    <hr/>
    <main class="mt-12">
        <section>
            {@render children()}
        </section>
    </main>
</div>
<style>
    hr {
        border: 1px solid #ccc;
    }
</style>