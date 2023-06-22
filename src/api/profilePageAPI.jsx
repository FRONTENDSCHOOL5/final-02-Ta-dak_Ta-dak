import { axiosAuth } from "./settingAxios";

// 3-2 개인프로필
export const getProfile = async (accountname) => {
  const reqUrl = `/profile/${accountname}`;
  try {
    const response = await axiosAuth.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};

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


// 판매물품
export const getSaleItem = async (accountname) => {
  const reqUrl = `/product/${accountname}`;

  // paging limit skip
  // GET /product/:accountname/?limit=Number&skip=Number

  try {
    const response = await axiosAuth.get(reqUrl);

    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};