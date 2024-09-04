import { useRecoilValue } from 'recoil';
import { IMenuWorksProps, NavigationType } from '../../../../../commons/types';
import { isWhoState } from '../../../../../commons/stores';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import { useMemo } from 'react';
import { NAVIGATION_HAPAK } from '../../../../../../pages/HA_PAK';
import { NAVIGATION_HAPACOO } from '../../../../../../pages/HAPACOO';
import { NAVIGATION_HAWHY } from '../../../../../../pages/HAWHY';
import { WrapperMenu } from './MenuWorksStyle';

const MenuWorks: React.FC<IMenuWorksProps> = ({ open, isAdmin = false }) => {
  const isWho = useRecoilValue(isWhoState);

  const { onClickMoveToPage } = useMoveToPage();

  const menus = useMemo<NavigationType[]>(() => {
    if (isWho === 'HA_PAK') {
      return NAVIGATION_HAPAK;
    } else if (isWho === 'HAPACOO') {
      return NAVIGATION_HAPACOO;
    } else if (isWho === 'HAWHY') {
      return NAVIGATION_HAWHY;
    }
    return [];
  }, [isWho]);

  return (
    <WrapperMenu open={open} isWho={isWho}>
      {menus.map((el) => (
        <a key={el.name} onClick={onClickMoveToPage(el.page)}>
          {el.name}
        </a>
      ))}
    </WrapperMenu>
  );
};

export default MenuWorks;
