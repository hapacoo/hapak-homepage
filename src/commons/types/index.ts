import Masonry from 'react-masonry-css';

export interface IMenuWorksProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export interface IWrapperMenuProps {
  open: boolean;
  isWho: string;
}

export type NavigationType = {
  name: string;
  page: string;
};

export interface ILayoutProps {
  children: React.ReactNode;
}

// export interface IHeaderProps {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

export interface IMenuWorksStyleProps {
  children: string;
  open?: boolean;
}

export interface IContentStyleProps {
  isVisible: boolean;
  delay?: number;
}

export interface IContentProps {
  title: string;
  content: string;
  images: string[];
}

export type ListItemType = {
  date: string;
  title: string;
  detail: string;
};
export interface IMasonryItem {
  imageLocation: string;
}
export interface IMasonryContainerProps {
  items: IMasonryItem[];
}

export interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  username: string;
  caption?: string;
  children?: {
    data: Array<{
      id: string;
      media_type: 'IMAGE' | 'VIDEO';
      media_url: string;
    }>;
  };
}
