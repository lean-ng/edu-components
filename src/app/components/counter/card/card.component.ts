import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  count = 0;

  @Output()
  countChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  incCount(): void {
    this.count += 1;
    this.countChange.emit(this.count);
  }

  resetCount(): void {
    this.count = 0;
    this.countChange.emit(this.count);
  }
}
