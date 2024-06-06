import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import useQueryParams from 'hooks/useQueryParams';
import { QueryType } from 'types/enums/queryTypes';
import { getRandomJoke } from 'api/getRandomJoke';
import { getBySearchJoke } from 'api/getBySearchJoke';
import { Joke, JokesList, Option } from 'types/interfaces/CommonInterfaces';
import { getJokeCategories } from 'api/getJokeCategories';
import { getRandomCategoryJoke } from 'api/getRandomCategoryJoke';

const JOKES_ON_PAGE_COUNT = 10;

type FetchJokesFunction = (
  queryType: QueryType,
  value: string
) => Promise<void>;

type ChangeCategoryFunction = (category: Option) => void;

type CategoryList = Option[] | [];

interface LoadMoreAPI {
  loadMore: VoidFunction;
  visibleJokes: Joke[];
  isLoadMoreAllowed: boolean;
}

interface JokesListContextState extends JokesList {
  fetchJokes: FetchJokesFunction;
  loadMoreAPI: LoadMoreAPI;
  categoryList: CategoryList;
  changeCategory: ChangeCategoryFunction;
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
  categoryList: [],
  changeCategory: () => {},
};

const JokesListContext =
  createContext<JokesListContextState>(DEFAULT_JOKES_STORE);

export const useJokesList = () => useContext(JokesListContext);

export function JokesListProvider({ children }: PropsWithChildren) {
  const [jokesList, setJokesList] = useState<JokesList>(DEFAULT_JOKES_STORE);
  const [displayCount, setDisplayCount] = useState(JOKES_ON_PAGE_COUNT);
  const [searchValue, onChangeParams, onRemoveParams, isCategoryParam] =
    useQueryParams('', 'query');
  const [categoryList, setCategoryList] = useState<CategoryList>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const fetchJokes: FetchJokesFunction = async (queryType, value) => {
    setDisplayCount(JOKES_ON_PAGE_COUNT);
    setJokesList({
      ...DEFAULT_JOKES_STORE,
      isLoading: true,
    });

    try {
      let response = null;

      switch (queryType) {
        case QueryType.SEARCH_BY_QUERY: {
          onChangeParams(value);
          response = await getBySearchJoke({ query: value });
          break;
        }
        case QueryType.RANDOM_JOKE: {
          onRemoveParams();
          response = await getRandomJoke();
          console.log(response, 'randomJoke');
          break;
        }
        case QueryType.RANDOM_CATEGORY_JOKE: {
          onChangeParams(value, 'category');
          response = await getRandomCategoryJoke({
            category: value,
          });
          console.log(response, 'randomCategoryJoke');
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

  const changeCategory: ChangeCategoryFunction = async category => {
    setSelectedCategory(category.value);
    fetchJokes(QueryType.RANDOM_CATEGORY_JOKE, category.value.toLowerCase());
  };

  useEffect(() => {
    if (searchValue) {
      fetchJokes(QueryType.SEARCH_BY_QUERY, searchValue);
    } else if (!isCategoryParam) {
      fetchJokes(QueryType.RANDOM_JOKE, '');
    }
  }, [searchValue]);

  useEffect(() => {
    (async () => {
      const response = await getJokeCategories();
      setCategoryList(response);
    })();
  }, []);

  console.log(selectedCategory);

  return (
    <JokesListContext.Provider
      value={{
        ...jokesList,
        fetchJokes,
        loadMoreAPI: { loadMore, visibleJokes, isLoadMoreAllowed },
        categoryList,
        changeCategory,
        // selectedCategory,
      }}>
      {children}
    </JokesListContext.Provider>
  );
}
