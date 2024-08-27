import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAWHY: NavigationType[] = [
  { name: 'INTRODUCE', page: '/hawhy/HW-introduction' },
  { name: 'INSTALLATION', page: '/hawhy/HW-skill' },
  { name: 'CERAMIC', page: '/hawhy/HW-project' },
  { name: 'VIDEO', page: '/hawhy/HW-web' },
  { name: 'WEB-ART', page: '/hawhy/HW-webGL' },
  { name: 'CONTACT', page: '/hawhy/HW-contact' },
];

export default function HawhyPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HW');

  return;
}
