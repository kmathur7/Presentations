import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'event-binding',
  template: `
    <p>
      <button (click)="onClick()">Click Me!</button>
    </p>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
 @Output() clicked = new EventEmitter<string>();
  constructor() { }




  onClick(){
    this.clicked.emit("It Works!");
  }

  ngOnInit() {
  }

}
