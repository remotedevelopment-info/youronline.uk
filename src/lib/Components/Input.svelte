<script lang="ts">
    import Icon from './Icon.svelte';
    /**
     * Input component - A simplified, styled wrapper for HTML input elements
     * Focuses on enhancing the native input with styling, validation feedback,
     * and useful extras like password toggle
     */
    let {
        // Only essential props we actually enhance
        label = '',
        helpText = '',
        errorMessage = '',
        
        // Styling options
        variant = 'primary' as 'primary' | 'error' | 'success',
        rounded = false,
        full = true,
        
        // Enhanced features
        icon = '',
        showPasswordToggle = false,
        
        // Class name for additional styling
        className = '',
        
        // All other props are passed through to the input element
        ...inputProps
    } = $props();
    
    // Local state
    let inputElement:HTMLInputElement | null = null;
    let showPassword = $state(false);
    let isFocused = $state(false);
    let isValid = $state(true);
    let isDirty = $state(false);
    let errorText = $state(errorMessage);
    
    // Handle password visibility
    function togglePasswordVisibility() {
        showPassword = !showPassword;
    }
    
    // Handle input events
    function handleInput(e) {
        isDirty = true;
        validateInput();
    }
    
    function handleBlur(e) {
        isFocused = false;
        if (isDirty) validateInput();
    }
    
    function handleFocus(e) {
        isFocused = true;
    }
    
    // Validate the input based on HTML5 validation
    function validateInput() {
        if (!inputElement) return;
        
        isValid = inputElement.checkValidity();
        errorText = isValid ? '' : (errorMessage || inputElement.validationMessage);
    }
    
    // Handle dynamic type for password toggle
    $effect(() => {
        if (inputProps.type === 'password' && showPassword) {
            inputElement?.setAttribute('type', 'text');
        } else if (inputElement && inputProps.type) {
            inputElement?.setAttribute('type', inputProps.type);
        }
    });
    
    // Computed styles based on variant and state
    const variantClasses = {
        'primary': 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-brand-500 dark:focus:border-brand-400',
        'error': 'bg-white dark:bg-gray-800 border-red-500 dark:border-red-400 focus:border-red-600 dark:focus:border-red-500',
        'success': 'bg-white dark:bg-gray-800 border-green-500 dark:border-green-400 focus:border-green-600 dark:focus:border-green-500',
    };
    
    // Combined classes
    const inputClasses = $derived(`
        block border transition-colors px-3 py-2 text-base
        text-gray-900 dark:text-gray-100 duration-150 ease-in-out
        outline-none focus:ring-2 focus:ring-opacity-30
        ${variantClasses[variant] || variantClasses.primary}
        ${rounded ? 'rounded-full' : 'rounded'}
        ${full ? 'w-full' : ''}
        ${icon ? 'pl-10' : ''}
        ${!isValid && isDirty ? 'border-red-500 dark:border-red-400 focus:border-red-600 focus:ring-red-200' : ''}
        ${isFocused ? 'focus:ring-brand-200 dark:focus:ring-brand-700' : ''}
    `);
</script>

<div class="input-wrapper {full ? 'w-full' : ''} {className || ''}">
    {#if label}
        <label 
            for={inputProps.id} 
            class="block mb-1 font-medium text-gray-900 dark:text-gray-200 text-sm"
        >
            {label}
            {#if inputProps.required}<span class="ml-1 text-red-500">*</span>{/if}
        </label>
    {/if}
    
    <div class="relative">
        {#if icon}
            <div class="left-0 absolute inset-y-0 flex items-center pl-3 text-gray-500 pointer-events-none">
                <Icon name={icon} size="16" />
            </div>
        {/if}
        
        <input
            {...inputProps}
            class={inputClasses}
            oninput={handleInput}
            onblur={handleBlur}
            onfocus={handleFocus}
            aria-invalid={!isValid}
            aria-describedby={helpText ? `${inputProps.id}-help` : undefined}
            bind:this={inputElement}
        />
        
        {#if inputProps.type === 'password' && showPasswordToggle}
            <button 
                type="button"
                class="right-0 absolute inset-y-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
                onclick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
                <Icon name={showPassword ? 'eye-off' : 'eye'} size="16" />
            </button>
        {/if}
    </div>
    
    {#if helpText && (!errorText || isValid)}
        <p id="{inputProps.id}-help" class="mt-1 text-gray-500 dark:text-gray-400 text-sm">{helpText}</p>
    {/if}
    
    {#if errorText && !isValid && isDirty}
        <p class="mt-1 text-red-500 text-sm">{errorText}</p>
    {/if}
</div>

<style>
    .input-wrapper {
        margin-bottom: 1rem;
    }
    
    /* Fix for Firefox inner outline */
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
    
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>