import { axiosAuth } from "./settingAxios";

export const getComment = async (postId) => {
  const reqUrl = `/post/${postId}/comments`;
  try {
    const response = await axiosAuth.get(reqUrl)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}