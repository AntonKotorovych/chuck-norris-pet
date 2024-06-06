import { useState } from 'react';
import useGetQueryParams from './useGetQueryParams';

interface QueryParams {
  key: string;
  value: string;
}

interface ChangeParamsFunction {
  (state: string, paramsKey?: string): void;
}

export default function useQueryParams(
  initialState: string,
  paramsName: string
): [string, ChangeParamsFunction, VoidFunction, boolean] {
  const existingValue = useGetQueryParams(paramsName);

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

  const onChangeParams: ChangeParamsFunction = (
    state,
    paramsKey = paramsName
  ) => {
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
