import styled from '@emotion/styled';
import { IStyledMenuWorksProps } from '../../../../commons/types';

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 15px;
  background-color: blue;
  z-index: 1000;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderButton = styled.button<IStyledMenuWorksProps>`
  padding: 0;
  margin-right: 10px;
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  border-color: orange;
  background-color: transparent;
  z-index: 50;
  /* border-color: transparent; */
  cursor: pointer;
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
  border-color: #fff;
  border-style: none;
  cursor: pointer;
`;
