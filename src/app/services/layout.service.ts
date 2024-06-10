import { Injectable } from '@angular/core';
import {
  GridsterConfig as GridConfig,
  GridsterItem as GridItem,
} from 'angular-gridster2';
import { GRID_CONFIG_OPTIONS } from '../constant/builder.constant';
import { IComponent, IDataBuilder, IMenuDataBuilder } from '../interfaces/layout.interface';
import { UUID } from 'angular2-uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public options: GridConfig = {
    ...GRID_CONFIG_OPTIONS,
    emptyCellDropCallback: this.emptyCellDrop.bind(this), // Bind the callback method
  };;
  public components: IComponent[] = [];
  private dataBuilderLayout$!: BehaviorSubject<IDataBuilder>;
  dropId: string = '';

  constructor() {
    const initialDataBuilderLayout: IDataBuilder = {
      isShowFooter: true,
      isShowHeader: true,
      dataBuilder: [],
    };
    
    this.dataBuilderLayout$ = new BehaviorSubject<IDataBuilder>(initialDataBuilderLayout);
  }

  get dataBuilderLayout() {
    return this.dataBuilderLayout$.value;
  }

  get dataBuilder() {
    return this.dataBuilderLayout$.value['dataBuilder'];
  }

  get isShowFooter() {
    return this.dataBuilderLayout$.value['isShowFooter'];
  }

  get isShowHeader() {
    return this.dataBuilderLayout$.value['isShowHeader'];
  }

  setShowHeader(value: boolean): void {
    const currentLayout = this.dataBuilderLayout$.getValue();
    currentLayout.isShowHeader = value;
    this.dataBuilderLayout$.next(currentLayout);
  }

  setShowFooter(value: boolean): void {
    const currentLayout = this.dataBuilderLayout$.getValue();
    currentLayout.isShowFooter = value;
    this.dataBuilderLayout$.next(currentLayout);
  }


  addItem(cols: number, rows: number, x: number, y: number, item?: IMenuDataBuilder): void {
    const newItem: GridItem = {
      cols,
      id: UUID.UUID(),
      rows,
      x,
      y,
      maxItemCols: 12,
    };

    if(item) {
      newItem['data'] = item;
    }
    const currentLayout = this.dataBuilderLayout$.getValue();
    currentLayout.dataBuilder.push(newItem);
    this.dataBuilderLayout$.next(currentLayout);
  }

  deleteItem(id: string): void {
    this.removeItemFromLayout(id);
    this.removeItemFromComponents(id);
  }

  private removeItemFromLayout(id: string): void {
    if (this.dataBuilder && this.dataBuilder.length > 0) {
      const currentLayout = this.dataBuilderLayout$.getValue();
      const itemIndex = currentLayout.dataBuilder.findIndex(
        (gridItem: GridItem) => gridItem['id'] === id
      );
  
      if (itemIndex !== -1) {
        currentLayout.dataBuilder.splice(itemIndex, 1);
        this.dataBuilderLayout$.next(currentLayout);
      }
    }
  }

  private removeItemFromComponents(id: string): void {
    if (this.components && this.components.length > 0) {
      const componentIndex = this.components.findIndex(
        (component: IComponent) => component['id'] === id
      );

      if (componentIndex !== -1) {
        this.components.splice(componentIndex, 1);
      }
    }
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
  }

  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(
      (c) => c.id === this.dropId
    ) as IComponent;

    const updateIdx: number = comp
      ? components.indexOf(comp)
      : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId,
    };
    this.components = Object.assign([], components, {
      [updateIdx]: componentItem,
    });
  }

  emptyCellDrop(event: DragEvent, item: GridItem): void {
    const itemDataString: string = event.dataTransfer?.getData('data-item') || '';
    const itemData: IMenuDataBuilder = JSON.parse(itemDataString);
    this.addItem(itemData.component.cols || 1, itemData.component.rows || 1, item.x, item.y, itemData);
  }
 
  getComponentRef(id: string): string {
    const component = this.components.find(
      (component: IComponent) => component.id === id
    );
    return component ? component.componentRef : '';
  }
}
