import { useEffect, useRef, useState } from 'react';
import {
  GroupContainer,
  ImageContainer,
  ImageItem,
  TextContainer,
} from './ContentStyle';
import { IContentProps } from '../../../commons/types';
import BackToTopButton from '../../commons/icons/backtop/backtop';

const ContentContainer: React.FC<IContentProps> = ({
  title,
  content,
  images,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    if (groupRef.current) {
      observer.observe(groupRef.current);
    }
    return () => {
      if (groupRef.current) {
        observer.unobserve(groupRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <GroupContainer ref={groupRef}>
      <TextContainer isVisible={isVisible}>
        <h2>{title}</h2>
        <p>{content}</p>
      </TextContainer>
      <ImageContainer>
        {images.map((src, index) => (
          <ImageItem
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            isVisible={isVisible}
            delay={index * 50}
          />
        ))}
      </ImageContainer>
      <BackToTopButton />
    </GroupContainer>
  );
};

export default ContentContainer;
