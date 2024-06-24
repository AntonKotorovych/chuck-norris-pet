import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Joke } from 'types/interfaces/CommonInterfaces';

interface FavoriteJokesState {
  favoriteJokes: Joke[];
}

interface FavoriteJokesActions {
  addFavoriteJoke: (joke: Joke) => void;
  removeFavoriteJoke: (joke: Joke) => void;
  isFavoriteJoke: (jokeId: string) => boolean;
}

const DEFAULT_JOKES_STATE: FavoriteJokesState = {
  favoriteJokes: [],
};

type FavoriteJokesStore = FavoriteJokesState & FavoriteJokesActions;

export const useFavoriteJokesStore = create<FavoriteJokesStore>()(
  persist(
    (set, get) => ({
      ...DEFAULT_JOKES_STATE,
      addFavoriteJoke: joke =>
        set(state => ({ favoriteJokes: [...state.favoriteJokes, joke] })),
      removeFavoriteJoke: joke =>
        set(state => ({
          favoriteJokes: state.favoriteJokes.filter(
            favoriteJoke => favoriteJoke.id !== joke.id
          ),
        })),
      isFavoriteJoke: jokeId =>
        get().favoriteJokes.some(favoriteJoke => jokeId === favoriteJoke.id),
    }),
    {
      name: 'favorite-jokes-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
