import { useState } from 'react';
import { GridContainer, ImageContainer, Image } from './ImageGridStyle';

const ImageGrid: React.FC = () => {
  const [hoverImage, setHoverImage] = useState<number | null>(null);

  const images = Array(20)
    .fill(null)
    .map((_, index) => (
      <ImageContainer
        key={index}
        isHovered={hoverImage === index}
        onMouseEnter={() => setHoverImage(index)}
        onMouseLeave={() => setHoverImage(null)}
      >
        <Image
          src="/image/icons/MenuWhoIcon.png"
          alt="placeholder"
          className="w-full h-full object-cover"
        />
      </ImageContainer>
    ));

  return <GridContainer>{images}</GridContainer>;
};

export default ImageGrid;
