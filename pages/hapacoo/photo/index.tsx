import { useRecoilState } from 'recoil';
import { IMasonryItem } from '../../../src/commons/types';
import MasonryContainer from '../../../src/components/units/Masonry/Mansonry';
import { isWhoState } from '../../../src/commons/stores';

export default function HPCPhotoPage() {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HAPACOO');
  const totalImages = 125;

  const generateItems = (): IMasonryItem[] => {
    return Array.from({ length: totalImages }, (_, index) => ({
      imageLocation: `/image/hapacoo/photo/${index}.webp`,
    }));
  };
  const items = generateItems();

  return <MasonryContainer items={items} />;
}
