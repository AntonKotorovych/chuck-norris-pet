import { toast, Zoom } from 'react-toastify';

export const notifyFavoriteClick = (isFavorite: boolean) => {
  toast.success(
    !isFavorite ? '✅added to favorites!' : '❎removed from favorites!',
    {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Zoom,
    }
  );
};
