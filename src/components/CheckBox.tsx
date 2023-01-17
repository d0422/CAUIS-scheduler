import { useState } from 'react';
import styled from 'styled-components';
import {
  ICyberSecurity,
  IFusion,
  IIndustrialSecurity,
  ISubject,
} from '../type/subject';
import checkbox from '../img/checkbox.png';
import notcheckbox from '../img/notcheckbox.png';
import { useSetRecoilState } from 'recoil';
import {
  CyberSecurity,
  IndustrialSecurity,
  totalCredit,
} from '../atom/TotalCredit';
type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
const CheckBox = ({
  subjectInfo,
  setRecoilValue,
}: {
  subjectInfo: IFusion | ISubject;
  setRecoilValue:
    | SetterOrUpdater<IIndustrialSecurity>
    | SetterOrUpdater<ICyberSecurity>;
}) => {
  const [state, setState] = useState<Boolean>(false);

  const setCredit = useSetRecoilState(totalCredit);
  const SRC = state ? checkbox : notcheckbox;
  const setFunc = () => {
    setState((prev) => !prev);
    state
      ? setCredit((prev) => prev + subjectInfo.credit)
      : setCredit((prev) => prev - subjectInfo.credit);

    state ? setRecoilValue(plus) : setRecoilValue(minus);
  };
  function minus(prev: any) {
    const newObject = { ...prev };
    if (subjectInfo.type === '전공기초')
      newObject.majorBase = newObject.majorBase - subjectInfo.credit;
    if (subjectInfo.type === '전공필수')
      newObject.majorRequire = newObject.majorRequire - subjectInfo.credit;
    if (subjectInfo.type === '관계학')
      newObject.relation = newObject.relation - subjectInfo.credit;
    if (subjectInfo.type === '전공') {
      newObject.major = newObject.major - subjectInfo.credit;
    }
    return newObject;
  }
  function plus(prev: any) {
    const newObject = { ...prev };
    if (subjectInfo.type === '전공기초')
      newObject.majorBase = newObject.majorBase + subjectInfo.credit;
    if (subjectInfo.type === '전공필수')
      newObject.majorRequire = newObject.majorRequire + subjectInfo.credit;
    if (subjectInfo.type === '관계학')
      newObject.relation = newObject.relation + subjectInfo.credit;
    if (subjectInfo.type === '전공') {
      newObject.major = newObject.major + subjectInfo.credit;
    }
    return newObject;
  }

  return (
    <Wrapper>
      <Title>{subjectInfo.name}</Title>
      <img src={SRC} alt="check" onClick={setFunc} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  img {
    width: 20px;
    height: 20px;
  }
`;
const Title = styled.div``;
export default CheckBox;
