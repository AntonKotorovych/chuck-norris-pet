import { useTheme } from '@emotion/react';
import { ToastContainer, Zoom } from 'react-toastify';
import { StyledTheme } from 'styled/theme';

export default function Toaster() {
  const theme = useTheme() as StyledTheme;

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
      style={{ fontSize: theme.fontSizes.small }}
      transition={Zoom}
    />
  );
}
