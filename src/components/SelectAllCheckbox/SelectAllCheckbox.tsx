import { ChangeEvent } from 'react';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { Joke } from 'types/interfaces/CommonInterfaces';
import Checkbox from 'components/Checkbox';
import { StyledLabel, StyledText } from './styled';

interface Props {
  jokesList: Joke[];
}

export default function SelectAllCheckbox({ jokesList }: Props) {
  const selectAllJokes = useFavoriteJokesStore(state => state.selectAllJokes);
  const deselectAllJokes = useFavoriteJokesStore(state => state.deselectAllJokes);
  const areAllSelected = useFavoriteJokesStore(state =>
    state.areAllSelected(jokesList)
  );
  const areSomeSelected = useFavoriteJokesStore(state =>
    state.areSomeSelected(jokesList)
  );
  const isNotSelected = useFavoriteJokesStore(state =>
    state.isNotSelected(jokesList)
  );

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && jokesList) {
      selectAllJokes(jokesList);
    } else {
      deselectAllJokes(jokesList);
    }
  };

  return (
    <StyledLabel htmlFor="selectAll">
      <Checkbox
        id="selectAll"
        isPartiallySelected={!areAllSelected && areSomeSelected && !isNotSelected}
        checked={areAllSelected}
        onChange={handleSelectAll}
      />
      <StyledText>Select all</StyledText>
    </StyledLabel>
  );
}
