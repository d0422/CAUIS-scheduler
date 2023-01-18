import MajorSection from './MajorSection';
import { majorBase } from '../data/CyberSecurity/base';
import { relation } from '../data/CyberSecurity/relation';
import { majorRequire } from '../data/CyberSecurity/require';
import { useRecoilState } from 'recoil';
import { CyberSecurity } from '../atom/TotalCredit';
import { ICyberSecurity } from '../type/subject';
import { useEffect } from 'react';

const FusionComponent = () => {
  const [cyber, setCyber] = useRecoilState<ICyberSecurity>(CyberSecurity);
  const data = [majorBase, majorRequire, relation];
  useEffect(() => {
    data.forEach((array) => {
      array.forEach((realData) => {
        if (realData.hasTaken) {
          if (realData.type === '전공기초') {
            setCyber((prev) => {
              const newObj = { ...prev };
              newObj.majorBase -= realData.credit;
              return newObj;
            });
          }
          if (realData.type === '전공필수') {
            setCyber((prev) => {
              const newObj = { ...prev };
              newObj.majorRequire -= realData.credit;
              return newObj;
            });
          }
          if (realData.type === '관계학') {
            setCyber((prev) => {
              const newObj = { ...prev };
              newObj.relation -= realData.credit;
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
        recoilValue={cyber}
        setRecoilValue={setCyber}
      />
      <MajorSection
        data={majorRequire}
        recoilValue={cyber}
        setRecoilValue={setCyber}
      />
      <MajorSection
        data={relation}
        recoilValue={cyber}
        setRecoilValue={setCyber}
      />
    </>
  );
};

export default FusionComponent;
