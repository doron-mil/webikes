export enum ColorEnum {
  Aqua,
  Red,
  Blue,
  Green,
  Black,
  Yellow,
}

export class Cell {
  static colorsCount = Object.keys(ColorEnum).length / 2;
  row: number;
  col: number;
  cellNumber: number;
  isActive = false;
  interval: number;
  color: ColorEnum;
  colorClass: string;
  cellText: string;

  constructor(row: number, col: number, colsInRow: number) {
    this.row = row;
    this.col = col;
    this.cellNumber = colsInRow * row + col;

    this.resetCell();
  }

  resetCell() {
    this.color = ColorEnum[0];
    this.setColorClass(this.color);
    this.interval = 2000;

    this.computeCellText();
  }

  computeCellText() {
    this.cellText = `Cell ${this.cellNumber + 1} : int=${this.interval} ` ;
  }


  start() {
    this.isActive = true;
    this.computeCellText();
  }

  stop() {
    this.isActive = false;
    this.computeCellText();
  }

  toggle() {
    this.isActive = !this.isActive;
    this.computeCellText();
  }

  setColorClass(newColor: ColorEnum) {
    this.color = newColor;
    this.colorClass = 'cellColorClass' + newColor;
  }

  pickColor() {
    const cellColorNumber = (Math.floor(Math.random() * Cell.colorsCount) + 0);
    // console.log(Cell.colorsCount, cellColorNumber , ColorEnum[cellColorNumber]);
    this.setColorClass(ColorEnum[cellColorNumber]);
  }

  setInterval(newinterval: number) {
    this.interval = newinterval;
    this.computeCellText();
  }


}


