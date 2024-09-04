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

  return (
    <FooterWrapper>
      <FooterDiv>
        Email me ㅡ
        <FooterA href={`mailto:${getEmailAddress()}`}>
          {getEmailAddress()}
        </FooterA>
      </FooterDiv>
    </FooterWrapper>
  );
};

export default LayoutFooter;
