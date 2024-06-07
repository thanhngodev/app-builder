import { GridsterConfig as GridConfig } from 'angular-gridster2';

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
  displayGrid: "onDrag&Resize",
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
};

export const MENUS = [
  {
    label: 'Typography',
    code: 'TYPOGRAPHY_BUILDER',
    icon: 'typography',
    component: '',
  },
  {
    label: 'Banner',
    code: 'BANNER_BUILDER',
    icon: 'banner',
    component: '',
  },
  {
    label: 'Assets',
    code: 'ASSETS_BUILDER',
    icon: 'assets',
    component: '',
  },
  {
    label: 'Content Editor',
    code: 'CONTENT_EDITOR_BUILDER',
    icon: 'content_editor',
    component: '',
  },
  {
    label: 'Collections',
    code: 'COLLECTIONS_BUILDER',
    icon: 'collections',
    component: '',
  },
  {
    label: 'Form',
    code: 'FORM_BUILDER',
    icon: 'form',
    component: '',
  },
  {
    label: 'Breadcrumb',
    code: 'BREADCRUMB_BUILDER',
    icon: 'breadcrumb',
    component: '',
  },
];
