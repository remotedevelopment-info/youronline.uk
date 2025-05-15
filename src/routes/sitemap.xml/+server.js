// src/routes/sitemap.xml/+server.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
    // Define your routes manually or import from your router
    const pages = [
        '/',
        '/about',
        '/contact',
        '/pricing',
        '/articles',
        '/articles/this-site',
        '/articles/this-site/privacy-policy',
        '/articles/this-site/terms-conditions',
        '/page/action',
        '/page/contact',
        '/page/pricing'
        // Add all your routes
    ];

    const stream = new SitemapStream({ hostname: 'https://youronline.app' });
    
    const urls = pages.map(page => ({
        url: page,
        changefreq: 'daily',
        priority: page === '/' ? 1.0 : 0.7
    }));

    const sitemap = await streamToPromise(Readable.from(urls).pipe(stream));

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}