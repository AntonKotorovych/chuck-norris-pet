import { toast, Zoom } from 'react-toastify';

export const notifySaveJokesClick = () => {
  toast.success('✅Saved to favorites!', {
    position: 'bottom-center',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Zoom,
  });
};
