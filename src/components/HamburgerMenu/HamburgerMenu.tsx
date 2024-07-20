import { useState } from 'react';
import { HamburgerButton, StyledIcon } from './styled';
import MenuContainer from './MenuContainer';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => setIsOpen(!isOpen);

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
      <MenuContainer isOpen={isOpen}></MenuContainer>
    </>
  );
}
