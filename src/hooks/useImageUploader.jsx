import { useState } from 'react';
import { postImgFile } from '../api/uploadimgAPI';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    const imageURL = URL.createObjectURL(selectedFile);
    const imagePath = await postImgFile(selectedFile);
    setImageURL(imageURL)
    setImagePath(imagePath)
  };

  return { handleImageChange , imageURL, imagePath };
};

export default useImageUploader;

