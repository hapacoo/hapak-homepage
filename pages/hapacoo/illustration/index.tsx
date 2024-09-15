import { useRecoilState } from 'recoil';
import { InstagramFeed } from '../../../src/components/units/Instagram/InstagramFeed';
import { isWhoState } from '../../../src/commons/stores';

export default function HPCIllustPage() {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HAPACOO');
  return (
    <>
      <InstagramFeed />
    </>
  );
}
