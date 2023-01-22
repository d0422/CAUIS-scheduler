import { atom } from 'recoil';
import {
  ICyberSecurity,
  IIndustrialSecurity,
  IRequireElective,
} from '../type/subject';
export const totalCredit = atom({
  key: 'totalCredit',
  default: 132,
});
export const IndustrialSecurity = atom<IIndustrialSecurity>({
  key: 'industrialSecurity',
  default: {
    majorBase: 15,
    majorRequire: 18,
    major: 45,
  },
});
export const CyberSecurity = atom<ICyberSecurity>({
  key: 'cyberSecurity',
  default: {
    majorBase: 9,
    majorRequire: 15,
    relation: 12,
  },
});
export const RequireElective = atom({
  key: 'requireElective',
  default: 14,
});

export const GeneralElective = atom({
  key: 'generalElective',
  default: 15,
});
