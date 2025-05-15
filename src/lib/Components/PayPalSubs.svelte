<script>
    // save the concept of subscriptions
</script>

{#if paypalId === 'basic-paypal-btn'}
<div id={paypalId} class="w-full">
    <PaypalOffer
        heading="Basic subscription"
        logo="/packages/basic.svg"
        setupPrice={0}
        monthly={49}
        annual={490}
        monthlyPaypalLink="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-396299840S993105VM77ARWA"
        monthlyDescription="Start subscription"
        annualNote=""
        annualDescription="12 months for the price of 10 months"
        annualPaypalLink=""
        planDetails="Basic subscription for 1 person business, 250 prospects and customers. Includes upgrades and basic support."
        disclaimer={true}
        invoicing={false}
    />
</div>
{:else if paypalId === 'premium-paypal-btn'}
<div id={paypalId} class="w-full">
    <PaypalOffer
        heading="Premium subscription"
        logo="/packages/premium.svg"
        setupPrice={0}
        monthly={99}
        annual={990}
        monthlyPaypalLink="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9M322418LL849400TM77ASWY"
        monthlyDescription="Start subscription"
        annualNote=""
        annualDescription="12 months for the price of 10 months"
        annualPaypalLink=""
        planDetails="Premium subscription for 1 person business, 1000 prospects and customers. Includes upgrades and basic support."
        disclaimer={true}
        invoicing={false}
    />
</div>
{:else if paypalId === 'enterprise-paypal-btn'}
<div id={paypalId} class="w-full">
    <PaypalOffer
        heading="Enterprise subscription"
        logo="/packages/enterprise.svg"
        setupPrice={0}
        monthly={4000}
        monthlyPaypalLink="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7PJ48337RA009662TM77ATXY"
        monthlyDescription="Start subscription"
        annualNote=""
        annualDescription="12 months for the price of 10 months"
        annualPaypalLink=""
        planDetails="Enterprise subscription for 1 person business, 5000 prospects and customers. Includes upgrades and basic support."
        disclaimer={true}
        invoicing={true}
    />
</div>
{/if}