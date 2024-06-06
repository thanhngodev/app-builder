import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentRef,
  EnvironmentInjector,
  Type
} from '@angular/core';
import { Example1Component } from '../components/example1/example1.component';
import { Example2Component } from '../components/example2/example2.component';

const componentsData: { [key: string]: Type<any> } = {
  example1: Example1Component,
  example2: Example2Component
};

@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective implements OnChanges {
  @Input() componentRef: string = '';
  component: ComponentRef<any> | null = null;
  
  constructor(
    private container: ViewContainerRef,
    private injector: EnvironmentInjector
  ) { }

  ngOnChanges(): void {
    this.container.clear();
    const component = componentsData[this.componentRef];

    if (component) {
      this.component = this.container.createComponent(component, {
        environmentInjector: this.injector
      });
    }
  }
}
