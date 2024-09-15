import { useRecoilState } from 'recoil';
import { isWhoState } from '../../src/commons/stores';
import { NavigationType } from '../../src/commons/types';

export const NAVIGATION_HAWHY: NavigationType[] = [
  { name: 'PROJECT', page: '/HAWHY/project' },
  { name: 'WEBSITE', page: '/HAWHY/website' },
  { name: 'WEB-GL', page: '/HAWHY/webGL' },
];

export default function HawhyPage(): JSX.Element {
  const [isWho, setIsWho] = useRecoilState(isWhoState);
  setIsWho('HAWHY');
  return <></>;
}
