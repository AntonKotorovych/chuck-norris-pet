import { RANDOM_JOKE } from 'constants/apiRoutes';
import instance from 'libs/axios';

export async function getRandomJoke() {
  try {
    const response = await instance.get(RANDOM_JOKE);
    return response.data;
  } catch (error) {
    throw error;
  }
}
