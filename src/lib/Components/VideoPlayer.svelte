<script lang="ts">
	import RichText from './RichText.svelte';
	let server = 'http://127.0.0.1:1337';
	type VideoData = {
		url: string;
		title: string;
		mime: string;
		size: number;
		name: string;
		id: number;
        alternativeText?: string;
        caption?: string;
	};
	let { data } = $props<{ data: VideoData }>();
	// let { data } = $props();
	const path = `${server}${data.url}`;
	console.log(path, data);
    const transferToken = 'e3ddb7fdb9633f9cd2afc81fda6ec77f179e6dbe082048ae0ada0624fb5589ddbb963f0b0ff0755a8e6b6fbdd5aa5e1203d9001a37a13cbc9f6ef9b06cc13ed43c1a2d02ff04dd10a1d301ec496044697175190699ea8fd004af2ea7b5def36f7d97777d88fec35606d699e9296635332387ac927be95bcf3405d6b543a7cd29';
</script>

<article class="video-container">
	<video controls crossorigin class="aspect-video w-full" preload="metadata">
        <source src={path} type={data.mime} />
        <track kind="metadata" label="cuepoints" data-removeondestroy="">
            <track kind="chapters" label="chapters" data-removeondestroy="">
		{data.alternativeText ?? 'Browser does not support video playback'}
	</video>
    {#if data.caption}
        <figcaption class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {data.caption}
        </figcaption>
    {/if}
</article>
