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

interface JokesListContextState extends JokesList {
  fetchJokes: (type: string, value: string) => Promise<void>;
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

  const fetchJokes = async (queryType: string, value: string) => {
    setJokesList({
      ...DEFAULT_JOKES_STORE,
      isLoading: true,
    });

    if (queryType === QueryType.SEARCH_BY_QUERY) {
      try {
        const searchByQueryJokes = await getBySearchJoke(value);

        setJokesList({
          ...DEFAULT_JOKES_STORE,
          response: searchByQueryJokes,
        });
      } catch (error) {
        if (error instanceof Error) {
          setJokesList({
            ...DEFAULT_JOKES_STORE,
            error,
          });
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      setJokesList({
        ...DEFAULT_JOKES_STORE,
        isLoading: true,
      });

      try {
        const randomJoke = await getRandomJoke();
        setJokesList({
          response: [randomJoke],
          isLoading: false,
          error: null,
        });
      } catch (error) {
        if (error instanceof Error) {
          setJokesList({
            ...DEFAULT_JOKES_STORE,
            error,
          });
        }
      }
    })();
  }, []);

  return (
    <JokesListContext.Provider value={{ ...jokesList, fetchJokes }}>
      {children}
    </JokesListContext.Provider>
  );
}
