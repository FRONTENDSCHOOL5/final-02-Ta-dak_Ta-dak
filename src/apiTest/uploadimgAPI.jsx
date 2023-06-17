// export default async function PostUpload(content, img) {
//   const response = await fetch(`https://api.mandarin.weniv.co.kr/post`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGIyNWM1YjJjYjIwNTY2MzM2MTkzZSIsImV4cCI6MTY5MjAyNDgzNiwiaWF0IjoxNjg2ODQwODM2fQ.q04djYvmJA49rPOTmIUsEigdnYK-HHLTqhpaLBKXf4I'}`,
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       'post': {
//         'content': content,
//         'image': img,
//       },
//     }),
//   });

//   const json = await response.json();

//   return json;
// }

import { axiosAuth } from "./settingAxios";

export const uploadImage = async (content, image) => {
  const reqUrl = '/post';
  const body = {
    'post': {
      content,
      image
    }
  };
  try {
    const response = await axiosAuth.post({reqUrl, body})
    return response
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}