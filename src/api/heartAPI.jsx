import { axiosAuth } from "./settingAxios";

export const postLike = async (postId) => {
  const reqUrl = `/post/${postId}/heart`;
  try {
    const response = await axiosAuth.post(reqUrl)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const deleteLike = async (postId) => {
  const reqUrl = `/post/${postId}/unheart`;
  try {
    const response = await axiosAuth.delete(reqUrl)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}