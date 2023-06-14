import { useState } from 'react';
import PostImgFile from '../api/PostImgFile';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    const imageURL = URL.createObjectURL(selectedFile);
    setImageURL(imageURL);
    const imagePath = await PostImgFile(selectedFile);
    setImagePath(imagePath)
  };

  return { handleImageChange , imageURL, imagePath };
};

export default useImageUploader;

