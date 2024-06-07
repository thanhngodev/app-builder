import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { IDataBuilder } from '../../interfaces/layout.interface';

@Component({
  selector: 'builder-layout-builder',
  templateUrl: './layout-builder.component.html'
})
export class LayoutBuilderComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

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
