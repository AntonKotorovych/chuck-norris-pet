import { useEffect, useState } from 'react';
import { notifyFavoriteClick } from 'utils/notifyFavoriteClick';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { JokeProps } from 'components/JokesList/JokeItem/JokeItem';
import HeartIcon from './HeartIcon';
import { StyledButton, StyledContainer } from './styled';

interface Props {
  joke: JokeProps;
}

export default function FavoriteButton({ joke }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteJokes = useFavoriteJokesStore(state => state.favoriteJokes);
  const addFavoriteJoke = useFavoriteJokesStore(state => state.addFavoriteJoke);
  const removeFavoriteJoke = useFavoriteJokesStore(
    state => state.removeFavoriteJoke
  );

  const handleClick = () => {
    isFavorite ? removeFavoriteJoke(joke) : addFavoriteJoke(joke);
    notifyFavoriteClick(isFavorite);
  };

  useEffect(() => {
    setIsFavorite(favoriteJokes.some(favoriteJoke => joke.id === favoriteJoke.id));
  }, [favoriteJokes, joke.id]);

  return (
    <StyledContainer>
      <StyledButton
        title={isFavorite ? 'Delete from Favorites' : 'Add to Favorites'}
        onClick={handleClick}
      >
        <HeartIcon isFavorite={isFavorite} />
      </StyledButton>
    </StyledContainer>
  );
}
