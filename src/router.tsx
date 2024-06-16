import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePage from 'pages/HomePage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME_PAGE,
    element: <HomePage />,
  },
]);
