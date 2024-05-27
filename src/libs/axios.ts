import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const instance = applyCaseMiddleware(
  axios.create({
    baseURL: import.meta.env.VITE_CHUCK_NORRIS_API,
  })
);

export default instance;
