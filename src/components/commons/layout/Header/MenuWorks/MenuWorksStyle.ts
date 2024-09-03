import styled from '@emotion/styled';
import { IMenuWorksProps } from '../../../../../commons/types';

export const WrapperMenu = styled.nav<IMenuWorksProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  transform: ${({ open }) =>
    open ? 'translateX(calc(100vw - 350px))' : 'translateX(100vw)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
    translate: -90px;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
