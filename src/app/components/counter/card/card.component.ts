import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incCount(): void {
    this.count += 1;
  }

  resetCount(): void {
    this.count = 0;
  }
}
