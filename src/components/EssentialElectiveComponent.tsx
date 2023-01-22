import { useRecoilState } from 'recoil';
import {
  EssentialElectionChallenge,
  EssentialElectionCreative,
  EssentialElectionFusion,
} from '../atom/atom';
import {
  generalElectiveChallenge,
  generalElectiveCreative,
  generalElectiveFusion,
} from '../data/GE/general elective';
import ElectionSection from './ElectionSection';

const EssentialElectiveComponent = () => {
  const [generalFusionAtom, setGeneralFusionAtom] = useRecoilState(
    EssentialElectionFusion
  );
  const [generalChallengeAtom, setGeneralChallengeAtom] = useRecoilState(
    EssentialElectionChallenge
  );
  const [generalCreativeAtom, setGeneralCreativeAtom] = useRecoilState(
    EssentialElectionCreative
  );
  return (
    <>
      <ElectionSection
        data={generalElectiveFusion}
        atomValue={generalFusionAtom}
        setAtomValue={setGeneralFusionAtom}
      />
      <ElectionSection
        data={generalElectiveChallenge}
        atomValue={generalChallengeAtom}
        setAtomValue={setGeneralChallengeAtom}
      />
      <ElectionSection
        data={generalElectiveCreative}
        atomValue={generalCreativeAtom}
        setAtomValue={setGeneralCreativeAtom}
      />
    </>
  );
};

export default EssentialElectiveComponent;
