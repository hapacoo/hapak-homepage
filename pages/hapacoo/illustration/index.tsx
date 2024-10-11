import { useRecoilState } from 'recoil';
import { InstagramFeed } from '../../../src/components/units/Instagram/InstagramFeed';
import { isWhoState } from '../../../src/commons/stores';
import { useEffect } from 'react';

export default function HPCIllustPage() {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  useEffect(() => {
    setIsWho('HAPACOO');
  }, []);

  return (
    <>
      <InstagramFeed />
    </>
  );
}
