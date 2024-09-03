import { useRef, useState } from 'react';
import {
  CharacterButton,
  HeaderWrapper,
  HeaderButton,
  HeaderDiv,
} from './layoutHeaderStyle';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import MenuWorks from './MenuWorks/MenuWorks';

const LayoutHeader = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <HeaderWrapper>
        <HeaderDiv>
          <HeaderButton>HA PAK</HeaderButton>
        </HeaderDiv>
        <HeaderDiv ref={node}>
          <HeaderButton>INFO</HeaderButton>
          <HeaderButton open={open} onClick={() => setOpen(!open)}>
            WORKS
          </HeaderButton>
          <MenuWorks open={open} />
          <CharacterButton>ME</CharacterButton>
        </HeaderDiv>
      </HeaderWrapper>
    </>
  );
};

export default LayoutHeader;
