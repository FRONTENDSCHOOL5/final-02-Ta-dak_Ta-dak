import axios from 'axios';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

const axiosUnauth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

axiosAuth.interceptors.request.use(
  (config) => {
    const TOKEN = JSON.parse(sessionStorage.getItem('user'))?.UserAtom.token;
    config.headers['Authorization'] = `Bearer ${TOKEN}`
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosUnauth, axiosAuth };
