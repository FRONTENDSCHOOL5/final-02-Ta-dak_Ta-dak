import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const {persistAtom} = recoilPersist({
  key: 'darkmode',
  storage: sessionStorage,
})

export const DarkModeAtom = atom({
  key: 'DarkModeAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
