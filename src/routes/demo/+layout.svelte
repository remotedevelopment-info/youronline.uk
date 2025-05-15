<script>
	// let { name = $bindable(), format = 'double' } = $props();
	let { children } = $props();
</script>

<div>
    <nav>
        <a href="/demo">Demo</a>
        <a href="/demo/paraglide">Lang</a>
        <a href="/demo/binding">Binding</a>
        <a href="/demo/api">API</a>
    </nav>
	<div class="m-1 md:m-2 lg:m-4 p-0 lg:p-4 md:p:2">
		{@render children()}
	</div>
</div>
