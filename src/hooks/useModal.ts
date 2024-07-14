import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
}

interface ModalActions {
  onOpen: VoidFunction;
  onClose: VoidFunction;
}

type Modal = ModalState & ModalActions;

const DEFAULT_MODAL_STATE = {
  isOpen: false,
};

export const useModal = create<Modal>(set => ({
  ...DEFAULT_MODAL_STATE,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));
