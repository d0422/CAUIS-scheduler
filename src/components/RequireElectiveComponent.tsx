import React from 'react';
import { useRecoilState } from 'recoil';
import { RequireElective } from '../atom/atom';
import { requireElective } from '../data/GE/require elective';

import { IRequireElective } from '../type/subject';
import ElectionSection from './ElectionSection';

const RequireElectiveComponent = () => {
  const [requireAtom, setRequireAtom] = useRecoilState(RequireElective);

  return (
    <ElectionSection
      data={requireElective}
      atomValue={requireAtom}
      setAtomValue={setRequireAtom}
    />
  );
};

export default RequireElectiveComponent;
