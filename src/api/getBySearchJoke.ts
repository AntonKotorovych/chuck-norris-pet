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

    if (category) return filterJokesList(response.data.result, category);

    return response.data.result;
  } catch (error) {
    throw error;
  }
}
