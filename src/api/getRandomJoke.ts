import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';
import { Joke } from 'types/interfaces/CommonInterfaces';

export async function getRandomJoke(params?: {
  category: string;
}): Promise<Joke[]> {
  try {
    if (!params) {
      const response = await instance.get(API_ROUTER.RANDOM_JOKE);
      return [response.data];
    } else {
      const response = await instance.get(API_ROUTER.RANDOM_JOKE, {
        params,
      });
      return [response.data];
    }
  } catch (error) {
    throw error;
  }
}
