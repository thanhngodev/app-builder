import { GridsterConfig as GridConfig } from 'angular-gridster2';
import { IHeadingOption, IMenuDataBuilder } from '../interfaces/layout.interface';
import { animate, style, transition, trigger } from '@angular/animations';
import { BuilderTypographyComponent } from '../components-storage/builder-typography/builder-typography.component';
import { BuilderBannerComponent } from '../components-storage/builder-banner/builder-banner.component';
import { BuilderAssetsComponent } from '../components-storage/builder-assets/builder-assets.component';
import { BuilderContentEditorComponent } from '../components-storage/builder-content-editor/builder-content-editor.component';
import { BuilderCollectionsComponent } from '../components-storage/builder-collections/builder-collections.component';
import { BuilderFormComponent } from '../components-storage/builder-form/builder-form.component';
import { BuilderBreadcrumbComponent } from '../components-storage/builder-breadcrumb/builder-breadcrumb.component';
import { Type } from '@angular/core';

export const DRAG_HANDLE_CLASS = 'drag-handler-layout';

export const GRID_CONFIG_OPTIONS: GridConfig = {
  draggable: {
    enabled: true,
    ignoreContent: true,
    dragHandleClass: DRAG_HANDLE_CLASS,
  },
  pushItems: true,
  resizable: {
    enabled: true,
  },
  displayGrid: 'onDrag&Resize',
  swapWhileDragging: true,
  swap: true,
  minCols: 12,
  maxCols: 12,
  minRows: 6,

  disableScrollVertical: false,
  disableScrollHorizontal: false,

  // EmptyCell
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: true,
  enableEmptyCellDrop: true,
  enableEmptyCellDrag: true,
  enableOccupiedCellDrop: false,

  // call back
  emptyCellDropCallback: undefined,
};

export const MENUS: IMenuDataBuilder[] = [
  {
    label: 'Typography',
    code: 'TYPOGRAPHY_BUILDER',
    icon: 'typography',
    class: 'typography_builder',
    component: BuilderTypographyComponent,
    layout: {
      cols: 10,
      rows: 1,
    },
  },
  {
    label: 'Banner',
    code: 'BANNER_BUILDER',
    icon: 'banner',
    class: 'banner_builder box_border',
    component: BuilderBannerComponent,
    layout: {
      cols: 12,
      rows: 1,
    },
  },
  {
    label: 'Assets',
    code: 'ASSETS_BUILDER',
    icon: 'assets',
    class: 'assets_builder',
    component: BuilderAssetsComponent,
    layout: {
      cols: 10,
      rows: 1,
    },
  },
  {
    label: 'Content Editor',
    code: 'CONTENT_EDITOR_BUILDER',
    icon: 'content_editor',
    class: 'content_editor_builder box_border',
    component: BuilderContentEditorComponent,
    layout: {
      cols: 10,
      rows: 1,
    },
  },
  {
    label: 'Collections',
    code: 'COLLECTIONS_BUILDER',
    icon: 'collections',
    class: 'collections_builder box_border',
    component: BuilderCollectionsComponent,
    layout: {
      cols: 10,
      rows: 1,
    },
  },
  {
    label: 'Form',
    code: 'FORM_BUILDER',
    icon: 'form',
    class: 'form_builder',
    component: BuilderFormComponent,
    layout: {
      cols: 12,
      rows: 1,
    },
  },
  {
    label: 'Breadcrumb',
    code: 'BREADCRUMB_BUILDER',
    icon: 'breadcrumb',
    class: 'breadcrumb_builder',
    component: BuilderBreadcrumbComponent,
    layout: {
      cols: 10,
      rows: 1,
    },
  },
];

export const ANIMATIONS_LAYOUT_BUILDER = [
  trigger('animation-builder', [
    transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('.23s', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)', opacity: 1 }),
      animate('.23s', style({ transform: 'translateX(100%)', opacity: 0 })),
    ]),
  ]),
];


export const OPTION_HEADING: IHeadingOption[] = [
  {
    label: "Heading 1",
    value: "h1",
  },
  {
    label: "Heading 2",
    value: "h2",
  },
  {
    label: "Heading 3",
    value: "h3",
  },
  {
    label: "Heading 4",
    value: "h4",
  },
  {
    label: "Heading 5",
    value: "h5",
  },
  {
    label: "Heading 6",
    value: "h6",
  }
]


export const COMPONENTS_DATA: { [key: string]: Type<any> } = {
  TYPOGRAPHY_BUILDER: BuilderTypographyComponent,
  BANNER_BUILDER: BuilderBannerComponent,
  ASSETS_BUILDER: BuilderAssetsComponent,
  CONTENT_EDITOR_BUILDER: BuilderContentEditorComponent,
  COLLECTIONS_BUILDER: BuilderCollectionsComponent,
  FORM_BUILDER: BuilderFormComponent,
  BREADCRUMB_BUILDER: BuilderBreadcrumbComponent
};