import { useState } from 'react';
import { useFavoriteJokesStore } from 'hooks/useFavoriteJokesStore';
import { JokeProps } from 'components/JokesList/JokeItem/JokeItem';
import HeartIcon from './HeartIcon';
import { StyledButton, StyledContainer } from './styled';

interface Props {
  joke: JokeProps;
}

export default function FavoriteButton({ joke }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  console.log(joke);

  const addFavoriteJoke = useFavoriteJokesStore(state => state.addFavoriteJoke);

  const handleClick = () => {
    setIsClicked(!isClicked);

    if (!isClicked) addFavoriteJoke(joke);
  };

  return (
    <StyledContainer>
      <StyledButton
        title={isClicked ? 'Delete from Favorites' : 'Add to Favorites'}
        onClick={handleClick}
      >
        <HeartIcon isSelected={isClicked} />
      </StyledButton>
    </StyledContainer>
  );
}
