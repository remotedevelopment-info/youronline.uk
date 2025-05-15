import adapter from '@sveltejs/adapter-vercel';
 
export default {
  kit: {
    adapter: adapter(),
  },
};
// import adapter from '@sveltejs/adapter-static';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown. On some platforms
// 			// these options are set automatically — see below
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: 'index.html',
// 			precompress: true,
// 			strict: true
// 		})
// 	}
// };