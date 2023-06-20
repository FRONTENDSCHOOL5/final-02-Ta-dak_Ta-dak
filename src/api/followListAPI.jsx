import { axiosAuth } from './settingAxios';

export const getFollowingList = async (accountname) => {
  const reqUrl = `/profile/${accountname}/following`;
  // paging limit skip
  // GET /profile/:accountname/following?limit=Number&skip=Number

  try {
    const response = await axiosAuth.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};

export const getFollowerList = async (accountname) => {
  const reqUrl = `/profile/${accountname}/follower`;
  // paging limit skip
  // GET /profile/:accountname/follower/?limit=Number&skip=Number
  
  try {
    const response = await axiosAuth.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};
