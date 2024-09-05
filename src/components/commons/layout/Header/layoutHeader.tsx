import { useRef, useState } from 'react';
import {
  CharacterButton,
  HeaderWrapper,
  HeaderButton,
  HeaderDiv,
} from './layoutHeaderStyle';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import MenuWorks from './MenuWorks/MenuWorks';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { isWhoState } from '../../../../commons/stores';
import MenuWhoButton from './MenuWho/MenuWho';

const LayoutHeader = () => {
  const router = useRouter();
  const isWho = useRecoilValue(isWhoState);

  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  const onClickMoveToFront = () => {
    router.push(`/${isWho}`);
  };

  const onClickMoveToInfo = () => {
    router.push(`/${isWho}/infomation`);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderDiv>
          <HeaderButton onClick={onClickMoveToFront}>{isWho}</HeaderButton>
        </HeaderDiv>
        <HeaderDiv ref={node}>
          <HeaderButton onClick={onClickMoveToInfo}>INFO</HeaderButton>
          <HeaderButton open={open} onClick={() => setOpen(!open)}>
            WORKS
          </HeaderButton>
          <MenuWorks open={open} setOpen={setOpen} />
          <MenuWhoButton />
        </HeaderDiv>
      </HeaderWrapper>
    </>
  );
};

export default LayoutHeader;
