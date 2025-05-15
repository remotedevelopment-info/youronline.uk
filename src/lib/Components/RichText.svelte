<script>
	import { parseRichText } from '$lib/utils/richText';
	import { parse } from 'svelte/compiler';

    let { textfield } = $props();
    console.log('RichText:',textfield);
    
    
</script>
<div>
    {@html parseRichText(textfield)}
</div>