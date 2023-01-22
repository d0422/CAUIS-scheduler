import { useRecoilState } from 'recoil';
import { GeneralElective } from '../atom/atom';
import { generalElective } from '../data/GE/general elective';
import ElectionSection from './ElectionSection';

const EssentialElectiveComponent = () => {
  const [generalAtom, setGeneralAtom] = useRecoilState(GeneralElective);
  return (
    <>
      <ElectionSection
        data={generalElective}
        atomValue={generalAtom}
        setAtomValue={setGeneralAtom}
      />
    </>
  );
};

export default EssentialElectiveComponent;
