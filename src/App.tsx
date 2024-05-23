import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import HomePage from 'pages/HomePage';
import { JokesListProvider } from 'store/JokesListProvider';

function App() {
  return (
    <ApplicationStylesProvider>
      <JokesListProvider>
        <HomePage />
      </JokesListProvider>
    </ApplicationStylesProvider>
  );
}

export default App;
