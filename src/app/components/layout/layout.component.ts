import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  GridsterConfig as GridConfig, GridsterItem as GridItem } from 'angular-gridster2';
import { LayoutService } from '../../services/layout.service';
import { IComponent } from '../../interfaces/layout.interface';

@Component({
  selector: 'builder-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  get options(): GridConfig {
    return this.layoutService.options;
  }

  get layout(): GridItem[] {
    return this.layoutService.dataBuilder;
  }

  get isShowFooter() {
    return this.layoutService?.isShowFooter;
  }

  get isShowHeader() {
    return this.layoutService?.isShowHeader;
  }
  
  get components(): IComponent[] {
    return this.layoutService.components;
  }

  deleteItem(item: any) {
    this.layoutService.deleteItem(item['id']);
  }

  // addItem() {
  //   this.layoutService.addItem();
  // }

  // dropItem(item: string) {
  //   this.layoutService.dropItem(item);
  // }

  setDropId(id: string) {
    this.layoutService.setDropId(id);
  }

  getComponentRef(id: string) {
    return this.layoutService.getComponentRef(id);
  }
}
