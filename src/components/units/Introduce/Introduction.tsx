import { useMemo } from 'react';
import { EDUCATION_LIST } from './IntroContents/Educations';
import {
  EXPOSITION_GROUP_LIST,
  EXPOSITION_SOLO_LIST,
} from './IntroContents/Expositions';
import type { ListItemType } from './ContentsTypes';
import { WORK_EXPERIENCES_LIST } from './IntroContents/WorkExperiences';
import { PROJECT_LIST } from './IntroContents/Projects';
import { ART_WORK_LIST } from './IntroContents/ArtWorks';
import { useRecoilValue } from 'recoil';
import { isWhoState } from '../../../commons/stores';

export default function IntroductionPage(): JSX.Element {
  const isWho = useRecoilValue(isWhoState);

  const listToRender = useMemo<ListItemType[]>(() => {
    if (isWho === 'HP') {
      return [
        ...EDUCATION_LIST,
        ...EXPOSITION_GROUP_LIST,
        ...EXPOSITION_SOLO_LIST,
      ];
    } else if (isWho === 'HPC') {
      return [...EDUCATION_LIST, ...ART_WORK_LIST];
    } else if (isWho === 'HW') {
      return [...EDUCATION_LIST, ...WORK_EXPERIENCES_LIST, ...PROJECT_LIST];
    }
    return [];
  }, [isWho]);

  return (
    <div>
      <h1>Introduction</h1>
      {listToRender.map((el, index) => (
        <div key={index}>
          <span style={{ margin: '3px' }}>{el.date}</span>
          <span style={{ margin: '3px' }}>{el.title}</span>
          <span style={{ margin: '3px' }}>{el.detail}</span>
        </div>
      ))}
    </div>
  );
}
