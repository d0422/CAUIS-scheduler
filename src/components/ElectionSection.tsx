import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { RequireElective } from '../atom/atom';
import { DataDisplay, SubTitle } from './MajorSection';
import { requireElective } from '../data/GE/require elective';
import CheckBoxElection from './CheckBoxElection';
import { IEssentialElective, IRequireElective } from '../type/subject';
import styled from 'styled-components';
type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
const ElectionSection = ({
  data,
  atomValue,
  setAtomValue,
}: {
  data: IRequireElective[] | IEssentialElective[];
  atomValue: number;
  setAtomValue: SetterOrUpdater<number>;
}) => {
  const [toggle, setToggle] = useState(true);
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
      <DataDisplay>
        {atomValue >= 0 ? atomValue : 0}학점 남았습니다.
      </DataDisplay>
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
