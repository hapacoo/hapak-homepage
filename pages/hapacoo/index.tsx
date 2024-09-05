import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAPACOO: NavigationType[] = [
  { name: 'DRAWING', page: '/HAPACOO/drawing' },
  { name: 'PHOTO', page: '/HAPACOO/photo' },
  { name: 'TATTOO', page: '/HAPACOO/tattoo' },
];

export default function HapacooPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HAPACOO');

  return (
    <>
      <div> cf======================================</div>
      <button>0000</button>
    </>
  );
}
