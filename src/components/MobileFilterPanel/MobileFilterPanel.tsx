import { Link } from 'react-router-dom';
import CategorySelect from 'components/CategorySelect';
import JokeSearchInput from 'components/JokeSearchInput';
import Button from 'components/Button';
import ManageJokes from 'components/ManageJokes';
import { ROUTES } from 'constants/routes';
import { StyledContainer, StyledSection } from './styled';

export default function MobileFilterPanel() {
  return (
    <StyledSection>
      <StyledContainer>
        <CategorySelect />
      </StyledContainer>
      <JokeSearchInput />
      <StyledContainer>
        <Button variant="secondary">Clear Filtering</Button>
      </StyledContainer>
      <StyledContainer>
        <ManageJokes jokesList={[]} buttonText="Add Favorite Jokes" />
      </StyledContainer>
      <StyledContainer>
        <Link to={ROUTES.FAVORITE_JOKES}>
          <Button variant="secondary">Favorite Jokes</Button>
        </Link>
      </StyledContainer>
    </StyledSection>
  );
}
