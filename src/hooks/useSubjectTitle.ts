import {
  FusionType,
  ICyberSecurity,
  IIndustrialSecurity,
  subjectType,
} from '../type/subject';

export function useSubjectTitle(
  atomValue: ICyberSecurity | IIndustrialSecurity | number,
  type?: FusionType | subjectType
) {
  const getDisplay = () => {
    if (typeof atomValue === 'object') {
      if (type === '전공기초') {
        return atomValue.majorBase >= 0 ? atomValue.majorBase : 0;
      }
      if (type === '전공필수') {
        return atomValue.majorRequire >= 0 ? atomValue.majorRequire : 0;
      }
      if (type === '관계학') {
        return (atomValue as ICyberSecurity).relation >= 0
          ? (atomValue as ICyberSecurity).relation
          : 0;
      }
      if (type === '전공') {
        return (atomValue as IIndustrialSecurity).major >= 0
          ? (atomValue as IIndustrialSecurity).major
          : 0;
      }
    } else return atomValue >= 0 ? atomValue : 0;
  };
  return [getDisplay];
}
