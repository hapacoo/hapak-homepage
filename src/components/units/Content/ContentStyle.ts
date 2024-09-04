import styled from '@emotion/styled';
import { IContentStyleProps } from '../../../commons/types';

export const GroupContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin-bottom: 120px;
`;

export const TextContainer = styled.div<IContentStyleProps>`
  width: 40%;
  position: sticky;
  top: 50px;
  align-self: flex-start;
  padding: 150px;
  transition:
    transform 0.5s ease-out,
    opacity 0.5s ease-out;
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(50px)'};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`;

export const ImageContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const ImageItem = styled.img<IContentStyleProps>`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(30px)'};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition-delay: ${(props) => props.delay}ms;
`;
