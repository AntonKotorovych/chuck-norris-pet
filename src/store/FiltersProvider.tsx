import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

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

enum Params {
  QUERY = 'query',
  CATEGORY = 'category',
}

const DEFAULT_FILTERS_STORE = {
  state: { query: null, category: null },
  setSearch: () => {},
  setCategory: () => {},
  clearAllFilters: () => {},
};

const FiltersContext = createContext<FiltersStore>(DEFAULT_FILTERS_STORE);

export const useFilters = () => useContext(FiltersContext);

export function FiltersProvider({ children }: PropsWithChildren) {
  const [searchParams, setSearchParams] = useSearchParams();

  const state = useMemo(
    () => ({
      query: searchParams.get(Params.QUERY),
      category: searchParams.get(Params.CATEGORY),
    }),
    [searchParams]
  );

  const updateSearchParams = (
    param: Params.QUERY | Params.CATEGORY,
    value: string | undefined
  ) => {
    if (!value) {
      searchParams.delete(param);
    } else {
      searchParams.set(param, value);
    }

    setSearchParams(searchParams);
  };

  const setSearch = (value?: string) => updateSearchParams(Params.QUERY, value);

  const setCategory = (value?: string) => updateSearchParams(Params.CATEGORY, value);

  const clearAllFilters = () => setSearchParams({});

  return (
    <FiltersContext.Provider
      value={{
        state,
        setSearch,
        setCategory,
        clearAllFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
