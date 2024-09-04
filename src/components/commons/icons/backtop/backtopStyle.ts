import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  background-color: #fff;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition:
    background-color 0.3s,
    opacity 0.5s,
    visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  border: none;
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
export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  font-size: 2em;
  line-height: 50px;
`;

export const ArrowUpIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #000;
  background-color: transparent;
`;
