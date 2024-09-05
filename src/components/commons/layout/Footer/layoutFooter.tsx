import { useRecoilValue } from 'recoil';
import { FooterA, FooterDiv, FooterWrapper } from './layoutFooterStyle';
import { isWhoState } from '../../../../commons/stores';

const LayoutFooter = () => {
  const isWho = useRecoilValue(isWhoState);

  const getEmailAddress = () => {
    switch (isWho) {
      case 'HA_PAK':
        return 'haaaapaaaak@gmail.com';
      case 'HAPACOO':
        return 'vivahapacoo@gmail.com';
      case 'HAWHY':
        return 'hawhy00@gmail.com';
    }
  };

  const getInstaAddress = () => {
    switch (isWho) {
      case 'HA_PAK':
        return 'hawhy__';
      case 'HAPACOO':
        return 'hapacoo';
      case 'HAWHY':
        return 'hapacoo.pt';
    }
  };

  return (
    <FooterWrapper>
      <FooterDiv>
        Email me ㅡ
        <FooterA href={`mailto:${getEmailAddress()}`}>
          {getEmailAddress()}
        </FooterA>
      </FooterDiv>

      <FooterA
        href={`https://www.instagram.com/${getInstaAddress()}/`}
        target="_blank"
        rel="noopener noreferrer"
      >
        INSTAGRAM
      </FooterA>
    </FooterWrapper>
  );
};

export default LayoutFooter;
