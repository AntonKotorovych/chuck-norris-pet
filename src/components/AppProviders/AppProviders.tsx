import { Outlet } from 'react-router-dom';
import { FiltersProvider } from 'store/FiltersProvider';
import { JokesListProvider } from 'store/JokesListProvider';

export default function AppProviders() {
  return (
    <FiltersProvider>
      <JokesListProvider>
        <Outlet />
      </JokesListProvider>
    </FiltersProvider>
  );
}
