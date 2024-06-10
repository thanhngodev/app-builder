import { Type } from '@angular/core';
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
  layout: IComponentMenuData;
  component: Type<any>;
  class: string;
  [key: string]: any;
}

export interface IComponentMenuData {
  cols: number;
  rows: number;
  [key: string]: any;
}

export interface IHeadingOption {
  label: string;
  value: string
  [key: string]: any;
}
