import { useEffect } from 'react';
import MajorSection from './MajorSection';
import { majorBase } from '../data/Industrial Security/base';
import { majorRequire } from '../data/Industrial Security/require';
import majorSubSet from '../data/Industrial Security/major';
import { useRecoilState } from 'recoil';
import { IIndustrialSecurity, ISubject } from '../type/subject';
import { IndustrialSecurity } from '../atom/atom';

const IndustrialSecurityComponent = () => {
  const [industrialSecurity, setIndustrialSecurity] =
    useRecoilState<IIndustrialSecurity>(IndustrialSecurity);
  const IndustrialSecurityMajorData = [majorBase, majorRequire, majorSubSet];
  const checkDuplicateSubject = (majorTypeArray: ISubject[]) => {
    majorTypeArray.forEach((subjectData) => {
      if (subjectData.hasTaken) {
        if (subjectData.type === '전공') {
          setIndustrialSecurity((prev) => {
            const newObj = { ...prev };
            newObj.major -= subjectData.credit;
            return newObj;
          });
        }
        if (subjectData.type === '전공기초') {
          setIndustrialSecurity((prev) => {
            const newObj = { ...prev };
            newObj.majorBase -= subjectData.credit;
            newObj.major -= subjectData.credit;
            return newObj;
          });
        }
        if (subjectData.type === '전공필수') {
          setIndustrialSecurity((prev) => {
            const newObj = { ...prev };
            newObj.majorRequire -= subjectData.credit;
            newObj.major -= subjectData.credit;
            return newObj;
          });
        }
      }
    });
  };

  useEffect(() => {
    setIndustrialSecurity((prev) => {
      const newObj = { ...prev };
      newObj.major = 45;
      newObj.majorBase = 15;
      newObj.majorRequire = 18;
      return newObj;
    });
    IndustrialSecurityMajorData.forEach(checkDuplicateSubject);
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
