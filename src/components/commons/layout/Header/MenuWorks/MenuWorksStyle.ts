import styled from '@emotion/styled';
import { IWrapperMenuProps } from '../../../../../commons/types';

export const WrapperMenu = styled.nav<IWrapperMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  transform: ${({ open }) =>
    open ? 'translateX(calc(100vw - 350px))' : 'translateX(100vw)'};
  height: 700px;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  /* @media (max-width: 576px) {
    width: 100%;
    translate: -90px;
  } */

  a {
    font-size: 3rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 800;
    letter-spacing: 0.5rem;
    color: #ffffff;
    -webkit-text-stroke: black 2px;

    background-color: transparent;
    text-decoration: none;
    cursor: pointer;

    :hover {
      color: #000;
      text-shadow:
        0px 0px 10px #f9c840,
        0px 0px 15px #a6f27d;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  @media (max-width: 1440px) {
    font-size: 4rem;
  }
  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 390px) {
    font-size: 3rem;
  }
`;
