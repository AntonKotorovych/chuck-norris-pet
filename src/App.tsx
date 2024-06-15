import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import HomePage from 'pages/HomePage';
import { JokesListProvider } from 'store/JokesListProvider';
import { FiltersProvider } from 'store/FiltersProvider';

function App() {
  return (
    <ApplicationStylesProvider>
      <FiltersProvider>
        <JokesListProvider>
          <HomePage />
        </JokesListProvider>
      </FiltersProvider>
    </ApplicationStylesProvider>
  );
}

export default App;
