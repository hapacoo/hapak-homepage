import styled from '@emotion/styled';

export const WrapperWho = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  height: 100vh;
`;

export const MainWhoButton = styled.button`
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

  &:hover {
    background-color: #000;
    color: #fff;
    box-shadow:
      0px 0px 10px #a6f27d,
      0px 0px 15px #a6f27d;
  }
`;

export const SubWhoButton = styled.button`
  width: 60px;
  height: 50px;
  margin-top: 10px;
  border-radius: 40%;
  border: none;
  background-color: #a6f27d;
  color: #000;
  font-size: 10px;
  font-weight: 600;
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
    background-color: #000;
    color: #fff;
    box-shadow:
      0px 0px 10px #a6f27d,
      0px 0px 15px #a6f27d;
  }
`;
