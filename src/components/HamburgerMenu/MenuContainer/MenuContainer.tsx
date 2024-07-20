import { useLocation } from 'react-router-dom';
import FilterPanel from 'components/FilterPanel';
import { ROUTES } from 'constants/routes';
import FilterPanelForPages from 'components/FilterPanel/FilterPanelForPages';
import { StyledMenuContainer } from './styled';

interface Props {
  isOpen: boolean;
  setIsOpenMenu: (isOpen: boolean) => void;
}

export default function MenuContainer({ isOpen, setIsOpenMenu }: Props) {
  const location = useLocation();

  return (
    <StyledMenuContainer isOpen={isOpen}>
      {location.pathname === ROUTES.HOME ? (
        <FilterPanel setIsOpenMenu={setIsOpenMenu} />
      ) : (
        <FilterPanelForPages setIsOpenMenu={setIsOpenMenu} />
      )}
    </StyledMenuContainer>
  );
}
