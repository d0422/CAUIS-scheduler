import { useRecoilState } from 'recoil';
import {
  EssentialElectionChallenge,
  EssentialElectionCommnunicatation,
  EssentialElectionCreative,
  EssentialElectionFusion,
  EssentialElectionTrust,
} from '../atom/atom';
import {
  generalElectiveChallenge,
  generalElectiveCommunication,
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
  const [generalCommunicationAtom, setGeneralCommunicationAtom] =
    useRecoilState(EssentialElectionCommnunicatation);
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
      <ElectionSection
        data={generalElectiveCommunication}
        atomValue={generalCommunicationAtom}
        setAtomValue={setGeneralCommunicationAtom}
      />
    </>
  );
};

export default EssentialElectiveComponent;
