import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
        data: params.meeting,
        meeting: params.meeting,
        title: 'Meeting',
        description: 'Meeting',
    };
}