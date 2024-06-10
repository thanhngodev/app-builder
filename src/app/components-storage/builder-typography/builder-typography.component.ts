import { Component, OnInit } from '@angular/core';
import { OPTION_HEADING } from '../../constant/builder.constant';

@Component({
  selector: 'app-builder-typography',
  templateUrl: './builder-typography.component.html',
  styleUrls: ['./builder-typography.component.scss']
})
export class BuilderTypographyComponent implements OnInit {
  optionHeadings = OPTION_HEADING;

  constructor() { }

  ngOnInit() {
  }

}
