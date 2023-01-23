import styled from 'styled-components';

import CheckBox from './CheckBox';

import {
  ICyberSecurity,
  IFusion,
  IIndustrialSecurity,
  ISubject,
} from '../type/subject';
import { useSubjectTitle } from '../hooks/useSubjectTitle';

type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
interface IProps {
  data: IFusion[] | ISubject[];
  recoilValue: ICyberSecurity | IIndustrialSecurity;
  setRecoilValue:
    | SetterOrUpdater<IIndustrialSecurity>
    | SetterOrUpdater<ICyberSecurity>;
}

const MajorSection = ({ data, recoilValue, setRecoilValue }: IProps) => {
  const [getSubjectTitle] = useSubjectTitle(recoilValue, data[0].type);
  const SUBJECT_TYPE = data[0].type;
  return (
    <>
      <SubTitle>{SUBJECT_TYPE}</SubTitle>
      <DataDisplay>
        {getSubjectTitle()}
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
