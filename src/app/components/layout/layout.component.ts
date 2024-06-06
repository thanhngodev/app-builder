import { Component, OnInit } from '@angular/core';
import {  GridsterConfig as GridConfig, GridsterItem as GridItem } from 'angular-gridster2';
import { LayoutService } from '../../services/layout.service';
import { IComponent } from '../../interfaces/layout.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  get options(): GridConfig {
    return this.layoutService.options;
  }

  get layout(): GridItem[] {
    return this.layoutService.layout;
  }
  
  get components(): IComponent[] {
    return this.layoutService.components;
  }

  deleteItem(item: any) {
    this.layoutService.deleteItem(item['id']);
  }

  addItem() {
    this.layoutService.addItem();
  }

  dropItem(item: string) {
    this.layoutService.dropItem(item);
  }

  setDropId(id: string) {
    this.layoutService.setDropId(id);
  }

  getComponentRef(id: string) {
    return this.layoutService.getComponentRef(id);
  }
}
