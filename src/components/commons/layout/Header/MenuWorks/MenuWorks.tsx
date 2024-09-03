import { useRecoilValue } from 'recoil';
import { IMenuWorksProps, NavigationType } from '../../../../../commons/types';
import { isWhoState } from '../../../../../commons/stores';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import { useMemo } from 'react';
import { NAVIGATION_HAPAK } from '../../../../../../pages/hapak';
import { NAVIGATION_HAPACOO } from '../../../../../../pages/hapacoo';
import { NAVIGATION_HAWHY } from '../../../../../../pages/hawhy';
import { WrapperMenu } from './MenuWorksStyle';

const MenuWorks: React.FC<IMenuWorksProps> = ({ open, isAdmin = false }) => {
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
