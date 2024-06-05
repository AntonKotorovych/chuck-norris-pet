import instance from 'libs/axios';

import { API_ROUTER } from 'constants/apiRoutes';
import { Option } from 'types/interfaces/CommonInterfaces';

export async function getJokeCategories(): Promise<Option[] | []> {
  try {
    const response = await instance.get(API_ROUTER.CATEGORY_LIST);

    if (response.data) {
      return response.data.map((category: string) => {
        const upperCaseCategory = category.toUpperCase();

        return {
          label: upperCaseCategory,
          value: upperCaseCategory,
        };
      });
    }

    return [];
  } catch (error) {
    throw error;
  }
}
