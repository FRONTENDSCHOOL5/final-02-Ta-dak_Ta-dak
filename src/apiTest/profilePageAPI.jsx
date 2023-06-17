import { axiosAuth } from "./settingAxios";


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
