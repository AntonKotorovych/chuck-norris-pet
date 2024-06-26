import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import { StyledContainer, StyledSection } from '../styled';

export default function FilterPanelForJokePage() {
  return (
    <StyledSection>
      <StyledContainer>
        <Link to={ROUTES.HOME}>
          <Button variant="main">Back to Homepage</Button>
        </Link>
      </StyledContainer>
      <StyledContainer>
        <Button variant="secondary">Favorite Jokes</Button>
      </StyledContainer>
    </StyledSection>
  );
}
