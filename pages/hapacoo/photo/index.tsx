import { useRecoilState } from 'recoil';
import { IMasonryItem } from '../../../src/commons/types';
import MasonryContainer from '../../../src/components/units/Masonry/Mansonry';
import { isWhoState } from '../../../src/commons/stores';
import { useEffect } from 'react';

export default function HPCPhotoPage() {
  const [isWho, setIsWho] = useRecoilState(isWhoState);

  useEffect(() => {
    setIsWho('HAPACOO');
  }, []);

  const totalImages = 124;

  const generateItems = (): IMasonryItem[] => {
    return Array.from({ length: totalImages }, (_, index) => ({
      imageLocation: `/image/hapacoo/photo/${index}.webp`,
    }));
  };
  const items = generateItems();

  return <MasonryContainer items={items} />;
}
