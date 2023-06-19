import { axiosAuth } from './settingAxios';

export const getFollowingList = async (accountname) => {
  const reqUrl = `/profile/${accountname}/following`;

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

  try {
    const response = await axiosAuth.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};
