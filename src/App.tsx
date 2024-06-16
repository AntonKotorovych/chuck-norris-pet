import { RouterProvider } from 'react-router-dom';
import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import { JokesListProvider } from 'store/JokesListProvider';
import { FiltersProvider } from 'store/FiltersProvider';
import { router } from 'router';

function App() {
  return (
    <ApplicationStylesProvider>
      <FiltersProvider>
        <JokesListProvider>
          <RouterProvider router={router} />
        </JokesListProvider>
      </FiltersProvider>
    </ApplicationStylesProvider>
  );
}

export default App;
