import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';

export async function getBySearchJoke(query: string) {
  try {
    const response = await instance.get(API_ROUTER.SEARCH_JOKE, {
      params: { query },
    });
    return response.data.result;
  } catch (error) {
    throw error;
  }
}
