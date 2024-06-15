import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

enum DispatchType {
  SET_SEARCH = 'SET_SEARCH',
  SET_CATEGORY = 'SET_CATEGORY',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
}

export interface QueryParams {
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

const filterReducer = (
  state: QueryParams,
  { type, payload }: Action
): QueryParams => {
  switch (type) {
    case DispatchType.SET_SEARCH: {
      return { ...state, query: payload };
    }
    case DispatchType.SET_CATEGORY: {
      return { ...state, category: payload };
    }
    case DispatchType.CLEAR_FILTERS: {
      return { query: '', category: '' };
    }
    default:
      return state;
  }
};

export function FiltersProvider({ children }: PropsWithChildren) {
  const queryParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  const [state, dispatch] = useReducer(filterReducer, {
    query: queryParams.get('query'),
    category: queryParams.get('category'),
  });

  const updateUrlParams = useCallback(
    (params: QueryParams) => {
      const searchParams = queryParams;

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          searchParams.set(key, value);
        } else {
          searchParams.delete(key);
        }
      });

      const newUrl = `${window.location.pathname}${searchParams.size !== 0 ? '?' + searchParams.toString() : ''}`;

      window.history.pushState({}, '', newUrl);
    },
    [queryParams]
  );

  const setSearch = (value?: string) => {
    dispatch({ type: DispatchType.SET_SEARCH, payload: value });
  };

  const setCategory = (value?: string) => {
    dispatch({ type: DispatchType.SET_CATEGORY, payload: value });
  };

  const clearAllFilters = () => {
    dispatch({ type: DispatchType.CLEAR_FILTERS });
  };

  useEffect(() => {
    updateUrlParams(state);
  }, [state, updateUrlParams]);

  return (
    <FiltersContext.Provider
      value={{ state, setSearch, setCategory, clearAllFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
