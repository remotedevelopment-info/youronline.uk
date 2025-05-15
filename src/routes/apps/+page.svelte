<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const tabButtons = document.querySelectorAll('.tab-button');
		const tabContents = document.querySelectorAll('.tab-content');

		tabButtons.forEach((button) => {
			button.addEventListener('click', () => {
				// Remove active class from all buttons and contents
				tabButtons.forEach((btn) => btn.classList.remove('active'));
				tabContents.forEach((content) => content.classList.remove('active'));

				// Add active class to clicked button
				button.classList.add('active');

				// Show corresponding content
				const tabId = button.getAttribute('data-tab') ?? '';
				document.getElementById(tabId)?.classList.add('active');
			});
		});
	});
</script>

<article>
	<h2>Applications</h2>
	<p>
		YourOnline also develops browser apps available on subscriptions (see https://youronline.app).
	</p>
	<p>
		Your software project may be extended with one of our apps.  For example the Cadence-CRM app can be
		connected to your website contact forms to capture leads and track sales.  We can implement online spreadsheets 
		with animated charts to demonstrate your business advantages.  We can provide a fast and secure method to protect 
		your database with encryption and access control.
	</p>

	<h3>Apps available</h3>


	<div class="tab-container">
		<div class="tabs">
			<button class="tab-button active" data-tab="encryptor">Encryptor</button>
			<button class="tab-button" data-tab="cadence-crm">CRM</button>
			<button class="tab-button" data-tab="whatif">Whatif</button>
		</div>

		<div class="bg-indigo-300 dark:bg-indigo-900 tab-content active" id="encryptor">
			<div class="flex md:flex-row flex-col justify-between m-h-96">
				<div class="flex flex-col justify-between m-h-96">
					<div class="flex flex-col justify-between m-h-96">
						<h3>YourOnline Encryptor</h3>
						<p>Prevents database theft by encrypting your data.</p>
						<p>And locking down access.</p>
					</div>
					<a href="/apps/encryptor" class="learn-more">Learn More</a>
				</div>
				<img src="/images/secrets.jpg" alt="Encryptor" class="image" width="400px" height="auto" />
			</div>
		</div>

		<div class="bg-indigo-300 dark:bg-indigo-900 tab-content" id="cadence-crm">
			<div class="flex md:flex-row flex-col justify-between m-h-96">
				<div class="flex flex-col justify-between m-h-96">
					<div class="flex flex-col justify-between m-h-96">
						<h3>Cadence-CRM</h3>
						<p>
							A simple to use CRM with lead tracking, sales funnel and customer repeat business.
						</p>
					</div>
					<a href="/apps/crm" class="learn-more">Learn More</a>
				</div>
				<img
					src="https://cadence-crm.com/images/push-button-man.jpg"
					alt="Cadence-crm Push Button"
					class="image"
					width="400px"
					height="auto"
				/>
			</div>
		</div>

		<div class="bg-indigo-300 dark:bg-indigo-900 tab-content" id="whatif">
			<div class="flex md:flex-row flex-col justify-between m-h-96">
				<div class="flex flex-col justify-between m-h-96">
					<div class="flex flex-col justify-between m-h-96">
						<h3>Whatif Online Spreadsheet</h3>
						<p>
							Customised spreadsheets with interactive charts to demonstrate your business
							advantages.
						</p>
					</div>
					<a href="/apps/whatif" class="learn-more">Learn More</a>
				</div>
				<img
					src="https://whatif.youronline.app/images/dashboard-example.png"
					alt="WhatIf Dashboard Example"
					class="image"
					width="400px"
					height="auto"
				/>
			</div>
		</div>
	</div>
</article>

<style>
	.tab-container {
		margin: 2rem 0;
		padding: 0 2rem;
	}

	.tabs {
		display: flex;
		border-bottom: 1px solid #ddd;
	}

	.tab-button {
		padding: 0.8rem 1.2rem;
		background: none;
		border: none;
		border-bottom: 3px solid transparent;
		cursor: pointer;
		font-weight: 500;
		transition: all 0.3s ease;
	}

	.tab-button.active {
		color: #fff;
		border-bottom: 3px solid #0066cc;
		@apply bg-indigo-300 dark:bg-indigo-900;
	}

	.tab-content {
		padding: 1.5rem;
		display: none;
		border-radius: 0 0 4px 4px;

	}

	.tab-content.active {
		display: block;
	}

	.learn-more {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background: #0066cc;
		width: 100%;
		margin: 1rem 0;
		text-align: center;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		transition: background 0.3s ease;
	}

	.learn-more:hover {
		background: #0055aa;
	}
	.image {
		width: 100%;
	}
	@media (min-width: 768px) {
		.image {
			max-width: 50%;
		}
		.learn-more {
			width: 200px;
			margin: 0;
		}
	}
</style>
