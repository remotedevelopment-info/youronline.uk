<script>
	import { fade } from 'svelte/transition';

	let first_name = $state('');
	let last_name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let isLoading = $state(false);
	let error = $state(null);

	const API_URL = 'https://api.youronline.app/api/contact';
	//  for localhost testing:
	//  const API_URL = 'http://localhost:8001/api/contact';

	const handleSubmit = async () => {
		isLoading = true;
		error = null;
		const source = 'YourOnline.uk Contact Form';

		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					first_name,
					last_name,
					email,
					message,
					source
				})
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			// Reset form
			first_name = '';
			last_name = '';
			email = '';
			message = '';

			submitted = true;
			setTimeout(() => (submitted = false), 3000);
		} catch (e) {
			console.error('Submission error:', e);
			error = 'There was a problem sending your message. Please try again later.';
		} finally {
			isLoading = false;
		}
	};
</script>

<section class="bg-white dark:bg-gray-900 py-16">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
		<div class="text-center">
			<h2 class="font-bold text-gray-900 dark:text-white text-3xl sm:text-4xl">
				Send your questions and enquiries
			</h2>
			<p class="mt-4 text-gray-600 dark:text-gray-300 text-lg">We'll get back to you shortly.</p>
		</div>

		<div class="mx-auto mt-12 max-w-lg">
			<form on:submit|preventDefault={handleSubmit} class="gap-6 grid grid-cols-1">
				<div>
					<label
						for="first_name"
						class="block font-medium text-gray-700 dark:text-gray-300 text-sm"
					>
						First Name
					</label>
					<input
						type="text"
						bind:value={first_name}
						required
						class="block dark:bg-gray-800 shadow-sm mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full dark:text-white"
					/>
				</div>
				<div>
					<label for="last_name" class="block font-medium text-gray-700 dark:text-gray-300 text-sm">
						Last Name
					</label>
					<input
						type="text"
						bind:value={last_name}
						required
						class="block dark:bg-gray-800 shadow-sm mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full dark:text-white"
					/>
				</div>

				<div>
					<label for="email" class="block font-medium text-gray-700 dark:text-gray-300 text-sm">
						Email
					</label>
					<input
						type="email"
						bind:value={email}
						required
						class="block dark:bg-gray-800 shadow-sm mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full dark:text-white"
					/>
				</div>

				<div>
					<label for="message" class="block font-medium text-gray-700 dark:text-gray-300 text-sm">
						Message
					</label>
					<textarea
						bind:value={message}
						rows="4"
						required
						class="block dark:bg-gray-800 shadow-sm mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-md focus:ring-blue-500 w-full dark:text-white"
					></textarea>
				</div>

				<div>
					<button
						type="submit"
						class="flex justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full font-medium text-white text-sm"
					>
						Send Message
					</button>
				</div>
			</form>

			<p>
				Alternatively, email <a href="mailto:work@sfsw.net">Nicholas</a> and we will get you setup.
			</p>

			{#if submitted}
				<div
					transition:fade
					class="bg-green-100 dark:bg-green-800 mt-4 p-4 rounded-md text-green-700 dark:text-green-100 text-center"
				>
					Thank you for your message! We'll be in touch soon.
				</div>
			{/if}
		</div>
	</div>
</section>
