import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'counter-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  count = 0;

  @Output()
  countChange = new EventEmitter<number>();

  constructor() { }

  // Called once
  // Called after first changes hook - if any
  ngOnInit(): void {
    console.log('Component initialized');
  }

  // Called each time any input value changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component input data changed');
    console.log(changes);
  }

  // Called each time in a change detection run
  // ngDoCheck(): void {
  //
  // }

  // Called once
  ngOnDestroy(): void {
    console.log('Component will be detroyed');
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
