import { useState } from 'react';

interface QueryParams {
  key: string;
  value: string;
}

export default function useQueryParams(
  initialState: string,
  paramsName: string
): [
  string,
  (state: string, paramsKey?: string) => void,
  VoidFunction,
  boolean,
] {
  const search = new URLSearchParams(window.location.search);
  const existingValue = search.get(paramsName);

  const [searchValue, setSearchValue] = useState<string>(
    existingValue ? existingValue : initialState
  );

  const [isCategoryParam, setIsCategory] = useState(false);

  const updateUrl = (queryParams?: QueryParams): void => {
    const searchParams = new URLSearchParams(window.location.search);

    if (queryParams) searchParams.set(queryParams.key, queryParams.value);

    const newUrl =
      window.location.pathname +
      (queryParams ? `?${searchParams.toString()}` : '');

    window.history.pushState({}, '', newUrl);
  };

  const onChangeParams = (state: string, paramsKey: string = paramsName) => {
    onRemoveParams();
    if (paramsKey === paramsName) {
      setIsCategory(false);
      setSearchValue(state);
    } else {
      setIsCategory(true);
      setSearchValue('');
    }
    updateUrl({ key: paramsKey, value: state });
  };

  const onRemoveParams = () => {
    updateUrl();
    setSearchValue('');
  };

  return [searchValue, onChangeParams, onRemoveParams, isCategoryParam];
}
