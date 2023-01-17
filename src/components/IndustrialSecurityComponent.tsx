import React from 'react';
import MajorSection from './MajorSection';
import { majorBase } from '../data/Industrial Security/base';
import { majorRequire } from '../data/Industrial Security/require';
import majorSubSet from '../data/Industrial Security/major';
import { useRecoilState } from 'recoil';
import { IIndustrialSecurity } from '../type/subject';
import { IndustrialSecurity } from '../atom/TotalCredit';
const IndustrialSecurityComponent = () => {
  const [industrialSecurity, setIndustrialSecurity] =
    useRecoilState<IIndustrialSecurity>(IndustrialSecurity);
  return (
    <>
      <MajorSection
        data={majorBase}
        recoilValue={industrialSecurity}
        setRecoilValue={setIndustrialSecurity}
      />
      <MajorSection
        data={majorRequire}
        recoilValue={industrialSecurity}
        setRecoilValue={setIndustrialSecurity}
      />
      <MajorSection
        data={majorSubSet}
        recoilValue={industrialSecurity}
        setRecoilValue={setIndustrialSecurity}
      />
    </>
  );
};

export default IndustrialSecurityComponent;
