import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import HamburgerMenu from 'components/HamburgerMenu';
import { useHamburgerMenu } from 'hooks/useHamburgerMenu';
import { StyledContainer, StyledHeader, StyledLogo, StyledWrapper } from './styled';

export default function MobileHeader() {
  const { closeMenu } = useHamburgerMenu();

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledContainer>
          <Link to={ROUTES.HOME} onClick={closeMenu}>
            <StyledLogo src="../../assets/chuck.png" />
          </Link>
        </StyledContainer>
        <HamburgerMenu />
      </StyledWrapper>
    </StyledHeader>
  );
}
