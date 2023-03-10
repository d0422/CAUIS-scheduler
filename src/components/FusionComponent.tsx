import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

import MajorSection from './MajorSection';

import { majorBase } from '../data/CyberSecurity/base';
import { relation } from '../data/CyberSecurity/relation';
import { majorRequire } from '../data/CyberSecurity/require';

import { CyberSecurity } from '../atom/atom';

import { ICyberSecurity } from '../type/subject';

const FusionComponent = () => {
  const [cyber, setCyber] = useRecoilState<ICyberSecurity>(CyberSecurity);
  const data = [majorBase, majorRequire, relation];
  useEffect(() => {
    setCyber((prev) => {
      const newObj = { ...prev };
      newObj.majorBase = 9;
      newObj.majorRequire = 15;
      newObj.relation = 12;
      return newObj;
    });
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
