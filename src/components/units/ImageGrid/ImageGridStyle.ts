import styled from '@emotion/styled';

interface ImageContainerProps {
  isHovered: boolean;
}
export const GridContainer = styled.div`
  width: 100%;
  margin: 10vh 0 3vh 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  display: flex;
  flex-direction: column;
  width: 8vw;
  height: 8vh;
  margin: 2.7rem;
  background-color: transparent;
  transition: transform 1s ease-in-out;
  transform: ${(props) =>
    props.isHovered ? 'rotate(360deg)' : 'rotate(0deg)'};

  @media (max-width: 1440px) {
    width: 10vw;
    height: 10vh;
    margin: 1.7rem;
  }
  @media (max-width: 1024px) {
    width: 13vw;
    height: 13vh;
    margin: 1rem;
  }

  @media (max-width: 390px) {
    width: 32vw;
    height: 30vh;
    margin: 0.7rem;
  }
`;

export const Image = styled.img`
  background-color: transparent;
`;
