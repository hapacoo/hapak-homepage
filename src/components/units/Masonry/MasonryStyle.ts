import styled from '@emotion/styled';
import Masonry from 'react-masonry-css';

export const MasonryWrapper = styled.div`
  padding: 1rem;
`;
export const StyledMasonry = styled(Masonry)`
  display: flex;
  width: auto;
`;
export const MasonryColumn = styled.div`
  padding-left: 30px;
  background-clip: padding-box;
`;
export const MasonryItem = styled.div`
  background: #fff;
  margin: 15px 5px;
  break-inside: avoid;
  border-radius: 3px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
`;
export const MasonryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
