import { RouterProvider } from 'react-router-dom';
import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import { router } from 'router';

function App() {
  return (
    <ApplicationStylesProvider>
      <RouterProvider router={router} />
    </ApplicationStylesProvider>
  );
}

export default App;
