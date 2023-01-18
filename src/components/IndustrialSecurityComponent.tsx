import { useEffect } from 'react';
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
  const data = [majorBase, majorRequire, majorSubSet];
  useEffect(() => {
    data.forEach((array) => {
      array.forEach((realData) => {
        if (realData.hasTaken) {
          if (realData.type === '전공') {
            setIndustrialSecurity((prev) => {
              const newObj = { ...prev };
              newObj.major -= realData.credit;
              return newObj;
            });
          }
          if (realData.type === '전공기초') {
            setIndustrialSecurity((prev) => {
              const newObj = { ...prev };
              newObj.majorBase -= realData.credit;
              newObj.major -= realData.credit;
              return newObj;
            });
          }
          if (realData.type === '전공필수') {
            setIndustrialSecurity((prev) => {
              const newObj = { ...prev };
              newObj.majorRequire -= realData.credit;
              newObj.major -= realData.credit;
              return newObj;
            });
          }
        }
      });
    });
  }, []);
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
