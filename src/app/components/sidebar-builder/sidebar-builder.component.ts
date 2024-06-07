import { Component, OnInit } from '@angular/core';
import { MENUS } from '../../constant/builder.constant';
import { LayoutService } from '../../services/layout.service';
import {
  GridsterItem as GridItem,
} from 'angular-gridster2';

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

  dragStartHandler($e: DragEvent, code: string) {
    if ($e.dataTransfer) {
      $e.dataTransfer.setData('text/plain', 'Drag Me Button');
      $e.dataTransfer.dropEffect = 'copy';
      // $e['component'] = code;
      // const itemData: GridItem = {
      //   cols: 1,
      //   rows: 2,
      //   x: 1,
      //   y: 2
      // }
      // this.layoutService.emptyCellDrop($e, itemData);
    }
  }
}
