// export default async function putProfilemodification(username,id, intro) {
//   const response = await fetch(`https://api.mandarin.weniv.co.kr/user`, {
//     method: 'PUT',
//     headers: {
//         'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGIyNWM1YjJjYjIwNTY2MzM2MTkzZSIsImV4cCI6MTY5MjAyNDgzNiwiaWF0IjoxNjg2ODQwODM2fQ.q04djYvmJA49rPOTmIUsEigdnYK-HHLTqhpaLBKXf4I',
//         'Content-type' : 'application/json'
//     },
//     body: JSON.stringify({
//       'user':{
//           'username': username,
//           'accountname': id,
//           'intro': intro,
//           'image': ''
//       },
//     }),
//   });

//   const json = await response.json();

//   return json;
// }

//axios
import { axiosAuth } from "./settingAxios";

export const profilemodificationReq = async (username, accountname, intro, image) => {
  const reqUrl = '/user';
  const body = {
    user: {
      username,
      accountname,
      intro,
      image
    }
  };
  try {
    const response = await axiosAuth.put(reqUrl, body)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}