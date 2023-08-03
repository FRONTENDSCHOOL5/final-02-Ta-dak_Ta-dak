import axios from 'axios';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';

// .create() 메서드 사용해 axios 인스턴스 생성
const axiosUnauth = axios.create({
  //  API 요청의 기본 URL을 설정
  baseURL: BASE_URL,
  // 모든 요청에 추가할 기본 헤더를 정의
  headers: {
    // 모든 요청은 JSON 형식으로 데이터를 보냄
    'Content-type': 'application/json',
  },
});

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

// axios 사용하여 API 요청을 보낼 때 인증 토큰을 요청 헤더에 추가하는 방법
// interceptor : 모든 요청 전에 특정 작업 수행
// axiosAuth 인스턴스의 request 인터셉터 사용
axiosAuth.interceptors.request.use(
  // interceptor의 request 요청을 처리하는 함수로, interceptor 호출될 때마다 이 함수 실행됨
  // config 매개변수 : 현재 요청에 대한 설정 담고 있음
  // config 매개변수를 받아서 요청 설정을 변경할 수 있음
  (config) => {
    // 세션스토리지에서 'user' 키로 저장된 데이터를 가져와 JSON 파싱 
    // (?.) : 옵셔널 체이닝 연산자로, UserAtom이나 token이 존재하지 않을 경우 에러를 방지하고 undefined 반환
    const TOKEN = JSON.parse(sessionStorage.getItem('user'))?.UserAtom.token;
    // 요청 헤더의 'Authorization' 속성에 값 추가
    config.headers['Authorization'] = `Bearer ${TOKEN}`;
    // interceptor 함수에서 설정을 수정한 뒤 해당 설정 반환
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosUnauth, axiosAuth };
