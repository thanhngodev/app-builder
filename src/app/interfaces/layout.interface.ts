import {
  GridsterItem as GridItem,
} from 'angular-gridster2';

export interface IComponent {
  id: string;
  componentRef: string;
}


export interface IDataBuilder {
  isShowHeader: Boolean;
  isShowFooter: Boolean;
  dataBuilder: GridItem[];
}
