// export default async function PostLogin(email, password) {
//   const response = await fetch(`https://api.mandarin.weniv.co.kr/user/login`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       user: {
//         'email': email,
//         'password': password,
//       },
//     }),
//   });

//   const json = await response.json();

//   return json;
// }

import { axiosUnauth } from "./settingAxios";

export const loginReq = async (email, password) => {
  const reqUrl = '/user/login';
  const body = {
    user: {
      email,
      password
    }
  };
  try {
    const response = await axiosUnauth.post(reqUrl, body)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}