import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { QueryType } from 'types/enums/queryTypes';
import { getRandomJoke } from 'api/getRandomJoke';
import { getBySearchJoke } from 'api/getBySearchJoke';
import { Joke, JokesList } from 'types/interfaces/CommonInterfaces';

const JOKES_ON_PAGE_COUNT = 10;

type fetchJokesFunction = (
  queryType: QueryType,
  value: string
) => Promise<void>;

interface LoadMoreAPI {
  loadMore: VoidFunction;
  jokeList: Joke[];
  isLoadMoreAllowed: boolean;
}

interface JokesListContextState extends JokesList {
  fetchJokes: fetchJokesFunction;
  loadMoreAPI: LoadMoreAPI;
}

const DEFAULT_JOKES_STORE: JokesListContextState = {
  response: null,
  isLoading: false,
  error: null,
  fetchJokes: async () => {},
  loadMoreAPI: {
    loadMore: () => {},
    jokeList: [],
    isLoadMoreAllowed: false,
  },
};

const JokesListContext =
  createContext<JokesListContextState>(DEFAULT_JOKES_STORE);

export const useJokesList = () => useContext(JokesListContext);

export function JokesListProvider({ children }: PropsWithChildren) {
  const [jokesList, setJokesList] = useState<JokesList>(DEFAULT_JOKES_STORE);
  const [displayCount, setDisplayCount] = useState(JOKES_ON_PAGE_COUNT);

  const fetchJokes: fetchJokesFunction = async (queryType, value) => {
    setDisplayCount(JOKES_ON_PAGE_COUNT);
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

  const loadMore = () => {
    const newDisplayCount = displayCount + JOKES_ON_PAGE_COUNT;
    setDisplayCount(newDisplayCount);
  };

  const jokeList = useMemo(() => {
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

    if (response && jokeList) {
      return response.length > jokeList.length;
    }
    return false;
  }, [jokesList, jokeList]);

  useEffect(() => {
    fetchJokes(QueryType.RANDOM_JOKE, '');
  }, []);

  return (
    <JokesListContext.Provider
      value={{
        ...jokesList,
        fetchJokes,
        loadMoreAPI: { loadMore, jokeList, isLoadMoreAllowed },
      }}>
      {children}
    </JokesListContext.Provider>
  );
}
