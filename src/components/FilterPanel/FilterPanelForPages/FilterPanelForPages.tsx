import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';
import { ROUTES } from 'constants/routes';
import { StyledContainer, StyledSection } from '../styled';

export default function FilterPanelForPages() {
  const location = useLocation();

  return (
    <StyledSection>
      <StyledContainer>
        <Link to={ROUTES.HOME}>
          <Button variant="main">Back to Homepage</Button>
        </Link>
      </StyledContainer>
      <StyledContainer>
        {location.pathname !== ROUTES.FAVORITE_JOKES ? (
          <Link to={ROUTES.FAVORITE_JOKES}>
            <Button variant="secondary">Favorite Jokes</Button>
          </Link>
        ) : (
          <Button variant="secondary">Manage Jokes</Button>
        )}
      </StyledContainer>
    </StyledSection>
  );
}
