export default function useGetQueryParams(paramKey: string): string {
  return new URLSearchParams(window.location.search).get(paramKey) || '';
}
