import { IMasonryItem } from '../../../src/commons/types';
import MasonryContainer from '../../../src/components/units/Masonry/Mansonry';

export default function HPDrawingPage() {
  const totalImages = 120;

  const generateItems = (): IMasonryItem[] => {
    return Array.from({ length: totalImages }, (_, index) => ({
      imageLocation: `/image/hapak/drawing/${index}.webp`,
    }));
  };

  const items = generateItems();

  return <MasonryContainer items={items} />;
}
