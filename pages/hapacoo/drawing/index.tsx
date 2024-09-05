import { IMasonryItem } from '../../../src/commons/types';
import MasonryContainer from '../../../src/components/units/Masonry/Mansonry';

export default function HPCDrawingPage() {
  const totalImages = 144;

  const generateItems = (): IMasonryItem[] => {
    return Array.from({ length: totalImages }, (_, index) => ({
      imageLocation: `/image/hapacoo/drawing/${index}.webp`,
    }));
  };
  const items = generateItems();

  return <MasonryContainer items={items} />;
}
