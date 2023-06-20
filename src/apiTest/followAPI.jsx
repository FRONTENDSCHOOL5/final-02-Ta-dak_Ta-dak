import { axiosAuth } from './settingAxios';

export const doFollowing = async (accountname) => {
  const reqUrl = `/profile/${accountname}/follow`;

  try {
    const response = await axiosAuth.post(reqUrl);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};

export const doUnfollowing = async (accountname) => {
  const reqUrl = `/profile/${accountname}/unfollow`;

  try {
    const response = await axiosAuth.delete(reqUrl);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};
