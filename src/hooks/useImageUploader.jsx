import { useState, useEffect } from 'react';
import { postImgFile } from '../api/uploadimgAPI';
import imageCompression from 'browser-image-compression';

const useImageUploader = () => {
  const [imageURL, setImageURL] = useState(false);
  const [imagePath, setImagePath] = useState(false);
  const [uploadValidity, setUploadValidity] = useState(true);

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    const allowedExtensions = ['jpg', 'gif', 'png', 'jpeg', 'bmp', 'tif', 'heic'];
    const selectedExtension =  !!selectedFile && selectedFile.name.split('.').pop().toLowerCase();
    const options = {
      maxSizeMB: 1,
      useWebWorker: true,
    }
    
    if (allowedExtensions.includes(selectedExtension)) {
      imageCompression(selectedFile, options)
        .then((compressedFile) => {
          setImageURL(URL.createObjectURL(compressedFile));

          const reader = new FileReader();
          reader.onload = async function (event) {
            const compressedBlob = new Blob([event.target.result], {
              type: compressedFile.type,
            });

            const originalFile = new File(
              [compressedBlob],
              compressedFile.name,
              compressedFile
            );

            setImagePath(await postImgFile(originalFile));
          };

          reader.readAsArrayBuffer(compressedFile);
        })
        .catch((error) => console.error(error));  
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
