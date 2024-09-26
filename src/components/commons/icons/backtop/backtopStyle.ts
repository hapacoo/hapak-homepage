import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  padding: 4px;
  bottom: 5%;
  right: 5%;
  border: solid 2px;
  font-size: 14px;
  font-weight: 900;

  transition:
    background-color 0.3s,
    opacity 0.5s,
    visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 10;

  cursor: pointer;

  &:hover {
    background-color: #a6f27d;
  }

  &:active {
    background-color: #fff;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 500px) {
    margin: 30px;
  }
`;
