export default async function PostUpload(content, img) {
  const token = JSON.parse(sessionStorage.getItem('user')).UserAtom.token
  
  const response = await fetch(`https://api.mandarin.weniv.co.kr/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      'post': {
        'content': content,
        'image': img,
      },
    }),
  });

  const json = await response.json();

  return json;
}