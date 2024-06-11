import instance from 'libs/axios';

import { API_ROUTER } from 'constants/apiRoutes';

export async function getJokeCategories(): Promise<string[] | null> {
  try {
    const response = await instance.get(API_ROUTER.CATEGORY_LIST);

    if (response.data) return response.data;

    return null;
  } catch (error) {
    throw error;
  }
}
