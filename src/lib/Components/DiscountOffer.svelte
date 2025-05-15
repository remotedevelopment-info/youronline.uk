<script>
    export let title = "Special Limited Time Offer";
    export let description = "Don't miss out on this amazing deal!";
    export let originalPrice = 97.00;
    export let discountedPrice = 79.00;
    export let endDate = "2025-02-28";
</script>

<div class="special-offer">
    <div class="offer-badge">Special Offer</div>
    <h2>{title}</h2>
    <p>{description}</p>
    <div class="price-container">
        <span class="original-price">${originalPrice}</span>
        <span class="discounted-price">${discountedPrice}</span>
    </div>
    <p class="expiry">Offer ends: {new Date(endDate).toLocaleDateString()}</p>
    <button class="cta-button">Claim Offer Now</button>
</div>



<style>
    .special-offer {
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        position: relative;
        max-width: 400px;
        margin: 2rem auto;
    }

    .offer-badge {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #ff3e3e;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9rem;
    }

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.8rem;
    }

    .price-container {
        margin: 1.5rem 0;
    }

    .original-price {
        text-decoration: line-through;
        opacity: 0.7;
        margin-right: 1rem;
    }

    .discounted-price {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .cta-button {
        background: white;
        color: #ff6b6b;
        border: none;
        padding: 1rem 2rem;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s;
    }

    .cta-button:hover {
        transform: scale(1.05);
    }

    .expiry {
        font-size: 0.9rem;
        margin-top: 1rem;
        opacity: 0.9;
    }
</style>