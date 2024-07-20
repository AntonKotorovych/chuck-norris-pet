import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HamburgerMenu from 'components/HamburgerMenu';
import { StyledContainer, StyledHeader, StyledLogo, StyledWrapper } from './styled';

export default function MobileHeader() {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledContainer>
          <Link to={ROUTES.HOME}>
            <StyledLogo src="../../assets/chuck.png" />
          </Link>
        </StyledContainer>
        <HamburgerMenu />
      </StyledWrapper>
    </StyledHeader>
  );
}
