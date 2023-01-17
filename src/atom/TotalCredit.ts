import { atom } from 'recoil';
export const totalCredit = atom({
  key: 'totalCredit',
  default: 132,
});
export const IndustrialSecurity = atom({
  key: 'industrialSecurity',
  default: {
    majorBase: 15,
    majorRequire: 18,
    major: 45,
  },
});
export const CyberSecurity = atom({
  key: 'cyberSecurity',
  default: {
    majorBase: 9,
    majorRequire: 15,
    relation: 12,
  },
});
