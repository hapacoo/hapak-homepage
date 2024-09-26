import styled from '@emotion/styled';

export const WrapperWho = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  height: auto;
`;

export const MainWhoButton = styled.img`
  width: 60px;
  height: 50px;
  margin-top: 5px;
  border-radius: 40%;
  border: none;
  background-color: transparent;
  color: #000;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  transition: transform 0.3s;
`;

export const SubWhoButton = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 15px;
  border-radius: 40%;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  -webkit-text-stroke: black 1px;

  cursor: pointer;
  transition:
    transform 0.3s,
    opacity 0.3s;
  opacity: 0;
  transform: scale(0);

  &.visible {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    font-size: 20px;
  }
`;
