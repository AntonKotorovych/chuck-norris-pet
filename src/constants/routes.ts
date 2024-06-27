export const ROUTES = {
  HOME: '/',
  JOKE: (jokeId: string) => `/joke/${jokeId ? jokeId : ''}`,
};
