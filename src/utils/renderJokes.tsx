import JokeItem from 'components/JokesList/JokeItem';
import { Joke } from 'types/interfaces/CommonInterfaces';

export const renderJokes = (jokes: Joke[]) => {
  return jokes.map(joke => (
    <JokeItem
      key={joke.id}
      id={joke.id}
      categories={joke.categories}
      value={joke.value}
      url={joke.url}
      createdAt={joke.createdAt}
    />
  ));
};
