import FilterPanel from 'components/FilterPanel';
import MainTitle from 'components/MainTitle';
import { MainContainer } from 'styled/MainContainer';

export default function HomePage() {
  return (
    <MainContainer>
      <MainTitle />
      <FilterPanel />
    </MainContainer>
  );
}
