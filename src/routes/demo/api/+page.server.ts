
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const videos = await getVideos();
    const reviews = await getReviews();
    return {
        videos,
        reviews
    };
}
const strapi_apikey = 'c86f83ffab6dfb5ef851a91b900d2becbaa7ff3866ca342e7f120aa09dbee937f45ac991c1cd9ac92c188ad789b217e64089c9e9812f26f9f545b06971d5a8bfc49c4f7d7f5dedca12bb5819bd920ed84b438b7161525e2ff65e12c064a997f1ca38668075ec8ba6a6589ebe1d1482fb811d51ea49ba49bdefb742af9e6cb46f';
const strapi_url = 'http://127.0.0.1';
const strapi_port = '1337';
const url = `${strapi_url}:${strapi_port}`;   

const getReviews = async () => {
    const res = await fetch(`${url}/api/reviews`, {
        headers: {
            'Authorization': `Bearer ${strapi_apikey}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    console.log('data', data);  
    return data;
}

const getVideos = async () => {
    // const strapi_api_key = $env('STRAPI_API_KEY');
    const single = `${url}/api/video/md6172s593a45hjpmfoxmb5s`;
    const list = `${url}/api/videos?populate=url`;

    const res = await fetch(list,
        {
            headers: {
                'Authorization': `Bearer ${strapi_apikey}`,
                'Content-Type': 'application/json'
            }
        });
    const data = await res.json();
    return data;
}

