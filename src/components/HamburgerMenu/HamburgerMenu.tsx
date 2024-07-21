import { useHamburgerMenu } from 'hooks/useHamburgerMenu';
import { HamburgerButton, StyledIcon } from './styled';
import MenuContainer from './MenuContainer';

export default function HamburgerMenu() {
  const { isOpen, openMenu, closeMenu } = useHamburgerMenu();

  const handleHamburgerClick = () => (isOpen ? closeMenu() : openMenu());

  return (
    <>
      <HamburgerButton onClick={handleHamburgerClick}>
        <StyledIcon
          src={
            isOpen
              ? '../../assets/hamburger-cross.svg'
              : '../../assets/hamburger-menu.svg'
          }
          alt="Menu"
        />
      </HamburgerButton>
      <MenuContainer />
    </>
  );
}
