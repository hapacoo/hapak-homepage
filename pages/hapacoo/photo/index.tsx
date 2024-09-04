import { IMasonryItem } from '../../../src/commons/types';
import MasonryContainer from '../../../src/components/units/Masonry/Mansonry';

export default function HPCPhotoPage() {
  const totalImages = 91;

  const generateItems = (): IMasonryItem[] => {
    return Array.from({ length: totalImages }, (_, index) => ({
      imageLocation: `/image/hapacoo/photo/${index}.webp`,
    }));
  };
  const items = generateItems();

  return <MasonryContainer items={items} />;
}
