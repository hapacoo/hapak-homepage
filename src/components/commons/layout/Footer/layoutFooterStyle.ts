import styled from '@emotion/styled';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  padding: 15px;
  margin-top: 50px;
  background-color: transparent;
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: transparent;
  font-size: 2.2rem;
  font-weight: 400;
`;
export const FooterA = styled.a`
  display: inline-block;
  padding: 0;
  background-color: transparent;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  -webkit-text-stroke: black 1.5px;
  text-decoration: none;

  cursor: pointer;

  :hover {
    color: #000;
    text-shadow:
      0px 0px 10px #a6f27d,
      0px 0px 15px #a6f27d;
  }
`;
