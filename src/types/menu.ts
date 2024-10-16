export type Menu = {
  id: number;
  title: string;
  index?: number;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
