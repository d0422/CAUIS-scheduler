import { IEssentialElective, IRequireElective } from '../type/subject';
import styled from 'styled-components';
import { useCheckBox } from '../hooks/useCheckBox';
type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
interface ICheckBoxElection {
  subjectInfo: IRequireElective | IEssentialElective;
  setRecoilValue: SetterOrUpdater<number>;
}
const CheckBoxElection = ({
  subjectInfo,
  setRecoilValue,
}: ICheckBoxElection) => {
  const [SRC, setTotal] = useCheckBox(subjectInfo);
  const setFunc = () => {
    setTotal();
    subjectInfo.hasTaken
      ? setRecoilValue((prev) => prev + subjectInfo.credit)
      : setRecoilValue((prev) => prev - subjectInfo.credit);
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
