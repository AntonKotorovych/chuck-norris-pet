import FilterPanel from 'components/FilterPanel';
import MainTitle from 'components/MainTitle';
import JokesList from 'components/JokesList';
import { StyledMainContainer } from 'styled/StyledMainContainer';

export default function HomePage() {
  return (
    <StyledMainContainer>
      <MainTitle />
      <FilterPanel />
      <JokesList />
    </StyledMainContainer>
  );
}
