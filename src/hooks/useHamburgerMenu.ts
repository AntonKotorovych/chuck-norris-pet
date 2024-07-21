import { create } from 'zustand';

interface MenuState {
  isOpen: boolean;
}

interface MenuActions {
  openMenu: VoidFunction;
  closeMenu: VoidFunction;
}

type HamburgerMenu = MenuState & MenuActions;

const DEFAULT_HAMBURGER_MENU_STATE = {
  isOpen: false,
};

export const useHamburgerMenu = create<HamburgerMenu>(set => ({
  ...DEFAULT_HAMBURGER_MENU_STATE,
  openMenu: () => set(() => ({ isOpen: true })),
  closeMenu: () => set(() => ({ isOpen: false })),
}));
