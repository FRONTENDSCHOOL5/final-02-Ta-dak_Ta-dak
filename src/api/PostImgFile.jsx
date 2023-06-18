export default async function PostImgFile(value) {
  var formData = new FormData();
  formData.append('image', value);
  const response = await fetch(`https://api.mandarin.weniv.co.kr/image/uploadfile`, {
    method: 'POST',
    body: formData
  });
  const json = await response.json();
  const Path = `https://api.mandarin.weniv.co.kr/${json.filename}`
  console.log(Path)
  return Path;
}