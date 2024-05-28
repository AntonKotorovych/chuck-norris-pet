import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';

export async function getRandomJoke() {
  try {
    const response = await instance.get(API_ROUTER.RANDOM_JOKE);
    return response.data;
  } catch (error) {
    throw error;
  }
}
