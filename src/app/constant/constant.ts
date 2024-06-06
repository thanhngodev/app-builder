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
  displayGrid: 'none',
  swapWhileDragging: true,
  swap: false,

  // EmptyCell
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: false,
  enableEmptyCellDrop: true,
  enableEmptyCellDrag: true,
  enableOccupiedCellDrop: false
};
