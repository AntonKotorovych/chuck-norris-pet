import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePage from 'pages/HomePage';
import AppProviders from 'components/AppProviders';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <AppProviders />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.JOKE_DETAIL,
        element: <HomePage />,
      },
    ],
  },
]);
