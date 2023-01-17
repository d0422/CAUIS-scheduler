import styled from 'styled-components';
import { majorBase } from '../data/CyberSecurity/base';
import { relation } from '../data/CyberSecurity/relation';
import { majorRequire } from '../data/CyberSecurity/require';
import { useRecoilValue } from 'recoil';
import { totalCredit } from '../atom/TotalCredit';
import MajorSection from '../components/MajorSection';
const Main = () => {
  const credit = useRecoilValue(totalCredit);
  return (
    <Wrapper>
      <TotalCredit>{credit} 학점 남았습니다.</TotalCredit>
      <Title>사이버융합전공</Title>
      <hr></hr>
      <MajorSection data={majorBase} />
      <MajorSection data={majorRequire} />
      <MajorSection data={relation} />
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

const TotalCredit = styled.div`
  padding: 20px;
  font-size: 35px;
`;

export default Main;
