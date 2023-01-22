import { useSetRecoilState } from 'recoil';
import { totalCredit } from '../atom/atom';
import {
  ICyberSecurity,
  IEssentialElective,
  IFusion,
  IIndustrialSecurity,
  IRequireElective,
  ISubject,
} from '../type/subject';
import checkbox from '../img/checkbox.png';
import notcheckbox from '../img/notcheckbox.png';
type IuseCheck = IRequireElective | IEssentialElective | ISubject | IFusion;
export function useCheckBox(subjectInfo: IuseCheck): [string, Function] {
  const setTotalCredit = useSetRecoilState(totalCredit);
  const SRC = subjectInfo.hasTaken ? checkbox : notcheckbox;
  const setTotal = () => {
    subjectInfo.hasTaken
      ? setTotalCredit((prev) => prev + subjectInfo.credit)
      : setTotalCredit((prev) => prev - subjectInfo.credit);
  };

  return [SRC, setTotal];
}
