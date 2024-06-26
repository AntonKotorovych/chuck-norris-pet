import { useCallback, useState } from 'react';
import { getJokeById } from 'api/getJokeById';
import { Joke } from 'types/interfaces/CommonInterfaces';

interface JokeState {
  joke: Joke | null;
  isLoading: boolean;
  error: Error | null;
}

const INITIAL_STATE = {
  joke: null,
  isLoading: false,
  error: null,
};

export const useJoke = () => {
  const [jokeState, setJokeState] = useState<JokeState>(INITIAL_STATE);

  const fetchSingleJoke = useCallback(async (jokeId: string) => {
    setJokeState(prevState => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      const fetchedJoke = await getJokeById(jokeId);

      setJokeState({
        joke: fetchedJoke,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      if (error instanceof Error)
        setJokeState({
          joke: null,
          isLoading: false,
          error,
        });
    }
  }, []);

  return { jokeState, fetchSingleJoke };
};
