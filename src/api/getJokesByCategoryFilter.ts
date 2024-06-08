import { API_ROUTER } from 'constants/apiRoutes';
import instance from 'libs/axios';
import { Joke } from 'types/interfaces/CommonInterfaces';

const filterJokesList = (jokesList: Joke[], currentCategory: string) => {
  if (!jokesList) return [];

  return jokesList.filter(joke => joke.categories.includes(currentCategory));
};

export async function getJokesByCategoryFilter(
  params: {
    query: string;
  },
  categoryName: string
): Promise<Joke[]> {
  try {
    const response = await instance.get(API_ROUTER.SEARCH_JOKE, {
      params,
    });

    return filterJokesList(response.data.result, categoryName);
  } catch (error) {
    throw error;
  }
}
