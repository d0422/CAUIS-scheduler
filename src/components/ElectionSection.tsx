import { useEffect, useState } from 'react';

import { DataDisplay, SubTitle } from './MajorSection';
import CheckBoxElection from './CheckBoxElection';

import { IEssentialElective, IRequireElective } from '../type/subject';
import { useSubjectTitle } from '../hooks/useSubjectTitle';

type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
interface IProps {
  data: IRequireElective[] | IEssentialElective[];
  atomValue: number;
  setAtomValue: SetterOrUpdater<number>;
}

const ElectionSection = ({ data, atomValue, setAtomValue }: IProps) => {
  const [toggle, setToggle] = useState(true);
  const [getSubjectTitle] = useSubjectTitle(atomValue);
  useEffect(() => {
    if ('subtype' in data[0]) setToggle(false);
  }, []);
  return (
    <>
      {'subtype' in data[0] ? (
        <SubTitle onClick={() => setToggle((prev) => !prev)}>
          {toggle ? '▼' : '▶'} {data[0].subtype}
        </SubTitle>
      ) : (
        <SubTitle>{data[0].type}</SubTitle>
      )}
      <DataDisplay>{getSubjectTitle()}학점 남았습니다.</DataDisplay>
      {toggle &&
        data.map((subjectData, index) => (
          <CheckBoxElection
            key={index}
            subjectInfo={subjectData}
            setRecoilValue={setAtomValue}
          />
        ))}
    </>
  );
};

export default ElectionSection;
