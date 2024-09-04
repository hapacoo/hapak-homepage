import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAWHY: NavigationType[] = [
  { name: 'INTRODUCE', page: '/HAWHY/infomation' },
  // { name: 'INSTALLATION', page: '/HAWHY/HW-skill' },
  { name: 'CERAMIC', page: '/HAWHY/project' },
  { name: 'VIDEO', page: '/HAWHY/web' },
  { name: 'WEB-ART', page: '/HAWHY/webGL' },
  { name: 'CONTACT', page: '/HAWHY/contact' },
];

export default function HawhyPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HAWHY');
  return;
}
