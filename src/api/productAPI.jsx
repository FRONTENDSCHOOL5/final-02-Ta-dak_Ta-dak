import { axiosAuth } from "./settingAxios";

export const postProduct = async (itemName, price, link , itemImage) => {
  const reqUrl = '/product';
  const body = {
		'product':{
      itemName,
      price,
      link: link || 'empty',
      itemImage
    }
  }
  try {
    const response = await axiosAuth.post(reqUrl, body)
    console.log(response);
    return response
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const editProduct = async (productId, itemName, price, link , itemImage) => {
  const reqUrl = `/product/${productId}`;
  const body = {
		'product':{
      itemName,
      price,
      link,
      itemImage
    }
  }
  try {
    const response = await axiosAuth.put(reqUrl, body)
    console.log(response);
    return response
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}

export const deleteProduct = async (productId) => {
  const reqUrl = `/product/${productId}`;
  try {
    const response = await axiosAuth.delete(reqUrl)
    console.log(response);
    return response
  } catch (error) {
    console.error('Request error', error)
    throw error
  }
}