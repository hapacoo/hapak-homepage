//프롭스 드릴링

import React, { useMemo } from 'react';
import { WrapperMenu } from './MenuStyle';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import { NAVIGATION_HAPAK } from '../../../../../../pages/hapak';
import { useRecoilValue } from 'recoil';
import { isWhoState } from '../../../../../commons/stores';
import { NAVIGATION_HAPACOO } from '../../../../../../pages/hapacoo';
import { NAVIGATION_HAWHY } from '../../../../../../pages/hawhy';
import { INaviMenuProps, NavigationType } from '../../../../../commons/types';

const NavigationMenu: React.FC<INaviMenuProps> = ({
  open,
  isAdmin = false,
}) => {
  const isWho = useRecoilValue(isWhoState);

  const { onClickMoveToPage } = useMoveToPage();

  const menus = useMemo<NavigationType[]>(() => {
    if (isWho === 'HP') {
      return NAVIGATION_HAPAK;
    } else if (isWho === 'HPC') {
      return NAVIGATION_HAPACOO;
    } else if (isWho === 'HW') {
      return NAVIGATION_HAWHY;
    }
    return [];
  }, [isWho]);

  return (
    <WrapperMenu open={open}>
      {menus.map((el) => (
        <a key={el.name} onClick={onClickMoveToPage(el.page)}>
          {el.name}
        </a>
      ))}
    </WrapperMenu>
  );
};

export default NavigationMenu;
