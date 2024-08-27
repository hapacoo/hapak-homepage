import { useRecoilState } from 'recoil';
import FrontIndex from '../../src/components/units/Front/FrontIndex';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAPAK: NavigationType[] = [
  { name: 'INTRODUCE', page: '/hapak/HP-introduction' },
  { name: 'INSTALLATION', page: '/hapak/HP-installation' },
  { name: 'CERAMIC', page: '/hapak/HP-ceramic' },
  { name: 'VIDEO', page: '/hapak/HP-video' },
  { name: 'WEB-ART', page: '/hapak/HP-webart' },
  { name: 'CONTACT', page: '/hapak/HP-contact' },
];

export default function HaPakPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HP');
  return <FrontIndex />;
}
