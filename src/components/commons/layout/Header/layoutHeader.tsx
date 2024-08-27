import { CharacterButton, HeaderWrapper, SiteLogo } from './layoutHeaderStyle';

export default function LayoutHeader(): JSX.Element {
  return (
    <>
      <HeaderWrapper>
        <SiteLogo>Ha PAK</SiteLogo>
        <CharacterButton>ME</CharacterButton>
      </HeaderWrapper>
    </>
  );
}
