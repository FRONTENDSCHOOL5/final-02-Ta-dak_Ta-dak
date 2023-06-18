import { useState } from 'react';
import PostImgFile from '../api/PostImgFile';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log('selectedFile',selectedFile);
    const imageURL = URL.createObjectURL(selectedFile);
    console.log('imageURL',imageURL);

    const imagePath = await PostImgFile(selectedFile);
    console.log('imagePath',imagePath);

    setImagePath(imagePath)
  };

  return { handleImageChange , imageURL, imagePath };
};

export default useImageUploader;

