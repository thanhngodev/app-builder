import { Component, OnInit } from '@angular/core';
import { MENUS } from '../../constant/builder.constant';
import { LayoutService } from '../../services/layout.service';
import {
  GridsterItem as GridItem,
} from 'angular-gridster2';
import { IMenuDataBuilder } from '../../interfaces/layout.interface';

@Component({
  selector: 'builder-sidebar-builder',
  templateUrl: './sidebar-builder.component.html',
  styleUrls: ['./sidebar-builder.component.scss'],
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

  dropItem(item: string) {
    this.layoutService.dropItem(item);
  }

  dragStartHandler(event: DragEvent, item: IMenuDataBuilder): void {
    event.dataTransfer?.setData('data-item', JSON.stringify(item) );
  }
}
