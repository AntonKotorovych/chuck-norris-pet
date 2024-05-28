import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getRandomJoke } from 'api/getRandomJoke';
import { JokesList } from 'types/interfaces/CommonInterfaces';

const DEFAULT_JOKES_STORE: JokesList = {
  response: null,
  isLoading: false,
  error: null,
};

const JokesListContext = createContext<JokesList>(DEFAULT_JOKES_STORE);

export const useJokesList = () => useContext(JokesListContext);

export function JokesListProvider({ children }: PropsWithChildren) {
  const [jokesList, setJokesList] = useState<JokesList>(DEFAULT_JOKES_STORE);

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
            response: null,
            isLoading: false,
            error,
          });
        }
      }
    })();
  }, []);

  return (
    <JokesListContext.Provider value={jokesList}>
      {children}
    </JokesListContext.Provider>
  );
}
