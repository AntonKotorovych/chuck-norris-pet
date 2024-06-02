import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { QueryType } from 'types/enums/queryTypes';
import { getRandomJoke } from 'api/getRandomJoke';
import { getBySearchJoke } from 'api/getBySearchJoke';
import { JokesList } from 'types/interfaces/CommonInterfaces';

type fetchJokesFunction = (
  queryType: QueryType,
  value: string
) => Promise<void>;

interface JokesListContextState extends JokesList {
  fetchJokes: fetchJokesFunction;
}

const DEFAULT_JOKES_STORE: JokesListContextState = {
  response: null,
  isLoading: false,
  error: null,
  fetchJokes: async () => {},
};

const JokesListContext =
  createContext<JokesListContextState>(DEFAULT_JOKES_STORE);

export const useJokesList = () => useContext(JokesListContext);

export function JokesListProvider({ children }: PropsWithChildren) {
  const [jokesList, setJokesList] = useState<JokesList>(DEFAULT_JOKES_STORE);

  const fetchJokes: fetchJokesFunction = async (queryType, value) => {
    setJokesList({
      ...DEFAULT_JOKES_STORE,
      isLoading: true,
    });

    try {
      let response = null;

      switch (queryType) {
        case QueryType.SEARCH_BY_QUERY: {
          response = await getBySearchJoke({ query: value });
          break;
        }
        case QueryType.RANDOM_JOKE: {
          response = await getRandomJoke();
          break;
        }
      }

      setJokesList({
        ...DEFAULT_JOKES_STORE,
        response,
      });
    } catch (error) {
      if (error instanceof Error) {
        setJokesList({
          ...DEFAULT_JOKES_STORE,
          error,
        });
      }
    }
  };

  useEffect(() => {
    fetchJokes(QueryType.RANDOM_JOKE, '');
  }, []);

  return (
    <JokesListContext.Provider value={{ ...jokesList, fetchJokes }}>
      {children}
    </JokesListContext.Provider>
  );
}
