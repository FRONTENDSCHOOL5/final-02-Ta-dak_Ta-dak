export default async function PostAccountValid(value) {
  const response = await fetch(`https://api.mandarin.weniv.co.kr/user/accountnamevalid`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "user": {
          "accountname": value
        }
      })
    })
  const json = await response.json()
  console.log(json.message);
  return json.message

}
