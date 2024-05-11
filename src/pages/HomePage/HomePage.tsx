import FilterPanel from 'components/FilterPanel';
import MainTitle from 'components/MainTitle';
import JokesList from 'components/JokesList';
import { MainContainer } from 'styled/MainContainer';

export default function HomePage() {
  return (
    <MainContainer>
      <MainTitle />
      <FilterPanel />
      <JokesList />
    </MainContainer>
  );
}
