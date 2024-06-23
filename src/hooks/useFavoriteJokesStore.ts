import { create } from 'zustand';
import { Joke } from 'types/interfaces/CommonInterfaces';

interface FavoriteJokes {
  favoriteJokes: Joke[];
  addFavoriteJoke: (joke: Joke) => void;
}

export const useFavoriteJokesStore = create<FavoriteJokes>(set => ({
  favoriteJokes: [],
  addFavoriteJoke: joke =>
    set(state => ({ favoriteJokes: [...state.favoriteJokes, joke] })),
}));
