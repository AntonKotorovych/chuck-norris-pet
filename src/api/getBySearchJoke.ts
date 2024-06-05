import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';
import { Joke } from 'types/interfaces/CommonInterfaces';

export async function getBySearchJoke(params: {
  query: string;
}): Promise<Joke[]> {
  try {
    const response = await instance.get(API_ROUTER.SEARCH_JOKE, {
      params,
    });

    return response.data.result;
  } catch (error) {
    throw error;
  }
}
