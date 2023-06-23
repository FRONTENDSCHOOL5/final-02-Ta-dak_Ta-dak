import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const {persistAtom} = recoilPersist({
  key: 'user',
  storage: sessionStorage,
})

// 로그인된 유저 정보 저장
export const UserAtom = atom({
  key: 'UserAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

// 로그인된 유저 존재 여부
export const IsLogin = atom({
  key: 'IsLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const IsLoginSelector = selector({
  key: 'IsLoginSelector',
  get: ({get}) => !!get(IsLogin)
})