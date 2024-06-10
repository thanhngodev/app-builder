import { GridsterConfig as GridConfig } from 'angular-gridster2';
import { IMenuDataBuilder } from '../interfaces/layout.interface';

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
  minRows: 5,

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
    component: {
      cols: 10,
      rows: 1,
      class: "typography_builder"
    },
  },
  {
    label: 'Banner',
    code: 'BANNER_BUILDER',
    icon: 'banner',
    component: {
      cols: 12,
      rows: 1,
      class: "banner_builder"
    },
  },
  {
    label: 'Assets',
    code: 'ASSETS_BUILDER',
    icon: 'assets',
    component: {
      cols: 10,
      rows: 1,
      class: "assets_builder"
    },
  },
  {
    label: 'Content Editor',
    code: 'CONTENT_EDITOR_BUILDER',
    icon: 'content_editor',
    component: {
      cols: 10,
      rows: 1,
      class: "content_editor_builder"
    },
  },
  {
    label: 'Collections',
    code: 'COLLECTIONS_BUILDER',
    icon: 'collections',
    component: {
      cols: 10,
      rows: 1,
      class: "collections_builder"
    },
  },
  {
    label: 'Form',
    code: 'FORM_BUILDER',
    icon: 'form',
    component: {
      cols: 12,
      rows: 1,
      class: "form_builder"
    },
  },
  {
    label: 'Breadcrumb',
    code: 'BREADCRUMB_BUILDER',
    icon: 'breadcrumb',
    component: {
      cols: 10,
      rows: 1,
      class: "breadcrumb_builder"
    },
  },
];
