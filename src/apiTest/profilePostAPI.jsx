import { axiosAuth } from './settingAxios';

// 5-3 나의 게시글 목록
export const getProfilePost = async (accountname) => {
  const reqUrl = `/post/${accountname}/userpost`;

  // paging limit skip
  // GET /post/:accountname/userpost/?limit=**Number**&skip=**Number**

  try {
    const response = await axiosAuth.get(reqUrl);
    
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};
