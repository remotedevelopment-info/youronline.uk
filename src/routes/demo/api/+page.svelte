<script lang="ts">
	import RichText from '$lib/Components/RichText.svelte';
	import VideoPlayer from '$lib/Components/VideoPlayer.svelte';
	import { dateString } from '$lib/utils/dateTime.ts';

	let { data } = $props();
	console.log('page data', data);

	function parseVideoData(videoNode: any) {
		const urlData = videoNode.url?.[0] || videoNode.url;
		return {
			url: urlData?.url || '',
			title: videoNode.title,
			mime: urlData?.mime || 'video/mp4',
			size: urlData?.size || 0,
			name: urlData?.name || '',
			id: videoNode.id || 0,
			alternativeText: urlData?.alternativeText || '',
			caption: urlData?.caption || ''
		};
	}
</script>

<div class="outer-container mx-auto">
	{#if data}
		{#each data.reviews.data as review}
			<div class="container mx-auto">
				{Object.keys(review)}
				<h1>{review.Title}</h1>
				{dateString(review.publishedAt)}
				<RichText textfield={review.Text} />
			</div>
		{/each}
		{#each data.videos.data as video}
			<div class="container mx-auto">
				<h1>{video.title}</h1>
				{#if video.url}
					<VideoPlayer data={parseVideoData(video)} />
				{/if}
				<RichText textfield={video.description} />
			</div>
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<style>
	.container {
		padding: 1rem;
		margin: 1rem;
		border: 1px solid #ccc;
	}
	:global(ul) {
		list-style-type: disc !important;
		padding-left: 1.5rem;
	}
	:global(ol) {
		list-style-type: decimal !important;
		padding-left: 1.5rem;
	}
</style>
