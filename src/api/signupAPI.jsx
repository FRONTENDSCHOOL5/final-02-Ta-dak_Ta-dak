// export default async function PostEmailValid(value) {

//   const response = await fetch(`https://api.mandarin.weniv.co.kr/user/emailvalid`,
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       'user':{
// 				'email': value
// 		}
//     })
//   })
//   const json = await response.json()
//   console.log(json.message);
//   return json.message
// }

import { axiosUnauth } from "./settingAxios";

export const postEmailValid = async (email) => {
  const reqUrl = '/user/emailvalid';
  const body = {
    'user': {
      email
    }
  };
  try {
    const response = await axiosUnauth.post(reqUrl, body)
    return response.data.message;
  } catch (error) {
    if (error.response) {
      return error.response.data.message;
    }
  }
}



// =============================

// export default async function PostAccountValid(value) {
//   const response = await fetch(`https://api.mandarin.weniv.co.kr/user/accountnamevalid`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         'user': {
//           'accountname': value
//         }
//       })
//     })
//   const json = await response.json()
//   console.log(json.message);
//   return json.message
// }

export const postAccountValid = async (accountname) => {
  const reqUrl = '/user/accountnamevalid';
  const body = {
    'user': {
      accountname
    }
  };
  try {
    const response = await axiosUnauth.post(reqUrl, body)
    return response.data.message;
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

// =============================

// export default async function PostSignUp(value) {

//   const response = await fetch(`https://api.mandarin.weniv.co.kr/user`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type' : 'application/json',
//       },
//       body: JSON.stringify({
//         'user': value
//       })
//     })
//   const json = await response.json()
//   console.log(json)
//   return json
// }

export const postSignUp = async (user) => {
  const reqUrl = '/user';
  const body = {
    user
  };
  try {
    const response = await axiosUnauth.post(reqUrl, body)
    return !!response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}