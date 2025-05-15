<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    
    let timeLeft = 400;
    let days, hours, minutes, seconds;
    let dealShown = false;
    
    const DEAL_STORAGE_KEY = 'cadence-deal-shown';
    const DEAL_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days
    
    onMount(() => {
      const dealLastShown = localStorage.getItem(DEAL_STORAGE_KEY);
      if (!dealLastShown || Date.now() - parseInt(dealLastShown) > DEAL_DURATION) {
        dealShown = true;
        localStorage.setItem(DEAL_STORAGE_KEY, Date.now().toString());
        
        // Set initial countdown (24 hours from now)
        timeLeft = 24 * 60 * 60 * 1000;
        updateTimer();
        
        const timer = setInterval(() => {
          timeLeft -= 1000;
          if (timeLeft <= 0) {
            clearInterval(timer);
            dealShown = false;
          }
          updateTimer();
        }, 1000);
        
        return () => clearInterval(timer);
      }
    });
    
    function updateTimer() {
      days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }
    
    function closeDeal() {
      dealShown = false;
    }
  </script>
  
  {#if dealShown}
    <div
      transition:fade
      class="fixed bottom-4 right-4 max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 z-50"
    >
      <button
        on:click={closeDeal}
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
      >
        ×
      </button>
      
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Exclusive Launch Offer
      </h3>
      
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Get 3 months free when you sign up for an annual plan!
      </p>
      
      <div class="mt-4 grid grid-cols-4 gap-2 text-center">
        <div class="bg-blue-50 dark:bg-blue-900 rounded p-2">
          <span class="block text-lg font-bold text-blue-600 dark:text-blue-300">{days}</span>
          <span class="text-xs text-blue-600 dark:text-blue-300">Days</span>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900 rounded p-2">
          <span class="block text-lg font-bold text-blue-600 dark:text-blue-300">{hours}</span>
          <span class="text-xs text-blue-600 dark:text-blue-300">Hours</span>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900 rounded p-2">
          <span class="block text-lg font-bold text-blue-600 dark:text-blue-300">{minutes}</span>
          <span class="text-xs text-blue-600 dark:text-blue-300">Mins</span>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900 rounded p-2">
          <span class="block text-lg font-bold text-blue-600 dark:text-blue-300">{seconds}</span>
          <span class="text-xs text-blue-600 dark:text-blue-300">Secs</span>
        </div>
      </div>
      
      <a
        href="/pricing"
        class="mt-4 block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Claim Offer
      </a>
    </div>
  {/if}