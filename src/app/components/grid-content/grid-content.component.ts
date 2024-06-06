import { Component, OnInit } from '@angular/core';
import { DRAG_HANDLE_CLASS } from '../../constant/constant';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html'
})
export class GridContentComponent implements OnInit {
  dragHandleClass: string = DRAG_HANDLE_CLASS;
  
  constructor() { }

  ngOnInit() {
  }

}
