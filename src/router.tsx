import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HomePage from 'pages/HomePage';
import AppProviders from 'components/AppProviders';
import JokePage from 'pages/JokePage';
import { jokeLoader } from 'utils/jokeLoader';
import FavoriteJokesPage from 'pages/FavoriteJokesPage';

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
        path: ROUTES.JOKE(':jokeId'),
        loader: jokeLoader,
        element: <JokePage />,
      },
      {
        path: ROUTES.FAVORITE_JOKES,
        element: <FavoriteJokesPage />,
      },
    ],
  },
]);
