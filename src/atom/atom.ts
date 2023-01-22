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

export const EssentialElectionFusion = atom({
  key: 'essentialElectionfusion',
  default: 3,
});

export const EssentialElectionChallenge = atom({
  key: 'essentialElectionChallenge',
  default: 3,
});
export const EssentialElectionCreative = atom({
  key: 'essentialElectionCreative',
  default: 3,
});
export const EssentialElectionTrust = atom({
  key: 'essentialElectionTrust',
  default: 3,
});
export const EssentialElectionCommnunicatation = atom({
  key: 'essentialElectionCommunication',
  default: 3,
});
