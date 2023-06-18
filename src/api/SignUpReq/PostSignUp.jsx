export default async function PostSignUp(value) {

  const response = await fetch(`https://api.mandarin.weniv.co.kr/user`,
    {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        'user': value
      })
    })
  const json = await response.json()
  console.log(json)
  return json
}
