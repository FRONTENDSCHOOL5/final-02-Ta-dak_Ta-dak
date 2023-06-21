export default async function putProfilemodification(username) {
  const response = await fetch(`https://api.mandarin.weniv.co.kr/user`, {
    method: 'PUT',
    headers: {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGIyNWM1YjJjYjIwNTY2MzM2MTkzZSIsImV4cCI6MTY5MjAyNDgzNiwiaWF0IjoxNjg2ODQwODM2fQ.q04djYvmJA49rPOTmIUsEigdnYK-HHLTqhpaLBKXf4I',
        'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      'user':{
          'username': username,
          'accountname': 'tadak123',
          'intro': '안녕하세요',
          'image': ''
      },
    }),
  });

  const json = await response.json();

  return json;
}

//axios
// import { axiosAuth } from "./settingAxios";

// export const loginReq = async (email, password) => {
//   const reqUrl = '/user/profilemodicationn';
//   const body = {
//     user: {
//       email,
//       password
//     }
//   };
//   try {
//     const response = await axiosUnauth.put(reqUrl, body)
//     return response.data
//   } catch (error) {
//     console.error('Request error', error)
//     throw error
//   }
// }


//settingAxios
// import axios from 'axios';

// const BASE_URL = 'https://api.mandarin.weniv.co.kr';

// const axiosUnauth = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

// const axiosAuth = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Content-type': 'application/json',
//   },
// });

// axiosAuth.interceptors.request.use(
//   (config) => {
//     const TOKEN = JSON.parse(sessionStorage.getItem('user'))?.UserAtom.token;
//     config.headers['Authorization'] = `Bearer ${TOKEN}`
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export { axiosUnauth, axiosAuth };