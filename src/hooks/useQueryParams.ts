import { useState } from 'react';

interface QueryParams {
  key: string;
  value: string;
}

export default function useQueryParams(
  initialState: string,
  paramsName: string
): [string, (state: string) => void, VoidFunction] {
  const search = new URLSearchParams(window.location.search);
  const existingValue = search.get(paramsName);

  const [searchValue, setSearchValue] = useState<string>(
    existingValue ? existingValue : initialState
  );

  const updateUrl = (queryParams?: QueryParams): void => {
    const searchParams = new URLSearchParams(window.location.search);

    if (queryParams) searchParams.set(queryParams.key, queryParams.value);

    const newUrl =
      window.location.pathname +
      (queryParams ? `?${searchParams.toString()}` : '');

    window.history.pushState({}, '', newUrl);
  };

  const onChangeParams = (state: string) => {
    setSearchValue(state);
    updateUrl({ key: paramsName, value: state });
  };

  const onRemoveParams = () => {
    updateUrl();
    setSearchValue('');
  };

  return [searchValue, onChangeParams, onRemoveParams];
}
