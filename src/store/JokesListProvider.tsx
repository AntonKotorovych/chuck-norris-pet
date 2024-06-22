import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getRandomJoke } from 'api/getRandomJoke';
import { getBySearchJoke } from 'api/getBySearchJoke';
import { Joke, JokesList } from 'types/interfaces/CommonInterfaces';
import { QueryParams, useFilters } from './FiltersProvider';

const JOKES_ON_PAGE_COUNT = 10;

type FetchJokesFunction = (state: QueryParams) => Promise<void>;

interface LoadMoreAPI {
  loadMore: VoidFunction;
  visibleJokes: Joke[];
  isLoadMoreAllowed: boolean;
}

interface JokesListContextState extends JokesList {
  loadMoreAPI: LoadMoreAPI;
}

const DEFAULT_JOKES_STORE: JokesListContextState = {
  response: null,
  isLoading: false,
  error: null,
  loadMoreAPI: {
    loadMore: () => {},
    visibleJokes: [],
    isLoadMoreAllowed: false,
  },
};

const JokesListContext = createContext<JokesListContextState>(DEFAULT_JOKES_STORE);

export const useJokesList = () => useContext(JokesListContext);

export function JokesListProvider({ children }: PropsWithChildren) {
  const [jokesList, setJokesList] = useState<JokesList>(DEFAULT_JOKES_STORE);
  const [displayCount, setDisplayCount] = useState(JOKES_ON_PAGE_COUNT);

  const { state } = useFilters();

  const fetchJokes: FetchJokesFunction = useCallback(async queryParams => {
    setDisplayCount(JOKES_ON_PAGE_COUNT);
    setJokesList({
      ...DEFAULT_JOKES_STORE,
      isLoading: true,
    });

    try {
      let response = null;

      if (queryParams.query && queryParams.category) {
        response = await getBySearchJoke(
          { query: queryParams.query },
          queryParams.category
        );
      } else if (queryParams.query) {
        response = await getBySearchJoke({ query: queryParams.query });
      } else if (queryParams.category) {
        response = await getRandomJoke({ category: queryParams.category });
      } else {
        response = await getRandomJoke();
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
  }, []);

  const loadMore = () => {
    const newDisplayCount = displayCount + JOKES_ON_PAGE_COUNT;
    setDisplayCount(newDisplayCount);
  };

  const visibleJokes = useMemo(() => {
    const { response } = jokesList;

    if (response) {
      if (response.length <= displayCount) {
        return response;
      }

      return response.slice(0, displayCount);
    }

    return [];
  }, [jokesList, displayCount]);

  const isLoadMoreAllowed = useMemo(() => {
    const { response } = jokesList;

    if (response && visibleJokes) {
      return response.length > visibleJokes.length;
    }
    return false;
  }, [jokesList, visibleJokes]);

  useEffect(() => {
    fetchJokes(state);
  }, [state, fetchJokes]);

  return (
    <JokesListContext.Provider
      value={{
        ...jokesList,
        loadMoreAPI: { loadMore, visibleJokes, isLoadMoreAllowed },
      }}
    >
      {children}
    </JokesListContext.Provider>
  );
}
