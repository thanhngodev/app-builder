import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentRef,
  EnvironmentInjector,
  Type
} from '@angular/core';
import { BuilderBreadcrumbComponent } from '../components-storage/builder-breadcrumb/builder-breadcrumb.component';
import { BuilderFormComponent } from '../components-storage/builder-form/builder-form.component';
import { BuilderCollectionsComponent } from '../components-storage/builder-collections/builder-collections.component';
import { BuilderContentEditorComponent } from '../components-storage/builder-content-editor/builder-content-editor.component';
import { BuilderAssetsComponent } from '../components-storage/builder-assets/builder-assets.component';
import { BuilderBannerComponent } from '../components-storage/builder-banner/builder-banner.component';
import { BuilderTypographyComponent } from '../components-storage/builder-typography/builder-typography.component';

const componentsData: { [key: string]: Type<any> } = {
  TYPOGRAPHY_BUILDER: BuilderTypographyComponent,
  BANNER_BUILDER: BuilderBannerComponent,
  ASSETS_BUILDER: BuilderAssetsComponent,
  CONTENT_EDITOR_BUILDER: BuilderContentEditorComponent,
  COLLECTIONS_BUILDER: BuilderCollectionsComponent,
  FORM_BUILDER: BuilderFormComponent,
  BREADCRUMB_BUILDER: BuilderBreadcrumbComponent
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
