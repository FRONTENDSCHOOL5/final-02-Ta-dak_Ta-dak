import { axiosAuth } from './settingAxios';

export const getFollowingList = async (accountname, loadFollowSeq) => {
  const reqUrl = `/profile/${accountname}/following?limit=20&skip=${loadFollowSeq}`;

  try {
    const response = await axiosAuth.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};

export const getFollowerList = async (accountname, loadFollowSeq) => {
  const reqUrl = `/profile/${accountname}/follower/?limit=20&skip=${loadFollowSeq}`;

  try {
    const response = await axiosAuth.get(reqUrl);
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};
