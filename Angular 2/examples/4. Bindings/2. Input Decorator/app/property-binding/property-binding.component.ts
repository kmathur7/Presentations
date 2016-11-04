import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `
    <p>
      {{result}}
    </p>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
@Input() result:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
