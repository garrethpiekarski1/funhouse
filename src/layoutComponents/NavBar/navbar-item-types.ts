export type NavLinkProperties = {
  routePath: string;
  text: string;
  isActive?: boolean;
  disabled?: boolean;
};

export type DropDownItemConfig = {
  type: string;
  routePath?: string;
  text?: string;
  disabled?: boolean;
  isActive?: boolean;
};

export type DropDownMenuConfig = {
  text: string;
  items: DropDownItemConfig[];
  activeMenu: boolean;
  menuToggleHandler: () => void;
};
