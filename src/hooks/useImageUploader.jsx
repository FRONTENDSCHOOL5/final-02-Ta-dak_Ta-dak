import { useState, useEffect } from 'react';
import { postImgFile } from '../api/uploadimgAPI';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState(false);
  const [imagePath, setImagePath] = useState(false);
  const [uploadValidity, setUploadValidity] = useState(true);

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    const allowedExtensions = ['jpg', 'gif', 'png', 'jpeg', 'bmp', 'tif', 'heic'];
    const selectedExtension =  !!selectedFile && selectedFile.name.split('.').pop().toLowerCase();
    
    if (allowedExtensions.includes(selectedExtension)) {
      const preImageURL = URL.createObjectURL(selectedFile);
      const preImagePath = await postImgFile(selectedFile);
      setImageURL(preImageURL);
      setImagePath(preImagePath);
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
