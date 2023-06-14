export default async function PostEmailValid(value) {

  const response = await fetch(`https://api.mandarin.weniv.co.kr/user/emailvalid`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "user":{
				"email": value
		}
    })
  })
  const json = await response.json()
  console.log(json.message);
  return json.message
}
