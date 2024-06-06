import { Injectable } from '@angular/core';
import {
  GridsterConfig as GridConfig,
  GridsterItem as GridItem,
} from 'angular-gridster2';
import { GRID_CONFIG_OPTIONS } from '../constant/constant';
import { IComponent } from '../interfaces/layout.interface';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public options: GridConfig = GRID_CONFIG_OPTIONS;
  public layout: GridItem[] = [];
  public components: IComponent[] = [];
  dropId: string = '';

  constructor() {}

  addItem(): void {
    const newItem: GridItem = {
      cols: 6,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0,
      maxItemCols: 12
    };
    this.layout.push(newItem);
  }

  deleteItem(id: string): void {
    this.removeItemFromLayout(id);
    this.removeItemFromComponents(id);
  }

  private removeItemFromLayout(id: string): void {
    if (this.layout && this.layout.length > 0) {
      const itemIndex = this.layout.findIndex(
        (gridItem: GridItem) => gridItem['id'] === id
      );

      if (itemIndex !== -1) {
        this.layout.splice(itemIndex, 1);
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

  getComponentRef(id: string): string {
    const component = this.components.find(
      (component: IComponent) => component.id === id
    );
    return component ? component.componentRef : '';
  }
}
