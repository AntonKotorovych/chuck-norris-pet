import FilterPanelForJokePage from 'components/FilterPanel/FilterPanelForJokePage';
import SingleJoke from 'components/JokesList/SingleJoke';
import MainTitle from 'components/MainTitle';
import { StyledMainContainer } from 'styled/StyledMainContainer';

export default function JokePage() {
  return (
    <StyledMainContainer>
      <MainTitle />
      <FilterPanelForJokePage />
      <SingleJoke />
    </StyledMainContainer>
  );
}
