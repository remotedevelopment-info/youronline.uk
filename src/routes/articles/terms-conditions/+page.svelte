<script>
	import Page from "../+page.svelte";
    let isAgreed = true;  // Starting checked as per your example
</script>
<h2>Terms and Conditions</h2>
<div class="terms">
	<ol>
		<li>
			Free Website development terms
			<ol>
				<li>We sign a contract with you to start development</li>
				<li>
					Free Website also provided a free hosted domain YOURNAME.youronline.app (or another
					avaiable domain)
				</li>
				<li>
					You agree to provide content by email for a minium of three pages and select a prepared
					colour theme
				</li>
				<li>
					You agree to either subscribe to our Cloud Hosting subscription, or to Cadence-CRM at the
					PRO/PREMIUM level
				</li>
				<li>
					Free Website development is a limited service and does not include any API integrations or
					custom development
				</li>
				<li>
					YOURNAME.youronline.app hosted domain becomes your staging approval site when you own
					domain is connected
				</li>
				<li>Our refund policy is simple, request removal and your site will be deleted.</li>
				<li>There is no refund available for hosting fees which are paid in advance.</li>
			</ol>
		</li>
		<li>
			Cloud Hosting Service
			<ol>
				<li>Free/Paid websites are Cloud hosted on our server</li>
				<li>Cloud Hosting is a monthly subscription service</li>
				<li>
					Cloud Hosting is a limited service and does not include any API integrations or custom
					development but these are available to hosting clients
				</li>
				<li>
					Cloud Hosting is provided on an As-Is supported service. We experience 99.99% uptime and
					expect you will too, but offer no guarantee
				</li>
				<li>
					Cloud Hosting is provided on a month-to-month basis and can be cancelled at any time by
					cancelling your subscription
				</li>
				<li>
					Cancelled Subscriptions may be restarted by restarting a subscription, your site is
					archived and you can download it to host it elsewhere
				</li>
				<li>You may request your data be removed from our servers, permanently.</li>
				<li>
					You are provided with our Cloud Service for business sites that we build with you. Your
					site content must be legal and may be subject to removal if we are asked to removed it by
					a legal authority.
				</li>
				<li>
					In rare cases, abusive actions, behaviour or software may result in the suspension or
					cancellation of your Cloud Hosting subscription
				</li>
				<li>
					We reserve the right to load balance your service and will advise if you exceed the limits
					with options for increased bandwidth to provide you with scaling.
				</li>
			</ol>
		</li>
		<li>
			Cadence-CRM
			<ol>
				<li>Cadence-CRM is a monthly subscription service</li>
				<li>
					Cadence-CRM is a limited service and does not include any API integrations or custom
					development but these are available to CRM clients
				</li>
				<li>
					Cadence-CRM is provided on an As-Is supported service. We experience 99.99% uptime and
					expect you will too, but offer no guarantee
				</li>
				<li>
					Cadence-CRM is provided on a month-to-month basis and can be cancelled at any time by
					cancelling your subscription
				</li>
				<li>
					Cancelled Subscriptions may be restarted by restarting a subscription, your data is
					archived and you can download it to host it elsewhere
				</li>
				<li>You may request your data be removed from our servers, permanently.</li>
				<li>
					You are provided with our Cadence-CRM Service for business sites that we build with you.
					Your data must be legal and may be subject to removal if we are asked to removed it by a
					legal authority.
				</li>
				<li>
					In rare cases, abusive actions, behaviour or software may result in the suspension or
					cancellation of your Cadence-CRM subscription
				</li>
				<li>
					We reserve the right to load balance your service and will advise if you exceed the limits
					with options for increased bandwidth to provide you with scaling.
				</li>
			</ol>
		</li>
		<li>
			General
			<ol>
				<li>
					Our services are provided on a best effort basis and we aim to provide you with the best
					service possible
				</li>
				<li>
					Our services are provided on a month-to-month basis and can be cancelled at any time by
					cancelling your subscription
				</li>
				<li>
					Cancelled Subscriptions may be restarted by restarting a subscription, your data is
					archived and you can download it to host it elsewhere
				</li>
				<li>You may request your data be removed from our servers, permanently.</li>
				<li>
					You are provided with our services for business sites that we build with you. Your data
					must be legal and may be subject to removal if we are asked to removed it by a legal
					authority.
				</li>
				<li>
					In rare cases, abusive actions, behaviour or software may result in the suspension or
					cancellation of your subscription
				</li>
				<li>
					We reserve the right to load balance your service and will advise if you exceed the limits
					with options for increased bandwidth to provide you with scaling.
				</li>
				<li>We operate with the priciples of Service, Success and Growth.</li>
			</ol>
		</li>
	</ol>
    <h3>AGREE WITH OUR TERMS?</h3>
    <p>
        <input type="checkbox" bind:checked={isAgreed}/>
        Then let's get started with your online business. <a href="/start">Start Now</a>
    </p>
    
    {#if !isAgreed}
        <p>Or, let us know and we can negotiate a custom agreement. Our rates may be adjusted for different terms.</p>
    {/if}
</div>
