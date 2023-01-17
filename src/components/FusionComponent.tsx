import MajorSection from './MajorSection';
import { majorBase } from '../data/CyberSecurity/base';
import { relation } from '../data/CyberSecurity/relation';
import { majorRequire } from '../data/CyberSecurity/require';
import { useRecoilState } from 'recoil';
import { CyberSecurity } from '../atom/TotalCredit';
import { ICyberSecurity } from '../type/subject';
const FusionComponent = () => {
  const [cyber, setCyber] = useRecoilState<ICyberSecurity>(CyberSecurity);
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
