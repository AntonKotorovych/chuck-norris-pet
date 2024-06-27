import FilterPanelForPages from 'components/FilterPanel/FilterPanelForPages';
import SingleJoke from 'components/JokesList/SingleJoke';
import MainTitle from 'components/MainTitle';
import { StyledMainContainer } from 'styled/StyledMainContainer';

export default function JokePage() {
  return (
    <StyledMainContainer>
      <MainTitle />
      <FilterPanelForPages />
      <SingleJoke />
    </StyledMainContainer>
  );
}
