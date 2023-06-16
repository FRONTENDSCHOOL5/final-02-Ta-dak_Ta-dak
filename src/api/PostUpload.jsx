export default async function PostUpload(content, img) {
  const response = await fetch(`https://api.mandarin.weniv.co.kr/post`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGIyNWM1YjJjYjIwNTY2MzM2MTkzZSIsImV4cCI6MTY5MjAyNDgzNiwiaWF0IjoxNjg2ODQwODM2fQ.q04djYvmJA49rPOTmIUsEigdnYK-HHLTqhpaLBKXf4I'}`,
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
