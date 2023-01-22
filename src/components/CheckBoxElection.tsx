import { totalCredit } from '../atom/atom';
import checkbox from '../img/checkbox.png';
import notcheckbox from '../img/notcheckbox.png';
import { IEssentialElective, IRequireElective } from '../type/subject';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
const CheckBoxElection = ({
  subjectInfo,
  setRecoilValue,
}: {
  subjectInfo: IRequireElective | IEssentialElective;
  setRecoilValue: SetterOrUpdater<number>;
}) => {
  const SRC = subjectInfo.hasTaken ? checkbox : notcheckbox;
  const setCredit = useSetRecoilState(totalCredit);
  const setFunc = () => {
    subjectInfo.hasTaken && setCredit((prev) => (prev += subjectInfo.credit));
    !subjectInfo.hasTaken && setCredit((prev) => (prev -= subjectInfo.credit));
    subjectInfo.hasTaken &&
      setRecoilValue((prev) => (prev += subjectInfo.credit));
    !subjectInfo.hasTaken &&
      setRecoilValue((prev) => (prev -= subjectInfo.credit));
    subjectInfo.hasTaken = !subjectInfo.hasTaken;
  };
  return (
    <>
      <Wrapper>
        <Title>{subjectInfo.name}</Title>
        <img src={SRC} alt="check" onClick={setFunc} />
      </Wrapper>
    </>
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
export default CheckBoxElection;
