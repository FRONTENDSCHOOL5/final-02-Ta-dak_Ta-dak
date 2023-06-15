export default async function PostLogin(email, password) {
  const response = await fetch(`https://api.mandarin.weniv.co.kr/user/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password,
      },
    }),
  });

  const json = await response.json();
  return json;
}
