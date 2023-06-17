// export default async function getFollowingFeed(loadPostSeq) {
//   const response = await fetch(`https://api.mandarin.weniv.co.kr/post/feed/?limit=5&skip=${loadPostSeq}`,
//     {
//       method: 'GET',
//       headers: {
//         'Authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjRlMmQ2YjJjYjIwNTY2M2UxZGVhYSIsImV4cCI6MTY5MTk0NDExMywiaWF0IjoxNjg2NzYwMTEzfQ.qCt33Jo9cze-DHI8HbKPNI5LTQ5MTOHCRxRKjPmHXZo`,
//         'Content-type' : 'application/json'
//       },
//     })
//   const json = await response.json()
//   console.log(json);
//   return json.posts
// }

import { axiosAuth } from "./settingAxios";

export const getPost = async (loadPostSeq) => {
  const reqUrl = `/post/feed/?limit=5&skip=${loadPostSeq}`;
  try {
    const response = await axiosAuth.get(reqUrl)
    return response.posts
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}