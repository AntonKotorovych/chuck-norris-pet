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
import { Joke, JokesList, Option } from 'types/interfaces/CommonInterfaces';
import { getJokeCategories } from 'api/getJokeCategories';
import { getRandomCategoryJoke } from 'api/getRandomCategoryJoke';
import { getJokesByCategoryFilter } from 'api/getJokesByCategoryFilter';
import { QueryParams, useFilters } from './FiltersProvider';

const JOKES_ON_PAGE_COUNT = 10;

type FetchJokesFunction = (state: QueryParams) => Promise<void>;

type CategoryList = Option[] | [];

interface LoadMoreAPI {
  loadMore: VoidFunction;
  visibleJokes: Joke[];
  isLoadMoreAllowed: boolean;
}

interface JokesListContextState extends JokesList {
  fetchJokes: FetchJokesFunction;
  loadMoreAPI: LoadMoreAPI;
}

const DEFAULT_JOKES_STORE: JokesListContextState = {
  response: null,
  isLoading: false,
  error: null,
  fetchJokes: async () => {},
  loadMoreAPI: {
    loadMore: () => {},
    visibleJokes: [],
    isLoadMoreAllowed: false,
  },
};

const JokesListContext =
  createContext<JokesListContextState>(DEFAULT_JOKES_STORE);

export const useJokesList = () => useContext(JokesListContext);

export function JokesListProvider({ children }: PropsWithChildren) {
  const [jokesList, setJokesList] = useState<JokesList>(DEFAULT_JOKES_STORE);
  const [displayCount, setDisplayCount] = useState(JOKES_ON_PAGE_COUNT);

  const { state } = useFilters();

  const fetchJokes: FetchJokesFunction = useCallback(async state => {
    setDisplayCount(JOKES_ON_PAGE_COUNT);
    setJokesList({
      ...DEFAULT_JOKES_STORE,
      isLoading: true,
    });

    try {
      let response = null;

      if (state.query) {
        response = await getBySearchJoke({ query: state.query });
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
        fetchJokes,
        loadMoreAPI: { loadMore, visibleJokes, isLoadMoreAllowed },
      }}>
      {children}
    </JokesListContext.Provider>
  );
}
