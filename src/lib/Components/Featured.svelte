<script>
	let { header, footer, left, right, disable } = $props();
</script>
{#if !disable}
<div class="feature">
	<div class="feature-header">
		{#if header}
			{@render header()}
		{/if}
	</div>
	<div class="feature-sides">
		<div class="feature-side left">
			{#if left}
				{@render left()}
			{/if}
		</div>
		<div class="feature-side right">			
            {#if right}
				{@render right()}
			{/if}
		</div>
	</div>
	<div class="feature-footer">
		{#if footer}
			{@render footer()}
		{/if}
	</div>
</div>
{/if}