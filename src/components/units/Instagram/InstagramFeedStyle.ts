import styled from '@emotion/styled';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-width: 3000px;
  margin-top: 80px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PostWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

export const PostContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 10px;

  &:hover {
    opacity: 1;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CarouselIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 2px 6px;
  border-radius: 10px;
`;
