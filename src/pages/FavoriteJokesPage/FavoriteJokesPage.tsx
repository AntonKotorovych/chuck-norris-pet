import FilterPanelForJokePage from 'components/FilterPanel/FilterPanelForPages';
import FavoriteJokesList from 'components/JokesList/FavoriteJokesList';
import MainTitle from 'components/MainTitle';
import { StyledWrapper } from 'pages/styled';
import { StyledMainContainer } from 'styled/StyledMainContainer';

export default function FavoriteJokesPage() {
  return (
    <StyledMainContainer>
      <MainTitle />
      <StyledWrapper>
        <FilterPanelForJokePage />
      </StyledWrapper>
      <FavoriteJokesList />
    </StyledMainContainer>
  );
}
