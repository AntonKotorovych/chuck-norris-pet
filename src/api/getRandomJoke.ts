import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';
import { Joke } from 'types/interfaces/CommonInterfaces';

export async function getRandomJoke(): Promise<Joke[]> {
  try {
    const response = await instance.get(API_ROUTER.RANDOM_JOKE);

    if (response.data) {
      return [response.data];
    }

    return [];
  } catch (error) {
    throw error;
  }
}
