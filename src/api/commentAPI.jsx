import { axiosAuth } from "./settingAxios";

export const getComment = async (postId) => {
  const reqUrl = `/post/${postId}/comments`;
  try {
    const response = await axiosAuth.get(reqUrl)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const writeComment = async (postId,content) => {
  const reqUrl = `/post/${postId}/comments`;
  const body = {
    "comment":{
      content
    }
  }
  try {
    const response = await axiosAuth.post(reqUrl,body)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const deleteComment = async (postId, commentId) => {
  const reqUrl = `/post/${postId}/comments/${commentId}`;
  try {
    const response = await axiosAuth.delete(reqUrl)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    // throw error
  }
}

export const reportComment = async (postId, commentId) => {
  const reqUrl = `/post/${postId}/comments/${commentId}/report`;
  try {
    const response = await axiosAuth.post(reqUrl)
    return response.data
  } catch (error) {
    console.error('Request error', error)
    // throw error
  }
}



