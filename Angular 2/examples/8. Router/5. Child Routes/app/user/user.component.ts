import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      User Page
      Goto Home Page <a routerLink="/">here</a>
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
