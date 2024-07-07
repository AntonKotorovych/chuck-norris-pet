import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Joke } from 'types/interfaces/CommonInterfaces';

interface FavoriteJokesState {
  favoriteJokes: Joke[];
  selectedJokes: Joke[];
}

interface FavoriteJokesActions {
  addFavoriteJoke: (joke: Joke) => void;
  removeFavoriteJoke: (joke: Joke) => void;
  isFavoriteJoke: (jokeId: string) => boolean;
  initializeSelectedJokes: VoidFunction;
  isChosenJoke: (jokeId: string) => boolean;
  toggleSelectedJoke: (joke: Joke) => void;
}

const DEFAULT_JOKES_STATE: FavoriteJokesState = {
  favoriteJokes: [],
  selectedJokes: [],
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
      initializeSelectedJokes: () =>
        set(state => ({ selectedJokes: [...state.favoriteJokes] })),
      isChosenJoke: jokeId =>
        get().selectedJokes.some(selectedJoke => jokeId === selectedJoke.id),
      toggleSelectedJoke: joke => {
        set(state => {
          const isChosen = state.selectedJokes.some(
            selectedJoke => selectedJoke.id === joke.id
          );

          if (isChosen) {
            return {
              selectedJokes: state.selectedJokes.filter(
                selectedJoke => selectedJoke.id !== joke.id
              ),
            };
          } else {
            return {
              selectedJokes: [...state.selectedJokes, joke],
            };
          }
        });
      },
    }),
    {
      name: 'favorite-jokes-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
