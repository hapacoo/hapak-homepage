import { useRef, useState } from 'react';
import BurgerIcon from './burger/Burger';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import NavigationMenu from './menu/Menu';
import styled from '@emotion/styled';

const NavigationWrapper = styled.div`
  display: flex;
  width: 90px;
  height: 100vh;
  background-color: transparent;
`;

export default function LayoutNavigation(): JSX.Element {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <NavigationWrapper ref={node}>
        <BurgerIcon open={open} setOpen={setOpen} />
        <NavigationMenu open={open} />
      </NavigationWrapper>
    </>
  );
}
