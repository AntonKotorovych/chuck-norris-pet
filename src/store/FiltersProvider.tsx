import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from 'react';

enum DispatchType {
  SET_SEARCH,
  SET_CATEGORY,
  CLEAR_FILTERS,
}

interface QueryParams {
  query?: string | null;
  category?: string | null;
}

type SetQueryFunction = (value?: string) => void;

interface FiltersStore {
  state: QueryParams;
  setSearch: SetQueryFunction;
  setCategory: SetQueryFunction;
  clearAllFilters: VoidFunction;
}

interface Action {
  type: DispatchType;
  payload?: string;
}

const DEFAULT_FILTERS_STORE = {
  state: {
    query: '',
    category: '',
  },
  setSearch: () => {},
  setCategory: () => {},
  clearAllFilters: () => {},
};

const FiltersContext = createContext<FiltersStore>(DEFAULT_FILTERS_STORE);

export const useFilters = () => useContext(FiltersContext);

const filterReducer = (state: QueryParams, action: Action): QueryParams => {
  switch (action.type) {
    case DispatchType.SET_SEARCH: {
      return { ...state, query: action.payload };
    }

    case DispatchType.SET_CATEGORY: {
      return { ...state, category: action.payload };
    }

    case DispatchType.CLEAR_FILTERS: {
      return {};
    }

    default:
      return state;
  }
};

const getReducerInitialState = (params: URLSearchParams): QueryParams => {
  return { query: params.get('query'), category: params.get('category') };
};

export function FiltersProvider({ children }: PropsWithChildren) {
  const queryParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  const [state, dispatch] = useReducer(
    filterReducer,
    getReducerInitialState(queryParams)
  );

  const updateUrlParams = (key: string, value?: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

    window.history.pushState({}, '', newUrl);
  };

  const setSearch = (value?: string) => {
    dispatch({ type: DispatchType.SET_SEARCH, payload: value });
    updateUrlParams('query', value);
  };

  const setCategory = (value?: string) => {
    dispatch({ type: DispatchType.SET_CATEGORY, payload: value });
    updateUrlParams('category', value);
  };

  const clearAllFilters = () => {
    dispatch({ type: DispatchType.CLEAR_FILTERS });
    updateUrlParams('query');
    updateUrlParams('category');
  };

  return (
    <FiltersContext.Provider
      value={{ state, setSearch, setCategory, clearAllFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
