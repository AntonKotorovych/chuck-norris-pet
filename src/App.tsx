import { RouterProvider } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import ApplicationStylesProvider from 'styled/ApplicationStylesProvider';
import { router } from 'router';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ApplicationStylesProvider>
        <RouterProvider router={router} />
      </ApplicationStylesProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Zoom}
      />
    </>
  );
}

export default App;
