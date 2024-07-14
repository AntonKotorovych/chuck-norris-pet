export const ROUTES = {
  HOME: '/',
  JOKE: (jokeId: string) => `/joke/${jokeId ? jokeId : ''}`,
  FAVORITE_JOKES: '/favorite-jokes',
};
