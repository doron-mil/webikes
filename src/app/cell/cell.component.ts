import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Cell, ColorEnum} from '../model/cell';
import {CellChangeEvent} from '../model/CellChangeEvent';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  @Output() onColorEvent = new EventEmitter<CellChangeEvent>();
  colorEnum = ColorEnum;

  ngOnInit() {
    this.cycleFunction();
  }

  private cycleFunction() {
    setTimeout(() => {
      if (this.cell.isActive) {
        const prevColor = this.cell.color;
        this.cell.pickColor();
        this.onColorEvent.emit(new CellChangeEvent(
          this.cell.cellNumber,
          prevColor,
          this.cell.color
        ));
      }
      // console.log( this.cell );
      this.cycleFunction();
    }, (this.cell.isActive ? this.cell.interval : 500));
  }

}

