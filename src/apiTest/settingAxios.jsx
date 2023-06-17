import axios from "axios";

import { RecoilValue } from "recoil";

const BASE_URL = 'https://api.mandarin.weniv.co.kr';
// const TOKEN = RecoilValue(); sessionStorage 추가 후 적용 
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjRlMmQ2YjJjYjIwNTY2M2UxZGVhYSIsImV4cCI6MTY5MTk0NDExMywiaWF0IjoxNjg2NzYwMTEzfQ.qCt33Jo9cze-DHI8HbKPNI5LTQ5MTOHCRxRKjPmHXZo';

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