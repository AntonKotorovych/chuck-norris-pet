import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { JOKE_API } from 'constants/API';

const instance = applyCaseMiddleware(
  axios.create({
    baseURL: JOKE_API,
  })
);

export default instance;
