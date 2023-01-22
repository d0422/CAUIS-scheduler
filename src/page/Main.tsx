import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { totalCredit } from '../atom/atom';

import swapButton from '../img/swap.png';
import { useState } from 'react';
import FusionComponent from '../components/FusionComponent';
import IndustrialSecurityComponent from '../components/IndustrialSecurityComponent';
import RequireElectiveComponent from '../components/RequireElectiveComponent';
import GeneralElectiveComponent from '../components/EssentialElectiveComponent';

const Main = () => {
  const credit = useRecoilValue(totalCredit);
  const [selector, setSelector] = useState('산업보안학과');
  const [modal, setModal] = useState(false);
  const category = ['산업보안학과', '사이버융합전공', '필수교양', '공통교양'];
  return (
    <>
      <AppTitle>📅졸업학점계산기</AppTitle>
      <Wrapper>
        <TotalCredit>{credit} 학점 남았습니다.</TotalCredit>
        <Header>
          <ImgWrapper
            onClick={() => {
              setModal((prev) => !prev);
            }}
          >
            <img src={swapButton} alt="img" width="30px" height="30px" />
          </ImgWrapper>

          <Title>{selector}</Title>
        </Header>

        {modal && (
          <Modal>
            {category.map((c) => (
              <CategoryTitle
                key={c}
                onClick={() => {
                  setSelector(c);
                  setModal(false);
                }}
              >
                {c}
              </CategoryTitle>
            ))}
          </Modal>
        )}

        <hr></hr>
        {selector === '사이버융합전공' && <FusionComponent />}
        {selector === '산업보안학과' && <IndustrialSecurityComponent />}
        {selector === '필수교양' && <RequireElectiveComponent />}
        {selector === '공통교양' && <GeneralElectiveComponent />}
        <Footer>만든 사람</Footer>
        <Email>Email : rlfehd2013@naver.com</Email>
        <Email>Instagram: _0422</Email>
        <Text>오류 또는 데이터 부족시 연락 부탁드립니다.</Text>
      </Wrapper>
    </>
  );
};
const AppTitle = styled.div`
  font-size: 30px;
  padding: 5px;
  margin: 10px;
`;
const Footer = styled.div`
  font-size: 20px;
  text-align: end;
`;
const Email = styled.div`
  font-size: 14px;
  text-align: end;
`;
const Text = styled.div`
  font-size: 12px;
  text-align: end;
`;
const Wrapper = styled.div`
  border-style: solid;
  border-color: black;
  border-width: 1px;
  padding: 30px;
  border-radius: 10px;
`;
const Title = styled.div`
  justify-content: center;
  font-size: 30px;
`;
const CategoryTitle = styled.div`
  justify-content: center;
  font-size: 30px;
  padding-top: 5px;
  cursor: pointer;
`;
const TotalCredit = styled.div`
  padding-bottom: 10px;
  font-size: 33px;
  font-weight: 600;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  margin-right: 10px;
`;
const Modal = styled.div`
  border: solid 1px;
  padding-left: 55px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export default Main;
