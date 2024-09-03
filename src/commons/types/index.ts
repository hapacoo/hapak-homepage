export interface IMenuWorksProps {
  open: boolean;
  isWho?: string;
  isAdmin?: boolean;
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

export interface IStyledMenuWorksProps {
  children: string;
  open?: boolean;
}
