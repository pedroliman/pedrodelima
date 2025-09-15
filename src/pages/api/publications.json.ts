import type { APIRoute } from 'astro';
import { getAugmentedPublications } from '../../data/publication-provider';

export const GET: APIRoute = async () => {
  try {
    const publications = await getAugmentedPublications();
    return new Response(JSON.stringify(publications), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to load publications' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};