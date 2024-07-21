import { Outlet } from 'react-router-dom';
import MobileHeader from 'components/MobileHeader/MobileHeader';
import { FiltersProvider } from 'store/FiltersProvider';
import { JokesListProvider } from 'store/JokesListProvider';

export default function AppProviders() {
  return (
    <FiltersProvider>
      <JokesListProvider>
        <MobileHeader />
        <Outlet />
      </JokesListProvider>
    </FiltersProvider>
  );
}
