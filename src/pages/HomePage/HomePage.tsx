import FilterPanel from 'components/FilterPanel';
import MainTitle from 'components/MainTitle';
import JokesList from 'components/JokesList';
import { StyledMainContainer } from 'styled/StyledMainContainer';
import { StyledFilterContainer } from './styled';

export default function HomePage() {
  return (
    <StyledMainContainer>
      <MainTitle />
      <StyledFilterContainer>
        <FilterPanel />
      </StyledFilterContainer>
      <JokesList />
    </StyledMainContainer>
  );
}
