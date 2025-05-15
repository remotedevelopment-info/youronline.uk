<script>
    import { articles } from '$lib/articles.js';
    import { pageState } from '$lib/states/pageState.svelte.js';

    pageState.title = 'Articles';
    pageState.strapline = 'List of articles';

    const showDates = $state(true);
    let sorted = articles;

    function dateSort() {
        sorted = articles.sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        });
    }

    function dateRSort() {
        sorted = articles.sort((b, a) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        });
    }

    function titleSort() {
        sorted = articles.sort((a, b) => {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
        });
    }

    function titleRSort() {
        sorted = articles.sort((b, a) => {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
        });
    }

    function dateToMonth(date) {
        const dateobj = new Date(date);
        const today = new Date();
        if (dateobj > today) {
            return 'Future';
        }
        const month = dateobj.toLocaleString('default', { month: 'long' });
        const day = dateobj.getDate();
        const year = dateobj.getFullYear();
        return `${month} ${day}, ${year}`;
    }
</script>
<div class="contain">
	<ul class="article-list">
		<li class="article">
			<div class="article-date heading">
				Date 
				<button on:click={dateRSort}>&uparrow;</button>
				<button on:click={dateSort}>&downarrow;</button>		
			</div>

			<div class="article-title heading">Title
				<button on:click={titleRSort}>&uparrow;</button>
				<button on:click={titleSort}>&downarrow;</button>	
			</div>
			<div class="article-description heading">Description
				<button>&nbsp;</button>
			</div>
		</li>
	</ul>		
		
	<ul class="article-list">
		{#each sorted as article, alt}
			<li class="article {alt / 2 == Math.trunc(alt / 2) ? 'color1' : 'color2'}">
				{#if dateToMonth(article.date) !== 'Future'}
					<div class="article-date">
						{#if showDates}
						<a class="link" href="/articles/{article.id}">{dateToMonth(article.date)}</a>
						{/if}
					</div>
					<div class="article-title">
						<a class="link" href="/articles/{article.id}">{article.title}</a>
					</div>
					<div class="article-description">{article.description}</div>
				{:else}
					<div class="article-date">(coming soon)</div>
					<div class="article-title">
						{article.title}
					</div>
					<div class="article-description">
						{article.description}
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	button {
		cursor: pointer;
	}
	.contain {
		width: 100%;
		margin: 1rem 0;
		padding: 0;
	}
	/* .color1 {
		background: var(--light);
	}
	.color2 {
		background: var(--lighter);
	} */
	.article-list {
		overflow: hidden;
		padding: 0 1rem;
	}
	.article {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr;
		margin-bottom: 1rem;
	}
	.article:first-child {
		border-top: 1px solid var(--light);
		padding-top: 1rem;
	}

	.heading {
		display: grid;
		grid-template-columns: 60px 40px 40px;
		align-items: baseline;
		justify-content: start;
		gap: 1px;
		font-weight: light;
		margin-left: 0.25rem;
	}
	.heading button {
		background: transparent;
		border: none;
		color: var(--white);
		cursor: pointer;

	}
	.article-title {
		font-weight: bold;
		font-size: 1.25rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 1200px;
		overflow: auto;
		width: 100%;
	}
	li {
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		align-items: start;
	}
	a {
		text-decoration: none;
	}
	a:hover {
		background: white;
		text-decoration: none;
		color: black;
		cursor: pointer;
		pointer-events: auto;
	}
	@media (min-width: 1024px) {
		.article {
			grid-template-columns: 200px 2fr 3fr;
		}
		.article-title {
			font-size: 1.25rem;
		}
	}
</style>
