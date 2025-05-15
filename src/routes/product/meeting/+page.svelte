<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const showForm = false;

	// Form data using Svelte 5 state
	let name = $state('');
	let email = $state('');
	let message = $state('');
	let phone = $state('');
	let productTitle = $state('Consultation');
	let periodType = $state('monthly');

	// Get query parameters
	onMount(() => {
		productTitle = $page.url.searchParams.get('title') || 'Consultation';
		periodType = $page.url.searchParams.get('period') || 'monthly';
	});

	// Handle form submission
	function handleSubmit(event) {
		event.preventDefault();

		// Get form data
		const formData = {
			name,
			email,
			message,
			phone,
			productTitle,
			periodType
		};

		console.log('Form data:', formData);
		// Here you would send the data to your backend/CRM
	}
</script>

<div class="mx-auto px-4 py-8 w-full container">
	<h1 class="mb-2 font-bold text-gray-800 dark:text-white text-3xl">Book a Consultation</h1>
	<p class="mb-6 text-gray-600 dark:text-gray-300">
		You're interested in our <span class="font-semibold">{productTitle}</span> service ({periodType}
		plan).
	</p>

	{#if showForm}
		<p>Please fill out this form to get started.</p>

		<div class="bg-white dark:bg-gray-800 shadow-md mb-8 p-6 rounded-lg">
			<form on:submit={handleSubmit} class="space-y-6">
				<div class="gap-6 grid grid-cols-1 md:grid-cols-2">
					<div class="form-group">
						<label for="name" class="block mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							on:input={(e) => (name = e.target.value)}
							class="dark:bg-gray-700 px-4 py-2 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
						/>
					</div>

					<div class="form-group">
						<label for="email" class="block mb-2 text-gray-700 dark:text-gray-300"
							>Email Address</label
						>
						<input
							type="email"
							id="email"
							name="email"
							required
							on:input={(e) => (email = e.target.value)}
							class="dark:bg-gray-700 px-4 py-2 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
						/>
					</div>
				</div>

				<div class="form-group">
					<label for="phone" class="block mb-2 text-gray-700 dark:text-gray-300">Phone Number</label
					>
					<input
						type="tel"
						id="phone"
						name="phone"
						required
						on:input={(e) => (phone = e.target.value)}
						class="dark:bg-gray-700 px-4 py-2 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
					/>
				</div>

				<div class="form-group">
					<label for="message" class="block mb-2 text-gray-700 dark:text-gray-300"
						>Tell us about your project</label
					>
					<textarea
						id="message"
						name="message"
						rows="4"
						required
						on:input={(e) => (message = e.target.value)}
						class="dark:bg-gray-700 px-4 py-2 border border-gray-300 dark:border-gray-600 focus:border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 w-full dark:text-white"
					></textarea>
				</div>

				<div class="flex md:flex-row flex-col gap-4 pt-4">
					<button
						type="submit"
						class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-white transition-colors duration-200"
					>
						Submit Enquiry
					</button>
				</div>
			</form>
		</div>
		<div class="bg-blue-50 dark:bg-gray-700 p-6 border-blue-500 border-l-4 rounded-lg">
			<h3 class="mb-2 font-medium text-blue-800 dark:text-blue-300 text-lg">What happens next?</h3>
			<ul class="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
				<li>We'll review your information within 24 hours</li>
				<li>A team member will contact you to discuss your needs</li>
				<li>We'll provide a tailored proposal for your project</li>
			</ul>
		</div>
	{/if}

    <div class="bg-black mt-8 p-6 rounded-lg w-full">
        <div class="mt-4">
            <!-- Calendly inline widget begin -->
            <div
                class="calendly-inline-widget"
                data-url="https://calendly.com/youronlineuk/discovery-chat"
                style="min-width:320px;height:700px;"
            ></div>
            <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
            ></script>
            <!-- Calendly inline widget end -->
        </div>
    </div>
</div>
