import { useState, useEffect } from 'react';
import { postImgFile } from '../api/uploadimgAPI';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState(false);
  const [imagePath, setImagePath] = useState(false);
  const [uploadValidity, setUploadValidity] = useState(true);

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    const allowedExtensions = ['jpg', 'gif', 'png', 'jpeg', 'bmp', 'tif', 'heic'];
    const selectedExtension =  !!selectedFile && selectedFile.name.split('.').pop().toLowerCase();
    
    if (allowedExtensions.includes(selectedExtension)) {

      const imageURL = URL.createObjectURL(selectedFile);
      const imagePath = await postImgFile(selectedFile);
      console.log(imagePath);
      setImageURL(imageURL);
      setImagePath(imagePath);
    } else {
      setUploadValidity(false)
    }
  };

  useEffect (()=> {
    !uploadValidity && setUploadValidity('유효하지 않은 파일')
  }, [uploadValidity])

  return { handleImageChange, imageURL, imagePath, uploadValidity};
};

export default useImageUploader;
