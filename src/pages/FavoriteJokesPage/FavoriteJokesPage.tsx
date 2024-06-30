import FilterPanelForJokePage from 'components/FilterPanel/FilterPanelForPages';
import FavoriteJokesList from 'components/JokesList/FavoriteJokesList';
import MainTitle from 'components/MainTitle';
import { StyledMainContainer } from 'styled/StyledMainContainer';

export default function FavoriteJokesPage() {
  return (
    <StyledMainContainer>
      <MainTitle />
      <FilterPanelForJokePage />
      <FavoriteJokesList />
    </StyledMainContainer>
  );
}
