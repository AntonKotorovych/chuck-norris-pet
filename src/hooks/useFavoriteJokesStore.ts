import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Joke } from 'types/interfaces/CommonInterfaces';

interface FavoriteJokes {
  favoriteJokes: Joke[];
  addFavoriteJoke: (joke: Joke) => void;
  removeFavoriteJoke: (joke: Joke) => void;
}

export const useFavoriteJokesStore = create<FavoriteJokes>()(
  persist(
    set => ({
      favoriteJokes: [],
      addFavoriteJoke: joke =>
        set(state => ({ favoriteJokes: [...state.favoriteJokes, joke] })),
      removeFavoriteJoke: joke =>
        set(state => ({
          favoriteJokes: state.favoriteJokes.filter(
            favoriteJoke => favoriteJoke.id !== joke.id
          ),
        })),
    }),
    {
      name: 'favorite-jokes-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
