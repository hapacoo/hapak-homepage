import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAPACOO: NavigationType[] = [
  { name: 'INTRODUCE', page: '/HAPACOO/infomation' },
  { name: 'DRAWING', page: '/HAPACOO/drawing' },
  // { name: 'STORY', page: '/HAPACOO/' },
  { name: 'PICTURE', page: '/HAPACOO/picture' },
  { name: 'TATTOO', page: '/HAPACOO/tattoo' },
  { name: 'CONTACT', page: '/HAPACOO/contact' },
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
