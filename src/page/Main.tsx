import styled from 'styled-components';
import CheckBox from '../components/CheckBox';
import { majorBase } from '../data/CyberSecurity/base';
import { relation } from '../data/CyberSecurity/relation';
import { majorRequire } from '../data/CyberSecurity/require';
import { IFusion } from '../type/subject';
import { useRecoilValue } from 'recoil';
import { CyberSecurity, totalCredit } from '../atom/TotalCredit';
const Main = () => {
  const credit = useRecoilValue(totalCredit);
  const cyber = useRecoilValue(CyberSecurity);
  return (
    <Wrapper>
      <TotalCredit>{credit} 학점 남았습니다.</TotalCredit>
      <Title>사이버융합전공</Title>
      <hr></hr>
      <SubTitle>전공기초</SubTitle>
      <DataDisplay>{cyber.majorBase} 학점 남았습니다.</DataDisplay>
      {majorBase.map((data: IFusion) => (
        <CheckBox key={data.name} subjectInfo={data}></CheckBox>
      ))}
      <hr></hr>
      <SubTitle>전공필수</SubTitle>
      <DataDisplay>{cyber.majorRequire} 학점 남았습니다.</DataDisplay>
      {majorRequire.map((data: IFusion) => (
        <CheckBox key={data.name} subjectInfo={data}></CheckBox>
      ))}
      <hr></hr>
      <SubTitle>관계학</SubTitle>
      <DataDisplay>{cyber.relation} 학점 남았습니다.</DataDisplay>
      {relation.map((data: IFusion) => (
        <CheckBox key={data.name} subjectInfo={data}></CheckBox>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  padding: 30px;
`;
const Title = styled.div`
  justify-content: center;
  font-size: 30px;
`;
const SubTitle = styled.div`
  justify-content: center;
  font-size: 15px;
`;
const TotalCredit = styled.div`
  padding: 20px;
  font-size: 35px;
`;
const DataDisplay = styled.div`
  font-size: 15px;
  padding: 10px;
`;
export default Main;
