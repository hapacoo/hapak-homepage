import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';
import { useEffect } from 'react';

export const NAVIGATION_HAPAK: NavigationType[] = [
  { name: 'SCULPTURE', page: 'HA_PAK/sculpture' },
  { name: 'DRAWING', page: 'HA_PAK/drawing' },
  { name: 'VIDEO', page: 'HA_PAK/video' },
  // { name: 'WEB-ART', page: 'HA_PAK/webart' },
];

export default function HaPakPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  useEffect(() => {
    setIsWho('HA_PAK');
  }, []);

  return (
    <>
      <img src="/image/hapak/front/frontImage.png" />
    </>
  );
}
