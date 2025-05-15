<script>
	import Accordion from '$lib/Components/Accordion.svelte';
</script>

<article>
	<h2>Better user data security</h2>
	<hr />
	<div class="flex lg:flex-row flex-col gap-4">
		<img src="/images/secrets.jpg" alt="Encryptor" class="image" />
		<div>
			<h3>Encryptor!</h3>
			<p>
				Encryptor! is a new security feature we developed to protect user information from theft.
			</p>
			<p>You <en>try out</en> a "proof of concept" demonstration, below.</p>
			<p>
				The problem with encryption is it can slow down your application (this is a scaling issue)
				and present a challenge to hackers to steal your data and try and break encryption.
			</p>
			<p>
				Encryptor! takes a different approach. Providing no window of opportunity to hackers and a
				more far more secure method to store personal identifiers, that is very fast and and
				scaleable.
			</p>
			<p>
				If a hacker does break your security and steals you database, imagine that they discover no
				personal details to steal. How does it work?
			</p>
			<p>
				Your data is encrypted and stored elsewhere on a secret server that is restricted by
				additional security and a firewall to exclusively talk to the registered application.
			</p>
			<Accordion
				header="What levels of security are possible?"
				openHeader="Security levels"
				comment="Three grades are currently available, but investment could create a product that defeats
				scammers."
			>
				<ul class="list">
					<li><strong>Privacy Assurance</strong> (database records are encrypted and stored)</li>
					<li><strong>Security Assurance</strong> (database records are encrypted for each user)</li>
					<li><strong>Database Lockdown</strong> (database records are encrypted and remotely stored)</li>
					<li>
						<strong>Military Grade Security</strong> <em>(requires funding)</em> (complete database encryption with honeytrap
						records and intruder alert infrastructure) plus improved user authentication using blockchain
						technology to authenticate and indellibly record every user action.
					</li>
				</ul>
			</Accordion>
			<Accordion
				header="How does it work?"
				openHeader="How it works"
				comment="Defeating hackers and scammers"
			>
				<h4>Encryptor! has another purpose - to break scammers.</h4>
				<p>
					Criminals steal credentials from databases to feed identity theft and fraud. The challenge
					is to make encryption transparent and work with existing systems without disruption or
					creating scaling issues.
				</p>
				<p>
					Encryptor! solves these issues with a hidden architecture that is fast enough to not be
					noticed by users, scalable and yet makes data completely unavailable, even if the database
					is stolen.
				</p>
				<h4>Governments</h4>
				<p>
					Encryptor! could even be adopted in Government applications. By creating irrefutable proof
					and even alerting authorities. It would be a possible to create an international database
					of scammers and automatically shut them down.
				</p>
				<h4>Partnership</h4>
				<p>
					We are seeking investment partnership to develop this platform based on our multilayered
					approach to encryption and security.
				</p>
				<h4>Enquire</h4>
				<p>
					For more information please email
					<a href="mailto:work@sfsw.net">Nicholas Alexander</a>.
				</p>
				<hr />
			</Accordion>
			<h4>
				<a href="https://encryptor.youronline.app" class="learn-more" target="_blank"
					>Try it out</a
				>
			</h4>
		</div>
	</div>
</article>

<style>
	.image {
		width: 100%;
		height: auto;
	}

	@media (min-width: 1024px) {
		.image {
			width: 500px;
			max-width: 100%;
			height: 600px;
		}
	}
	.list {
		list-style: disc;
		margin-left: 1rem;
		margin: 0 2rem 2rem;
	}
	hr {
		margin: 1rem 0;
		border-top: 1px solid #ddd;
	}
</style>
