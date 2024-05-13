import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <ApplicationStylesProvider>
      <HomePage />
    </ApplicationStylesProvider>
  );
}

export default App;
