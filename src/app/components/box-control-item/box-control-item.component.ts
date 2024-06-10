import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { DRAG_HANDLE_CLASS } from '../../constant/builder.constant';

@Component({
  selector: 'builder-box-control-item',
  templateUrl: './box-control-item.component.html'
})
export class BoxControlItemComponent implements OnInit {
  @Input() id: string = '';
  
  dragHandleClass = DRAG_HANDLE_CLASS;
  configIcon = {
    class: 'icon-box-control',
    style: { width: '16px', height: '16px' },
  };

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  
  deleteItem() {
    this.layoutService.deleteItem(this.id);
  }

}
