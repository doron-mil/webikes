import {Component} from '@angular/core';
import * as _ from 'lodash';
import {Cell} from './model/cell';
import {CellChangeEvent} from './model/CellChangeEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private matrixRowCount = 3;
  private matrixColCount = 3;
  cellsMatrix: Cell[][];
  cellsMatrixAsArray = new Array();
  cellInFocus: Cell;
  intervalInput: number;
  logOutput = '';

  constructor() {
    this.cellsMatrix = new Array(this.matrixRowCount);
    _.forEach(this.cellsMatrix, (row, rowIndex) => {
      this.cellsMatrix[rowIndex] = Array.from({length: this.matrixColCount}, (v, k) => {
        const newCell = new Cell(rowIndex, k, this.matrixColCount);
        this.cellsMatrixAsArray.push(newCell);
        return newCell;
      });
    });
  }

  const;
  forEachCell = (cellFunc) => {
    _.forEach(this.cellsMatrixAsArray, (cell) => {
      // console.log('ddd', cell);
      cellFunc(cell);
    });
  };

  startAll() {
    this.forEachCell((cell) => {
      cell.start();
    });
  }

  stopAll() {
    this.forEachCell((cell) => {
      cell.stop();
    });
  }

  reset() {
    this.forEachCell((cell) => {
      cell.resetCell();
    });
  }

  setCellInFocus(cell) {
    this.cellInFocus = cell;
    this.intervalInput = cell.interval;
  }

  toggleCell() {
    if (this.cellInFocus) {
      this.cellInFocus.toggle();
    }
  }


  setCellInterval() {
    if (this.cellInFocus && this.intervalInput && this.intervalInput > 0) {
      this.cellInFocus.setInterval(this.intervalInput);
      // console.log(this.cellsMatrixAsArray[this.cellInFocus - 1]);
    }
  }

  onColorEvent(cellChangeEvent: CellChangeEvent) {
    const current = new Date();
    const eventCahngeLog = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}:${current.getMilliseconds()}` +
      `- Cell no. ${cellChangeEvent.cellNumber + 1} has changed` +
      `from ${cellChangeEvent.prevColor} to ${cellChangeEvent.newColor}\n`;
    this.logOutput = this.logOutput + eventCahngeLog;
    const textarea = document.getElementById('textarea_id');
    textarea.scrollTop = textarea.scrollHeight;
    // console.log(this.logOutput, cellChangeEvent);
  }
}


