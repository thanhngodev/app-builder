import { GridsterItem as GridItem } from 'angular-gridster2';

export interface IComponent {
  id: string;
  componentRef: string;
}

export interface IDataBuilder {
  isShowHeader: Boolean;
  isShowFooter: Boolean;
  dataBuilder: GridItem[];
}

export interface IMenuDataBuilder {
  label: string;
  code: string;
  icon: string;
  component: IComponentMenuData;
  [key: string]: any;
}

export interface IComponentMenuData {
  cols: number,
  rows: number,
  class: string,
  [key: string]: any;
}
