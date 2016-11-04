import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <p>
      User Page
      <button (click)="onNavigate()">Goto Home Page</button>
    </p>
  `,
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  onNavigate(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
