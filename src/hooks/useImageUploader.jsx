import { useState } from 'react';
import { postImgFile } from '../api/uploadimgAPI';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState('');
  const [imagePath, setImagePath] = useState('');

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    const allowedExtensions = ['jpg', 'gif', 'png', 'jpeg', 'bmp', 'tif', 'heic'];
    const selectedExtension = selectedFile.name.split('.').pop().toLowerCase();
    
    if (allowedExtensions.includes(selectedExtension)) {
      const imageURL = URL.createObjectURL(selectedFile);
      const imagePath = await postImgFile(selectedFile);
      setImageURL(imageURL);
      setImagePath(imagePath);
    } else {
      setImageURL('잘못된 접근');
    }
  };

  return { handleImageChange, imageURL, imagePath };
};

export default useImageUploader;
