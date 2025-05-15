<script>
	import Accordion from '$lib/Components/Accordion.svelte';
	import AnimatedScroll from '$lib/Components/AnimatedScroll.svelte';
	import Band from '$lib/Components/Band.svelte';
	import Box from '$lib/Components/Box.svelte';
	import Card from '$lib/Components/Card.svelte';
	import Feature from '$lib/Components/Feature.svelte';
	import Footer from '$lib/Components/Footer.svelte';

	import Header from '$lib/Components/Header.svelte';
	import Icon from '$lib/Components/Icon.svelte';
	import Image from '$lib/Components/Image.svelte';
	import Input from '$lib/Components/Input.svelte';

	import PricingCard from '$lib/Components/PricingCard.svelte';
	import PricingGrid from '$lib/Components/PricingGrid.svelte';

	import SpecialOffer from '$lib/Components/SpecialOffer.svelte';
	import TestimonialCard from '$lib/Components/TestimonialCard.svelte';
	import TestimonialGrid from '$lib/Components/TestimonialGrid.svelte';
	// import VideoPlayer from '$lib/Components/VideoPlayer.svelte';

	// Component rating display helper
	function ratingStars(rating) {
		return '★'.repeat(rating) + '☆'.repeat(5 - rating);
	}
</script>

<div class="bg-brand-100 dark:bg-brand-950 m-0 md:m-2 lg:m-4 p-0 lg:p-4 md:p:2">
	<h1 class="mb-4 font-bold text-3xl">Component Demo Page</h1>
	<p class="mb-8">This page demonstrates components and their Svelte 5 compatibility.</p>
	<details>
		<summary>A - E</summary>
		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Accordion Component</h2>
				<p class="mb-4">Expandable accordion with customizable headers, styles, and content.</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ✅ Svelte 5 Ready (Using $props, $state, $effect, and &#123;@render&#125;)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(4)} 4/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<Accordion
							header="Click to expand this accordion"
							openHeader="Expanded Content"
							id="demo-accordion"
							comment="This showcases the accordion component"
						>
							<div class="p-4">
								<h4 class="mb-2 font-semibold text-xl">Accordion Content</h4>
								<p class="mb-4">
									This is the expandable content area of the accordion component. You can place any
									content here including text, images, forms, or other components.
								</p>
								<p>
									The accordion handles the expand/collapse functionality automatically and is fully
									accessible with proper ARIA attributes for screen readers.
								</p>
								<p>
									This example uses the header and openHeader attributes to change the header for
									the open state.
								</p>
							</div>
						</Accordion>

						<div class="mt-4">
							<Accordion
								header="Another Accordion Example"
								openHeader="Another Example (Open)"
								headerStyle="emphasis"
								variant="inline"
								id="second-example"
							>
								<div class="p-4">
									<p>
										This second example demonstrates the accordion with different styling options
										through the <code>headerStyle</code> and <code>variant</code> props.
									</p>
									<ul class="mt-2 pl-5 list-disc">
										<li>Custom header styles</li>
										<li>Different variants</li>
										<li>Fully responsive design</li>
									</ul>
								</div>
							</Accordion>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Uses $props for component props</li>
						<li>Uses $state for tracking open/closed state</li>
						<li>Uses $effect for dynamic styling</li>
						<li>Renders children content via &#123;@render children()&#125;</li>
						<li>Includes accessibility attributes (ARIA)</li>
						<li>Supports different visual variants</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Potential improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add transition animation for smoother open/close</li>
							<li>Add programmatic control methods (open/close) for parent components</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">AnimatedScroll Component</h2>
				<p class="mb-4">
					Animated down arrow button that smoothly scrolls to the specified section.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ✅ Svelte 5 Ready (Using $props and $state)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="relative bg-white dark:bg-brand-800 p-6 h-64">
						<h3 class="mb-4 font-bold text-xl">Demo Section</h3>
						<p class="mb-4">
							Scroll down to see the next section. The animated arrow will fade out as you scroll.
						</p>
						<div class="bottom-4 left-0 absolute w-full">
							<AnimatedScroll next="demo-next-section" />
						</div>
					</div>
					<div id="demo-next-section" class="bg-brand-100 dark:bg-brand-700 p-6">
						<h3 class="mb-4 font-bold text-xl">Next Section</h3>
						<p>This is the target section that the AnimatedScroll component scrolls to.</p>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Uses $props for section ID targeting</li>
						<li>Uses $state to track scroll position</li>
						<li>Implements smooth scrolling behavior</li>
						<li>Fades out after user begins scrolling</li>
						<li>Browser-safe with $app/environment check</li>
						<li>Accessible with proper aria-label</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Potential improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add customizable animation style options</li>
							<li>Improve scroll offset calculation for fixed headers</li>
							<li>Add support for custom icon/content</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Band Component</h2>
				<p class="mb-4">Full-screen background with image or color and content panel.</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Currently using export let and slot)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(2)} 2/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<Band
							image="/images/office-work.jpeg"
							background="rgba(0,0,50,0.5)"
							colour="white"
							header="Example Band Header"
							caption="Photo credit: Unsplash"
						>
							<div class="p-4 text-center">
								<h3 class="mb-4 font-bold text-2xl">Band Component Demo</h3>
								<p class="mb-4">
									This component creates a full-width section with background image or color and a
									semi-transparent panel for content.
								</p>
								<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded text-white">
									Call to Action
								</button>
							</div>
						</Band>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Uses dynamic style generation based on props</li>
						<li>Responsive design with media queries</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props instead of export let</li>
							<li>Convert slot to children with &#123;@render&#125;</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add more background options (gradients, patterns)</li>
							<li>Improve responsive behavior on very small screens</li>
							<li>Add parallax scrolling option</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Box Component</h2>
				<p class="mb-4">Styled container with title and customizable width variants.</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Currently using export let and slot)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(2)} 2/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-900 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<div class="flex flex-wrap gap-4">
							<div class="w-full">
								<Box title="Full Width Box" variant="full" scheme="normal" rounded={20}>
									<p class="mb-4 text-center">A full-width box with rounded corners.</p>
									<p class="text-center">
										It can contain any content and will take up the full available width.
									</p>
								</Box>
							</div>

							<div class="w-full">
								<Box title="Half Width Box" variant="half">
									<p class="mb-4 text-center">A half-width box with sharp corners.</p>
									<p class="text-center">
										On smaller screens, it maintains a minimum width for better readability.
									</p>
								</Box>
							</div>

							<div class="w-full">
								<Box title="Quarter Width Box" variant="quarter" scheme="normal">
									<p class="mb-4 text-center">This is a quarter-width box.</p>
									<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded text-white">
										Sample Button
									</button>
								</Box>
							</div>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Currently uses older export syntax (needs update to $props)</li>
						<li>Uses slot for content (should use children prop with &#123;@render&#125;)</li>
						<li>Direct DOM manipulation should be moved to $effect</li>
						<li>Supports multiple width variants and color schemes</li>
						<li>Fully responsive with media queries</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props</li>
							<li>Replace direct DOM manipulation with $effect</li>
							<li>Convert slot to children prop</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add more styling variants</li>
							<li>Improve box shadow/border options</li>
							<li>Add animation options for entrance/hover</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Card Component</h2>
				<p class="mb-4">
					Versatile content card with title, image, description and action buttons.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Should use $props and children)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<div class="gap-4 grid grid-cols-1 md:grid-cols-3">
							<!-- Basic Card -->
							<Card title="Basic Card" image="/images/secrets.jpg" alt="Placeholder image">
								<p class="mb-4">This is a simple card with just title, image and description.</p>
								<p>Cards are useful for displaying content in a concise format.</p>
							</Card>

							<!-- Card with Button -->
							<Card
								title="Card with Button"
								image="/images/office-people.jpg"
								alt="Placeholder image 2"
								buttonText="Learn More"
								url="/learn-more"
							>
								<p>This card includes a call-to-action button that links to another page.</p>
							</Card>

							<!-- Card with Custom Style -->
							<Card title="Custom Styled Card (no image)" alt="Placeholder image 3">
								<p>This card demonstrates custom styling options.</p>
								<div class="flex space-x-2 mt-4">
									<button
										class="bg-brand-600 hover:bg-brand-700 px-3 py-1 rounded text-white text-sm"
									>
										Action 1
									</button>
									<button
										class="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-gray-800 text-sm"
									>
										Action 2
									</button>
								</div>
							</Card>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Needs to be updated to use $props for component properties</li>
						<li>Should use children prop with &#123;@render&#125; for content</li>
						<li>Supports custom styling through class props</li>
						<li>Responsive design for different screen sizes</li>
						<li>Optional button with customizable text and link</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props</li>
							<li>Convert slot to children prop</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add hover effects/animations</li>
							<li>Support for multiple buttons/actions</li>
							<li>Add card variants (horizontal, featured)</li>
							<li>Support for badges/tags</li>
						</ul>
					</div>
				</div>
			</section>
		</details>
	</details>
	<details>
		<summary>F - P</summary>

		<details>
			<summary class="font-bold text-lg"
				><h2 class="inline mb-2 font-bold text-2xl">Feature Component</h2>
				<p class="mb-4">
					This component is designed to showcase a feature with a heading, left side, right side,
					and footer.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ✅ Svelte 5 Ready (Using snippet syntax and $derived)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(5)} 5/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<!-- Feature Demo -->
					<Feature background="var(--light-gray)" foreground="var(--black)" format="double">
						{#snippet heading()}
							Demo Heading
						{/snippet}

						{#snippet leftside()}
							<div class="p-6">
								<img
									src="https://picsum.photos/seed/picsum/400/300"
									alt="Placeholder"
									class="shadow-md rounded-lg"
								/>
							</div>
						{/snippet}

						{#snippet rightside()}
							<div class="p-6">
								<h3 class="mb-2 font-bold text-2xl">Feature Title</h3>
								<p class="mb-4">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel
									augue venenatis fringilla. Proin hendrerit magna in nisl malesuada, vel mollis
									ante facilisis.
								</p>
								<ul class="mb-4 pl-5 list-disc">
									<li>Feature point one</li>
									<li>Feature point two</li>
									<li>Feature point three</li>
								</ul>
								<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded text-white">
									Call to Action
								</button>
							</div>
						{/snippet}

						{#snippet footer()}
							<p class="mt-4 text-brand-500 dark:text-brand-400 text-sm text-center">
								Footer information goes here
							</p>
						{/snippet}
					</Feature>
				</div>
				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Already uses Svelte 5 snippet syntax</li>
						<li>Uses $derived for reactive styling</li>
						<li>Renders content via &#123;@render&#125; statements</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add more layout variants (e.g., centered, zigzag)</li>
							<li>Add animation options for section entrance</li>
							<li>Improve tablet-specific layouts</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Footer Component</h2>
				<p class="mb-4">
					Site footer with navigation links, theme selection, and social media icons.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ✅ Updated to Svelte 5 (Using $state and $effect)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(4)} 4/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<Footer />
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Uses $state for theme and dark mode tracking</li>
						<li>Uses $effect to update DOM when state changes</li>
						<li>Theme switching works as before but with reactive state</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Make footer columns customizable via props</li>
							<li>Add newsletter signup option</li>
							<li>Support more theme variants</li>
							<li>Add language selector integration</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Header Component</h2>
				<p class="mb-4">Page header with navigation, mobile responsive menu, and theme toggle.</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ✅ Svelte 5 Ready (Using $state, &#123;@render&#125; and snippet)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(4)} 4/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<Header
						navItems={[
							{ href: '#features', text: 'Features' },
							{ href: '#pricing', text: 'Pricing' },
							{ href: '#about', text: 'About Us' },
							{ href: '#contact', text: 'Contact' }
						]}
					>
						{#snippet children()}
							<h1 class="font-bold text-xl md:text-2xl">YourOnline.App</h1>
							<p class="text-sm md:text-base">Your business, in perfect rhythm</p>
						{/snippet}
					</Header>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Uses $state for reactive state management</li>
						<li>Implements children as a snippet</li>
						<li>Uses &#123;@render&#125; to display child content</li>
						<li>Mobile responsive with toggle menu</li>
						<li>Includes dark mode toggle functionality</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add sticky header option with scroll behavior</li>
							<li>Support for mega menu dropdown</li>
							<li>Add search integration option</li>
							<li>Improve mobile menu animations</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Icon Component</h2>
				<p class="mb-4">Reusable icon component that renders SVG icons with customizable styles.</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ✅ Svelte 5 Ready (Using $props)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 4/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<div class="flex flex-wrap justify-center gap-8">
							<div class="flex flex-col items-center">
								<Icon name="home" />
								<span class="mt-2 text-sm">home</span>
							</div>
							<div class="flex flex-col items-center">
								<Icon name="user" size="32" />
								<span class="mt-2 text-sm">user</span>
							</div>
							<div class="flex flex-col items-center">
								<Icon name="settings" />
								<span class="mt-2 text-sm">settings</span>
							</div>
							<div class="flex flex-col items-center">
								<Icon name="check" class="inline-block mr-2" />
								<span class="mt-2 text-sm">check</span>
							</div>
							<div class="flex flex-col items-center">
								<Icon name="notification" />
								<span class="mt-2 text-sm">notification</span>
							</div>

							<div class="flex flex-col items-center">
								<Icon name="warning" color="#f59e0b" />
								<span class="mt-2 text-sm">warning</span>
							</div>

							<div class="flex flex-col items-center">
								<Icon name="info" title="Information" />
								<span class="mt-2 text-sm">info</span>
							</div>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Uses $props for component properties</li>
						<li>To be implemented</li>
						<li>Renders SVG icons from a predefined set</li>
						<li>Supports custom colors and sizes</li>
						<li>Accessible with proper ARIA attributes</li>
						<li>Extensible with ability to add new icons</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add more icon variants to the library</li>
							<li>Support for custom icon imports</li>
							<li>Add animation options (spin, pulse, etc.)</li>
							<li>Add icon groups/composition</li>
						</ul>
					</div>
				</div>
			</section>
		</details>
		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Image Component</h2>
				<p class="mb-4">
					Enhanced image component with lazy loading, responsive sizing, and optional caption.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Should use $props)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<div class="space-y-6">
							<!-- Standard Image -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Basic Image</h3>
								<Image
									src="/images/office-work.jpeg"
									alt="Office workers collaborating"
									width="600"
									height="400"
								/>
							</div>

							<!-- Image with Caption -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Image with Caption</h3>
								<Image
									src="/images/musicflow.jpeg"
									alt="Team meeting with technology"
									width="600"
									height="400"
									caption="Team members collaborating on a new project"
								/>
							</div>

							<!-- Responsive Image -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Responsive Image</h3>
								<Image
									src="/images/person1.jpeg"
									alt="Responsive design across devices"
									responsive={true}
									class="shadow-md rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Implement lazy loading for better performance</li>
						<li>Supports responsive sizing with aspect ratio preservation</li>
						<li>Optional caption</li>
						<li>Accessible with proper alt text and loading attributes</li>
						<li>Uses picture element for various target resolutions</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props</li>
							<li>Refactor image loading logic</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add loading placeholder/skeleton</li>
							<li>Add lightbox/zoom functionality</li>
							<li>Support for image galleries</li>
							<li>Add blur-up effect for progressive loading</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Input Component</h2>
				<p class="mb-4">
					Enhanced form input with validation, styling options, and accessibility features.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<div class="space-y-6">
							<!-- Text Input -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Text Input</h3>
								<Input
									type="text"
									label="Username"
									placeholder="Enter your username"
									required={true}
								/>
							</div>

							<!-- Email Input with Validation -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Email Input with Validation</h3>
								<Input
									type="email"
									label="Email Address"
									placeholder="example@youronline.app"
									required={true}
									validate={true}
									errorMessage="Please enter a valid email address"
								/>
							</div>

							<!-- Password Input -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Password Input</h3>
								<Input
									type="password"
									label="Password"
									placeholder="Enter your password"
									required={true}
									showPasswordToggle={true}
								/>
								<Input
									label="Password"
									type="password"
									id="password"
									showPasswordToggle={true}
									icon="lock"
									helpText="Must be at least 8 characters"
									full={true}
								/>
							</div>

							<!-- Input with Icon and Help Text -->
							<div>
								<h3 class="mb-2 font-semibold text-lg">Input with Icon and Help Text</h3>
								<Input
									type="text"
									label="Search"
									placeholder="Search for something..."
									icon="search"
									helpText="Enter keywords to search our knowledge base"
								/>
							</div>
							<div>
								<Input type="text" id="username" placeholder="Enter username" required />

								<!-- With enhancements -->
							</div>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Should use $state for input value and validation state</li>
						<li>Could implement $derived for validation logic</li>
						<li>Supports various input types (text, email, password, etc)</li>
						<li>Includes built-in validation options</li>
						<li>Accessible with proper labels and ARIA attributes</li>
						<li>Supports icons, help text and error messages</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props and $state</li>
							<li>Improve validation with $derived</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add more input types (datepicker, autocomplete)</li>
							<li>Add character count for text fields</li>
							<li>Support for custom validation rules</li>
							<li>Add input masks for formatted fields</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Pricing Components</h2>
				<p class="mb-4">Pricing display components including PricingCard and PricingGrid.</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Should use $props and children)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<h3 class="mb-6 font-bold text-2xl text-center">Pricing Options</h3>

						<div class="gap-6 grid grid-cols-1 md:grid-cols-3">
							<!-- Basic Plan -->
							<PricingCard title="Basic" price={49} period="per month" highlight={false}>
								<ul class="space-y-2 mb-6">
									<li class="flex items-center">
										<Icon name="check" />
										<span>Up to 250 contacts</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" />
										<span>Email campaigns</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" />
										<span>Basic reporting</span>
									</li>
									<li class="flex items-center opacity-50">
										<Icon name="x" />
										<span>Advanced automation</span>
									</li>
								</ul>
								<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded w-full text-white">
									Get Started
								</button>
							</PricingCard>

							<!-- Pro Plan -->
							<PricingCard
								title="Professional"
								price={99}
								period="per month"
								highlight={true}
								badge="Most Popular"
							>
								<ul class="space-y-2 mb-6">
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Up to 2,500 contacts</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Email campaigns</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Advanced reporting</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Basic automation</span>
									</li>
								</ul>
								<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded w-full text-white">
									Get Started
								</button>
							</PricingCard>

							<!-- Enterprise Plan -->
							<PricingCard title="Enterprise" price={199} period="per month" highlight={false}>
								<ul class="space-y-2 mb-6">
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Unlimited contacts</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Email campaigns</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Advanced reporting</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Advanced automation</span>
									</li>
									<li class="flex items-center">
										<Icon name="check" class="mr-2 text-green-500" />
										<span>Dedicated support</span>
									</li>
								</ul>
								<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded w-full text-white">
									Contact Sales
								</button>
							</PricingCard>
						</div>

						<div class="mt-12 text-center">
							<h3 class="mb-6 font-bold text-2xl">Feature Comparison</h3>
							<PricingGrid
								plans={[
									{ name: 'Basic', price: '49', popular: false },
									{ name: 'Professional', price: '99', popular: true },
									{ name: 'Enterprise', price: '199', popular: false }
								]}
								features={[
									{
										name: 'Contacts',
										tiers: ['250 contacts', '2,500 contacts', 'Unlimited']
									},
									{
										name: 'Email Campaigns',
										tiers: ['✓', '✓', '✓']
									},
									{
										name: 'SMS Integration',
										tiers: ['✗', '✓', '✓']
									},
									{
										name: 'Automation',
										tiers: ['Basic', 'Advanced', 'Advanced']
									},
									{
										name: 'API Access',
										tiers: ['✗', 'Limited', 'Full access']
									},
									{
										name: 'Support',
										tiers: ['Email', 'Priority email', 'Dedicated agent']
									}
								]}
							/>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Should use children prop with &#123;@render&#125; for feature lists</li>
						<li>PricingCard supports highlighting for featured plans</li>
						<li>PricingGrid provides tabular feature comparison</li>
						<li>Responsive design adapts to different screen sizes</li>
						<li>Could implement $derived for price calculations (monthly vs annual)</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props</li>
							<li>Refactor to use children with &#123;@render&#125;</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add toggle for monthly/annual pricing</li>
							<li>Add currency formatting options</li>
							<li>Improve mobile layout for feature comparison</li>
							<li>Add animation for highlighted plans</li>
						</ul>
					</div>
				</div>
			</section>
		</details>
	</details>

	<details>
		<summary>Q - Z</summary>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">SpecialOffer Component</h2>
				<p class="mb-4">
					Eye-catching promotional component with time-sensitive offers and pricing details.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Should use $props instead of export)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<div class="flex justify-center">
							<SpecialOffer
								title="Website Launch Offer"
								description="Get your business online with our special launch pricing"
								originalPrice={299.99}
								discountedPrice={199.99}
								endDate="2025-06-30"
							/>
						</div>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Should use $props instead of export let for Svelte 5</li>
						<li>Uses gradient background for visual impact</li>
						<li>Displays original and discounted prices</li>
						<li>Includes expiration date for urgency</li>
						<li>Features an eye-catching offer badge</li>
						<li>Implements hover effects on call-to-action button</li>
						<li>Could use $derived for calculating savings amount</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props</li>
							<li>Use $derived for savings calculation</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add countdown timer option</li>
							<li>Support for promotional codes</li>
							<li>Add more design variants</li>
							<li>Improve responsive behavior on small screens</li>
						</ul>
					</div>
				</div>
			</section>
		</details>

		<details>
			<summary class="font-bold text-lg">
				<h2 class="inline mb-2 font-bold text-2xl">Testimonial Components</h2>
				<p class="mb-4">
					Customer testimonial display components including TestimonialCard and TestimonialGrid.
				</p>
			</summary>
			<section class="mb-8">
				<div class="flex justify-between items-center mb-4">
					<p>Status: ⚠️ Needs Update (Should use $props and children)</p>
					<p class="font-bold text-amber-500">Rating: {ratingStars(3)} 3/5</p>
				</div>

				<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
					<div class="bg-white dark:bg-brand-800 p-6">
						<h3 class="mb-6 font-bold text-2xl text-center">What Our Customers Say</h3>

						<TestimonialGrid>
							<TestimonialCard
								name="Sarah Johnson"
								title="Marketing Director"
								company="TechFirst Inc."
								image="/images/testimonials/person1.jpg"
								rating={5}
							>
								<p>
									Switching to Cadence-CRM doubled our lead conversion rate in just two months. The
									intuitive interface and powerful automation tools have transformed how we manage
									customer relationships.
								</p>
							</TestimonialCard>

							<TestimonialCard
								name="Michael Chen"
								title="Sales Manager"
								company="Global Solutions"
								image="/images/testimonials/person2.jpg"
								rating={5}
							>
								<p>
									The email campaign features have been a game-changer for our outreach efforts.
									We've seen a 40% increase in response rates and our team loves how easy it is to
									track customer interactions.
								</p>
							</TestimonialCard>

							<TestimonialCard
								name="Elena Rodriguez"
								title="Small Business Owner"
								company="Artisan Crafts"
								image="/images/testimonials/person3.jpg"
								rating={4}
							>
								<p>
									As a small business owner, I needed an affordable CRM that wouldn't overwhelm me
									with complexity. Cadence-CRM provides exactly what I need without the enterprise
									bloat. Highly recommended!
								</p>
							</TestimonialCard>

							<TestimonialCard
								name="James Wilson"
								title="Customer Success Lead"
								company="Bright Financial"
								image="/images/testimonials/person4.jpg"
								rating={5}
								featured={true}
							>
								<p>
									The customer support team deserves special recognition. Whenever we've had
									questions or needed help with configuration, they've been incredibly responsive
									and knowledgeable. This level of service sets Cadence-CRM apart from competitors.
								</p>
							</TestimonialCard>
						</TestimonialGrid>
					</div>
				</div>

				<div
					class="bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100"
				>
					<h3 class="mb-2 font-bold">Component Notes:</h3>
					<ul class="pl-5 list-disc">
						<li>Should use $props for component properties</li>
						<li>Should use children prop with &#123;@render&#125; for testimonial content</li>
						<li>TestimonialCard supports star ratings and featured highlighting</li>
						<li>TestimonialGrid provides responsive layout for multiple testimonials</li>
						<li>Includes accessible image alt text generation from name and company</li>
						<li>Supports optional customer photos with fallback avatars</li>
					</ul>
					<div class="mt-4 pt-2 border-t border-brand-300 dark:border-brand-700">
						<h4 class="font-semibold">Required improvements:</h4>
						<ul class="pl-5 list-disc">
							<li>Update to use $props</li>
							<li>Convert slots to children prop</li>
						</ul>
						<h4 class="mt-2 font-semibold">Potential enhancements:</h4>
						<ul class="pl-5 list-disc">
							<li>Add carousel/slider option for multiple testimonials</li>
							<li>Add animation for featured testimonials</li>
							<li>Support for video testimonials</li>
							<li>Improve star rating visualization</li>
						</ul>
					</div>
				</div>
			</section>
		</details>
	</details>
</div>
