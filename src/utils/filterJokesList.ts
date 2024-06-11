import { Joke } from 'types/interfaces/CommonInterfaces';

export const filterJokesList = (jokesList: Joke[], currentCategory: string) => {
  if (!jokesList) return [];

  return jokesList.filter(joke => joke.categories.includes(currentCategory));
};
