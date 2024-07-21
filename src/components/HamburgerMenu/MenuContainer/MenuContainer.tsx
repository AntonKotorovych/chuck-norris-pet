import { useLocation } from 'react-router-dom';
import FilterPanel from 'components/FilterPanel';
import { ROUTES } from 'constants/routes';
import FilterPanelForPages from 'components/FilterPanel/FilterPanelForPages';
import { useHamburgerMenu } from 'hooks/useHamburgerMenu';
import { StyledMenuContainer } from './styled';

export default function MenuContainer() {
  const { isOpen } = useHamburgerMenu();

  const location = useLocation();

  return (
    <StyledMenuContainer isOpen={isOpen}>
      {location.pathname === ROUTES.HOME ? <FilterPanel /> : <FilterPanelForPages />}
    </StyledMenuContainer>
  );
}
