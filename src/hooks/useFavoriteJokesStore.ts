import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Joke } from 'types/interfaces/CommonInterfaces';

interface FavoriteJokesState {
  favoriteJokes: Joke[];
  selectedJokes: Joke[];
  jokesToRemove: Joke[];
}

interface FavoriteJokesActions {
  addFavoriteJoke: (joke: Joke) => void;
  removeFavoriteJoke: (joke: Joke) => void;
  isFavoriteJoke: (jokeId: string) => boolean;
  initializeSelectedJokes: VoidFunction;
  isChosenJoke: (jokeId: string) => boolean;
  toggleSelectedJoke: (joke: Joke) => void;
  selectAllJokes: (jokes: Joke[]) => void;
  deselectAllJokes: (jokes: Joke[]) => void;
  saveSelectedJokes: VoidFunction;
  areAllSelected: (jokesList: Joke[]) => boolean;
  areSomeSelected: (jokesList: Joke[]) => boolean;
  isNotSelected: (jokesList: Joke[]) => boolean;
}

const DEFAULT_JOKES_STATE: FavoriteJokesState = {
  favoriteJokes: [],
  selectedJokes: [],
  jokesToRemove: [],
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
        set(state => ({
          selectedJokes: [...state.favoriteJokes],
          jokesToRemove: [],
        })),
      isChosenJoke: jokeId =>
        get().selectedJokes.some(selectedJoke => jokeId === selectedJoke.id),
      toggleSelectedJoke: joke => {
        set(state => {
          if (state.isChosenJoke(joke.id)) {
            return {
              selectedJokes: state.selectedJokes.filter(
                selectedJoke => selectedJoke.id !== joke.id
              ),
              jokesToRemove: [...state.jokesToRemove, joke],
            };
          } else {
            return {
              jokesToRemove: state.jokesToRemove.filter(
                jokeToRemove => jokeToRemove.id !== joke.id
              ),
              selectedJokes: [...state.selectedJokes, joke],
            };
          }
        });
      },
      selectAllJokes: jokes => set({ selectedJokes: jokes, jokesToRemove: [] }),
      deselectAllJokes: jokes => set({ selectedJokes: [], jokesToRemove: jokes }),
      saveSelectedJokes: () => {
        set(state => {
          const filteredFavoriteJokes = state.favoriteJokes.filter(
            favoriteJoke =>
              !state.jokesToRemove.some(
                jokeToRemove => favoriteJoke.id === jokeToRemove.id
              )
          );

          const jokesToAdd = state.selectedJokes.filter(
            selectedJoke =>
              !filteredFavoriteJokes.some(
                favoriteJoke => selectedJoke.id === favoriteJoke.id
              )
          );

          return {
            favoriteJokes: filteredFavoriteJokes.concat(jokesToAdd),
            selectedJokes: [],
            jokesToRemove: [],
          };
        });
      },
      areAllSelected: jokesList => get().selectedJokes.length === jokesList.length,

      areSomeSelected: jokesList => {
        const selectedJokesLength = get().selectedJokes.length;
        return selectedJokesLength > 0 && selectedJokesLength < jokesList.length;
      },

      isNotSelected: jokesList =>
        get().selectedJokes.every(
          selectedJoke => !jokesList.some(joke => joke.id === selectedJoke.id)
        ),
    }),
    {
      name: 'favorite-jokes-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
