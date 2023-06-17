import axios from "axios";

import { RecoilValue } from "recoil";

const BASE_URL = 'https://api.mandarin.weniv.co.kr';
// const TOKEN = RecoilValue(); sessionStorage 추가 후 적용 

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