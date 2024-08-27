import LayoutNavigation from './navigation';
import LayoutHeader from './Header/layoutHeader';
import { LayoutBody, LayoutBodyWrapper, LayoutWrapper } from './indexStyle';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <LayoutWrapper>
      <LayoutBodyWrapper>
        <LayoutBody>{props.children}</LayoutBody>
        <LayoutHeader />
      </LayoutBodyWrapper>
      <LayoutNavigation />
    </LayoutWrapper>
  );
}
