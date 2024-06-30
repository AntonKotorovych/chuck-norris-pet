import { useState } from 'react';

export const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenModal = () => setIsShowModal(true);
  const handleCloseModal = () => setIsShowModal(false);

  return { isShowModal, handleOpenModal, handleCloseModal };
};
