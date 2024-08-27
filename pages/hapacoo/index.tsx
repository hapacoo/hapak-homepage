import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAPACOO: NavigationType[] = [
  { name: 'INTRODUCE', page: 'introduceHapcoo' },
  { name: 'DRAWING', page: 'drawingHapcoo' },
  { name: 'STORY', page: 'storyHapcoo' },
  { name: 'PICTURE', page: 'pictureHapcoo' },
  { name: 'TATTOO', page: 'tattooHattoo' },
  { name: 'CONTACT', page: 'contactHapacoo' },
];

export default function HapacooPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HPC');

  return (
    <>
      <div> cf======================================</div>
      <button>0000</button>
    </>
  );
}
