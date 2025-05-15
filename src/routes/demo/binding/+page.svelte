<script>
	import Input from '$lib/Components/Input.svelte';
	let message = $state('');
</script>

<div class="bg">
	<div class="text-xl text-blue-500"><h3 class="text-blue-800">Input component data in parent</h3>{message}</div>
	<form class="bg-slate-200">
		<Input bind:value={message} />
	</form>
</div>

<style>
	.bg {
		height: calc(100vh - 27em);
		width: 100vw;
		background:
			linear-gradient(45deg, #92baac 45px, transparent 45px) 64px 64px,
			linear-gradient(45deg, #92baac 45px, transparent 45px, transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px ),
			linear-gradient(
				-45deg,
				#92baac 23px,
				transparent 23px,
				transparent 68px,
				#92baac 68px,
				#92baac 113px,
				transparent 113px,
				transparent 158px,
				#92baac 158px
			);
		background-color: #e1ebbd;
		background-size: 128px 128px;
	}
</style>
