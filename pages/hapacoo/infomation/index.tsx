import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { isWhoState } from '../../../src/commons/stores';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  margin: 150px;
`;
const InfoDiv = styled.div`
  display: flex;
`;
const InfoP = styled.p`
  margin: 3px;
  font-size: 20px;
  font-weight: 400;
`;
const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
`;
const InfoImg = styled.img`
  width: 300px;
  height: 300px;
`;

export default function HPCInfoPage() {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HAPACOO');
  return (
    <>
      <Wrapper>
        <h2>ARTWORK</h2>
        <InfoDiv>
          <InfoDetail>
            <a
              href="https://poclanos.com/album/tales/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InfoImg src="/image/hapacoo/artwork/kennytheking-tales.jpg" />
            </a>
            <h3>tales</h3>
            <InfoP>Musician: kennytheking</InfoP>
            <InfoP>Release: 22. 02. 2023</InfoP>
          </InfoDetail>
          <InfoDetail>
            <a
              href="https://poclanos.com/album/farewell-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InfoImg src="/image/hapacoo/artwork/farewell_cover.jpg" />
            </a>
            <h3>farewell</h3>
            <InfoP>Musician: kennytheking</InfoP>
            <InfoP>Release: 29. 01. 2023</InfoP>
          </InfoDetail>
        </InfoDiv>
      </Wrapper>
    </>
  );
}
