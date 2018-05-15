import {ColorEnum} from './cell';

export class CellChangeEvent {
  cellNumber: number;
  prevColor: ColorEnum;
  newColor: ColorEnum;


  constructor(cellNumber: number, prevColor: ColorEnum, newColor: ColorEnum) {
    this.cellNumber = cellNumber;
    this.prevColor = prevColor;
    this.newColor = newColor;
  }
}
