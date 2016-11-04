import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <p>
      child Works!
    </p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
