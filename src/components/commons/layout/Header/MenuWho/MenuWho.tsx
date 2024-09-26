import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isWhoState } from '../../../../../commons/stores';
import { MainWhoButton, SubWhoButton, WrapperWho } from './MenuWhoStyle';
import { useRouter } from 'next/router';
import MenuWhoImage from '../../../../../image/MenuWho.png';
const MenuWhoButton: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [changeWho, setChangeWho] = useRecoilState(isWhoState);

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickSubButton = (isWho: string) => {
    setChangeWho(isWho);
    setIsOpen(false);
    router.push(`/${isWho}`);
    console.log(isWho);
  };

  return (
    <WrapperWho>
      <MainWhoButton src="/image/icons/MenuWhoIcon.png" onClick={onClickOpen} />
      <SubWhoButton
        className={isOpen ? 'visible' : ''}
        onClick={() => onClickSubButton('HA_PAK')}
      >
        HA_PAK
      </SubWhoButton>
      <SubWhoButton
        className={isOpen ? 'visible' : ''}
        onClick={() => onClickSubButton('HAPACOO')}
      >
        HAPACOO
      </SubWhoButton>
      <SubWhoButton
        className={isOpen ? 'visible' : ''}
        onClick={() => onClickSubButton('HAWHY')}
      >
        HAWHY
      </SubWhoButton>
    </WrapperWho>
  );
};

export default MenuWhoButton;
