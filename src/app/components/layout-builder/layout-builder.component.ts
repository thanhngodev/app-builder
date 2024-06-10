import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { IDataBuilder } from '../../interfaces/layout.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'builder-layout-builder',
  templateUrl: './layout-builder.component.html',
  animations: [
    trigger('animation-builder', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('.32s', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('.32s', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class LayoutBuilderComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  get dataBuilder() {
    return this.layoutService?.dataBuilder || [];
  }

  get isShowFooter() {
    return this.layoutService?.isShowFooter;
  }

  get isShowHeader() {
    return this.layoutService?.isShowHeader;
  }

  toggleHeaderVisibility() {
    this.layoutService.setShowHeader(!this.isShowHeader);
  }

  toggleFooterVisibility() {
    this.layoutService.setShowFooter(!this.isShowFooter);
  }

  submit() {
    console.log(this.layoutService.dataBuilderLayout);
  }
}
