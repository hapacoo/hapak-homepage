import { IMasonryContainerProps } from '../../../commons/types';
import * as S from './MasonryStyle';

const MasonryContainer: React.FC<IMasonryContainerProps> = ({ items }) => {
  const breakpointColumnObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <S.MasonryWrapper>
      <S.StyledMasonry
        breakpointCols={breakpointColumnObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {items.map((item, index) => (
          <S.MasonryItem key={index}>
            <S.MasonryImage
              src={item.imageLocation}
              alt={`Image ${index + 1}`}
            />
          </S.MasonryItem>
        ))}
      </S.StyledMasonry>
    </S.MasonryWrapper>
  );
};

export default MasonryContainer;
