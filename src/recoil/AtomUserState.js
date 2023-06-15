import { atom } from 'recoil';

// 로그인된 유저 정보 저장
export const UserAtom = atom({
  key: 'UserAtom',
  default: {},
});

// 로그인된 유저 존재 여부
export const IsLogin = atom({
  key: 'IsLogin',
  default: false,
});
