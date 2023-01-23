import { useSetRecoilState } from 'recoil';

import { totalCredit } from '../atom/atom';

import {
  IEssentialElective,
  IFusion,
  IRequireElective,
  ISubject,
} from '../type/subject';

import checkbox from '../img/checkbox.png';
import notcheckbox from '../img/notcheckbox.png';

type IuseCheck = IRequireElective | IEssentialElective | ISubject | IFusion;
export function useCheckBox(subjectInfo: IuseCheck): [string, Function] {
  const setTotalCredit = useSetRecoilState(totalCredit);
  const plus = () => setTotalCredit((prev) => prev + subjectInfo.credit);
  const minus = () => setTotalCredit((prev) => prev - subjectInfo.credit);
  const SRC = subjectInfo.hasTaken ? checkbox : notcheckbox;
  const setTotal = () => (subjectInfo.hasTaken ? plus() : minus());
  return [SRC, setTotal];
}
