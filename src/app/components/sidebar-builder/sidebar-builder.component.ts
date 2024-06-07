import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import {
  GridsterConfig as GridConfig,
  GridsterItem as GridItem,
} from 'angular-gridster2';
import { IComponent } from '../../interfaces/layout.interface';
import { MENUS } from '../../constant/builder.constant';

@Component({
  selector: 'builder-sidebar-builder',
  templateUrl: './sidebar-builder.component.html',
  styleUrls: ['./sidebar-builder.component.scss']
})
export class SidebarBuilderComponent implements OnInit {
  menus = MENUS;
  configIcon = {
    class: 'icon-menu-builder',
    style: { width: '24px', height: '24px' },
  };

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    console.log(this.menus);
  }

  get options(): GridConfig {
    return this.layoutService.options;
  }

  get layout(): GridItem[] {
    return this.layoutService.dataBuilder;
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

  dragStartHandler($e: DragEvent) {
    console.log($e);
    if ($e.dataTransfer) {
      $e.dataTransfer.setData('text/plain', 'Drag Me Button');
      $e.dataTransfer.dropEffect = 'copy';
    }
  }
}
