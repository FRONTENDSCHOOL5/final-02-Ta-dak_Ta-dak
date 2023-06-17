import { axiosAuth } from './settingAxios';

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
