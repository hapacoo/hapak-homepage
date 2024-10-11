import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';
import ImageGrid from '../../src/components/units/ImageGrid/ImageGrid';
import { useEffect } from 'react';

export const NAVIGATION_HAPACOO: NavigationType[] = [
  { name: 'DRAWING', page: 'HAPACOO/drawing' },
  { name: 'ILLUST', page: 'HAPACOO/illustration' },
  { name: 'PHOTO', page: 'HAPACOO/photo' },
  // { name: 'TATTOO', page: '/HAPACOO/tattoo' },
];

export default function HapacooPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  useEffect(() => {
    setIsWho('HAPACOO');
  }, []);

  return (
    <>
      <ImageGrid />
    </>
  );
}
