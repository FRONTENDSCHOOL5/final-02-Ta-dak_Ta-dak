import axios from "axios";

import { RecoilValue } from "recoil";

const BASE_URL = 'https://api.mandarin.weniv.co.kr';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGIyNWM1YjJjYjIwNTY2MzM2MTkzZSIsImV4cCI6MTY5MjMyMDEwOCwiaWF0IjoxNjg3MTM2MTA4fQ.u4b6SObYA1F2PLbuEhps7gO330UMcuhxDCXT5yXn_bI';
// 이 부분 처리 고민해봐야할듯
// const TOKEN = JSON.parse(sessionStorage.getItem('user')).UserAtom.token;


export const axiosUnauth = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

export const axiosAuth = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${TOKEN}`,
		'Content-type': 'application/json',
	},
});