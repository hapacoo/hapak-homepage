import { LayoutBody, LayoutBodyWrapper, LayoutWrapper } from './indexStyle';
import React from 'react';
import LayoutHeader from './Header/layoutHeader';
import { ILayoutProps } from '../../../commons/types';

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <LayoutWrapper>
      <LayoutBodyWrapper>
        <LayoutBody>{props.children}</LayoutBody>
      </LayoutBodyWrapper>
      <LayoutHeader />
    </LayoutWrapper>
  );
}
