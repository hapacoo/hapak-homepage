import styled from '@emotion/styled';
import { IMenuWorksStyleProps } from '../../../../commons/types';

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90px;
  padding: 15px;
  background-color: transparent;
  z-index: 1000;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: transparent;
`;

export const HeaderButton = styled.button<IMenuWorksStyleProps>`
  padding: 0;
  margin-right: 10px;
  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  -webkit-text-stroke: black 2px;
  background-color: transparent;
  border-style: none;
  z-index: 50;
  cursor: pointer;

  :hover {
    color: #000;
    text-shadow:
      0px 0px 10px #a6f27d,
      0px 0px 15px #a6f27d;
  }
`;

export const CharacterButton = styled.button`
  width: 50px;
  height: 50px;
  padding: 10px 16px;
  border-radius: 25px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  color: #000;
  background-color: #fff;
  border-style: none;
  cursor: pointer;
`;
