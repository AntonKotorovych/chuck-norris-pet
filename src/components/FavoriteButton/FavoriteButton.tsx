import { notifyFavoriteClick } from 'utils/notifyFavoriteClick';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { JokeProps } from 'components/JokesList/JokeItem/JokeItem';
import HeartIcon from './HeartIcon';
import { StyledButton, StyledContainer } from './styled';

interface Props {
  joke: JokeProps;
}

export default function FavoriteButton({ joke }: Props) {
  const addFavoriteJoke = useFavoriteJokesStore(state => state.addFavoriteJoke);
  const removeFavoriteJoke = useFavoriteJokesStore(
    state => state.removeFavoriteJoke
  );

  const isFavorite = useFavoriteJokesStore(state => state.isFavoriteJoke(joke.id));

  const handleClick = () => {
    isFavorite ? removeFavoriteJoke(joke) : addFavoriteJoke(joke);
    notifyFavoriteClick(isFavorite);
  };

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
