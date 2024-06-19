import { PropsWithChildren, createContext, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface QueryParams {
  query?: string | null;
  category?: string | null;
}

type SetQueryFunction = (value?: string) => void;

interface FiltersStore {
  queryParams: QueryParams;
  setSearch: SetQueryFunction;
  setCategory: SetQueryFunction;
  clearAllFilters: VoidFunction;
}

const DEFAULT_FILTERS_STORE = {
  queryParams: { query: null, category: null },
  setSearch: () => {},
  setCategory: () => {},
  clearAllFilters: () => {},
};

const FiltersContext = createContext<FiltersStore>(DEFAULT_FILTERS_STORE);

export const useFilters = () => useContext(FiltersContext);

export function FiltersProvider({ children }: PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryParams = {
    query: searchParams.get('query'),
    category: searchParams.get('category'),
  };

  const updateSearchParams = (param: string, value: string | undefined) => {
    if (!value) {
      searchParams.delete(param);
    } else {
      searchParams.set(param, value);
    }

    setSearchParams(searchParams);
  };

  const setSearch = (value?: string) => updateSearchParams('query', value);

  const setCategory = (value?: string) => updateSearchParams('category', value);

  const clearAllFilters = () => {
    setSearchParams({});
  };

  return (
    <FiltersContext.Provider
      value={{
        queryParams,
        setSearch,
        setCategory,
        clearAllFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
