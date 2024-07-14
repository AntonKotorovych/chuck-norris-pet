import { RouterProvider } from 'react-router-dom';
import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import { router } from 'router';
import 'react-toastify/dist/ReactToastify.css';
import Toaster from 'components/Toaster';

function App() {
  return (
    <>
      <ApplicationStylesProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ApplicationStylesProvider>
    </>
  );
}

export default App;
