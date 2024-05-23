import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_CHUCK_NORRIS_API,
});

export default instance;
