import React from 'react';
import styled from 'styled-components';
import { FusionType, IFusion } from '../type/subject';
import CheckBox from './CheckBox';
import { useRecoilValue } from 'recoil';
import { CyberSecurity } from '../atom/TotalCredit';

const MajorSection = ({ data }: { data: IFusion[] }) => {
  const cyber = useRecoilValue(CyberSecurity);

  function getDisplayType(type: FusionType): number {
    if (type === '전공기초') {
      return cyber.majorBase;
    }
    if (type === '전공필수') {
      return cyber.majorRequire;
    }
    if (type === '관계학') {
      return cyber.relation;
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
      {data.map((data: IFusion) => (
        <CheckBox key={data.name} subjectInfo={data}></CheckBox>
      ))}
      <hr></hr>
    </>
  );
};

const SubTitle = styled.div`
  justify-content: center;
  font-size: 15px;
`;
const DataDisplay = styled.div`
  font-size: 15px;
  padding: 10px;
`;
export default MajorSection;
