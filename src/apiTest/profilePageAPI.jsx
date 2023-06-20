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
