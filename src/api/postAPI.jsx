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
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const getPostAll = async (loadPostSeq) => {
  const reqUrl = `/post/?limit=5&skip=${loadPostSeq}`;
  try {
    const response = await axiosAuth.get(reqUrl)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const getPostDetail = async (postId) => {
  const reqUrl = `/post/${postId}`;
  try {
    const response = await axiosAuth.get(reqUrl)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const deletePost = async (postId) => {
  const reqUrl = `/post/${postId}`;
  try {
    const response = await axiosAuth.delete(reqUrl)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    // throw error
  }
}

export const reportPost = async (postId) => {
  const reqUrl = `/post/${postId}/report`;
  try {
    const response = await axiosAuth.post(reqUrl)
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.error('Request error', error)
    // throw error
  }
}

export const editPost = async (postId, content, image) => {
  const reqUrl = `/post/${postId}`;
  const body = {
    "post": {
      content,
      image
		}
  }
  try {
    const response = await axiosAuth.put(reqUrl, body)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}