import React from 'react';
import styled from 'styled-components';
import {
  FusionType,
  ICyberSecurity,
  IFusion,
  IIndustrialSecurity,
  ISubject,
  subjectType,
} from '../type/subject';
import CheckBox from './CheckBox';
type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;

const MajorSection = ({
  data,
  recoilValue,
  setRecoilValue,
}: {
  data: IFusion[] | ISubject[];
  recoilValue: ICyberSecurity | IIndustrialSecurity;
  setRecoilValue:
    | SetterOrUpdater<IIndustrialSecurity>
    | SetterOrUpdater<ICyberSecurity>;
}) => {
  function getDisplayType(type: FusionType | subjectType): number {
    if (type === '전공기초') {
      return recoilValue.majorBase;
    }
    if (type === '전공필수') {
      return recoilValue.majorRequire;
    }
    if (type === '관계학') {
      return (recoilValue as ICyberSecurity).relation;
    }
    if (type === '전공') {
      return (recoilValue as IIndustrialSecurity).major;
    }
    return 0;
  }

  return (
    <>
      <SubTitle>{data[0].type}</SubTitle>
      <DataDisplay>
        {getDisplayType(data[0].type) >= 0 ? getDisplayType(data[0].type) : 0}
        학점 남았습니다.
      </DataDisplay>
      {data.map((d: IFusion | ISubject, i: number) => (
        <CheckBox
          key={d.name + i}
          subjectInfo={d}
          setRecoilValue={setRecoilValue}
        ></CheckBox>
      ))}
      <hr></hr>
    </>
  );
};

export const SubTitle = styled.div`
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
export const DataDisplay = styled.div`
  font-size: 15px;
  padding: 10px;
`;
export default MajorSection;
