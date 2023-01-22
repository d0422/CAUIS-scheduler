import styled from 'styled-components';
import {
  ICyberSecurity,
  IFusion,
  IIndustrialSecurity,
  ISubject,
} from '../type/subject';
import { majorBase } from '../data/CyberSecurity/base';
import { relation } from '../data/CyberSecurity/relation';
import { majorRequire } from '../data/CyberSecurity/require';
import { majorBase as ISmajorBase } from '../data/Industrial Security/base';
import { majorRequire as ISmajorRequire } from '../data/Industrial Security/require';
import majorSubSet from '../data/Industrial Security/major';
import { useCheckBox } from '../hooks/useCheckBox';

type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
interface ICheckBox {
  subjectInfo: IFusion | ISubject;
  setRecoilValue:
    | SetterOrUpdater<IIndustrialSecurity>
    | SetterOrUpdater<ICyberSecurity>;
}
const CheckBox = ({ subjectInfo, setRecoilValue }: ICheckBox) => {
  const [SRC, setTotal] = useCheckBox(subjectInfo);
  const checkArray = [
    majorBase,
    relation,
    majorRequire,
    ISmajorBase,
    ISmajorRequire,
    majorSubSet,
  ];

  const setFunc = () => {
    setTotal();
    subjectInfo.hasTaken ? setRecoilValue(plus) : setRecoilValue(minus);
    checkArray.forEach((array) => {
      array.forEach((data) => {
        if (data.name === subjectInfo.name) data.hasTaken = !data.hasTaken;
      });
    });
  };

  function minus(prev: any) {
    const newObject = { ...prev };
    if (subjectInfo.type === '전공기초') {
      newObject.majorBase -= subjectInfo.credit;
      if (newObject.major !== undefined) {
        newObject.major -= subjectInfo.credit;
      }
    }
    if (subjectInfo.type === '전공필수') {
      newObject.majorRequire -= subjectInfo.credit;
      if (newObject.major !== undefined) {
        newObject.major -= subjectInfo.credit;
      }
    }
    if (subjectInfo.type === '관계학') newObject.relation -= subjectInfo.credit;
    if (subjectInfo.type === '전공') {
      newObject.major -= subjectInfo.credit;
    }
    return newObject;
  }
  function plus(prev: any) {
    const newObject = { ...prev };
    if (subjectInfo.type === '전공기초') {
      newObject.majorBase += subjectInfo.credit;
      if (newObject.major !== undefined) {
        newObject.major += subjectInfo.credit;
      }
    }

    if (subjectInfo.type === '전공필수') {
      newObject.majorRequire += subjectInfo.credit;
      if (newObject.major !== undefined) {
        newObject.major += subjectInfo.credit;
      }
    }
    if (subjectInfo.type === '관계학') newObject.relation += subjectInfo.credit;
    if (subjectInfo.type === '전공') {
      newObject.major += subjectInfo.credit;
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
