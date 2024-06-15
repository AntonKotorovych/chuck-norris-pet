import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';
import { Joke } from 'types/interfaces/CommonInterfaces';
import { filterJokesList } from 'utils/filterJokesList';

export async function getBySearchJoke(
  params: {
    query: string;
  },
  category?: string
): Promise<Joke[]> {
  try {
    const response = await instance.get(API_ROUTER.SEARCH_JOKE, {
      params,
    });

    const jokes = response.data.result;

    if (category) return filterJokesList(jokes, category);

    return jokes;
  } catch (error) {
    throw error;
  }
}
