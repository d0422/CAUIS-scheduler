import { useRecoilState } from 'recoil';
import {
  EssentialElectionChallenge,
  EssentialElectionCreative,
  EssentialElectionFusion,
  EssentialElectionTrust,
} from '../atom/atom';
import {
  generalElectiveChallenge,
  generalElectiveCreative,
  generalElectiveFusion,
  generalElectiveTrust,
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
  const [generalTrustAtom, setGeneralTrustAtom] = useRecoilState(
    EssentialElectionTrust
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
      <ElectionSection
        data={generalElectiveTrust}
        atomValue={generalTrustAtom}
        setAtomValue={setGeneralTrustAtom}
      />
    </>
  );
};

export default EssentialElectiveComponent;
