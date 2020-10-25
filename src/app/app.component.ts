import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  count = 17;
  countChanged = false;

  private oldCount = 17;
  ngDoCheck(): void {
    console.log(this.count);
    if (this.oldCount !== this.count) {
      this.countChanged = true;
      this.oldCount = this.count;
    }
  }
}
