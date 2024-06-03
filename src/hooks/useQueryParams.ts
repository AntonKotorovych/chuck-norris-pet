import { useState } from 'react';

export default function useQueryParams(
  initialState: string,
  paramsName: string
): [string, (state: string) => void, VoidFunction] {
  const search = new URLSearchParams(window.location.search);
  const existingValue = search.get(paramsName);

  const [paramsState, setParamsState] = useState<string>(
    existingValue ? existingValue : initialState
  );

  const generateUrl = (
    queryParams?: string,
    homePage = window.location.pathname
  ): string => homePage + (queryParams ? `?${queryParams}` : '');

  const onChangeParams = (state: string) => {
    setParamsState(state);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(paramsName, state);

    const newUrl = generateUrl(searchParams.toString());
    window.history.pushState({}, '', newUrl);
  };

  const onRemoveParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(paramsName);

    const newUrl = generateUrl();
    window.history.pushState({}, '', newUrl);
    setParamsState('');
  };

  return [paramsState, onChangeParams, onRemoveParams];
}
