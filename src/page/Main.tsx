import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { totalCredit } from '../atom/TotalCredit';

import swapButton from '../img/swap.png';
import { useState } from 'react';
import FusionComponent from '../components/FusionComponent';
import IndustrialSecurityComponent from '../components/IndustrialSecurityComponent';
const Main = () => {
  const credit = useRecoilValue(totalCredit);
  const [selector, setSelector] = useState('사이버융합전공');
  const [modal, setModal] = useState(false);
  const category = ['산업보안학과', '사이버융합전공'];
  return (
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

      {modal ? (
        <Modal>
          {category.map((c) => (
            <CategoryTitle
              onClick={() => {
                setSelector(c);
                setModal(false);
              }}
            >
              {c}
            </CategoryTitle>
          ))}
        </Modal>
      ) : (
        ''
      )}

      <hr></hr>
      {selector === '사이버융합전공' ? (
        <FusionComponent />
      ) : (
        <IndustrialSecurityComponent />
      )}
    </Wrapper>
  );
};
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
`;
const TotalCredit = styled.div`
  padding: 20px;
  font-size: 33px;
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
