import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './user-edit.guard';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user-edit-detail',
  template: `
    <p>
      user-edit-detail Works!

      <button (click)="done = true">Done</button>
    </p>
  `,
  styles: []
})
export class UserEditDetailComponent implements OnInit, ComponentCanDeactivate {
 done = false;
  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | boolean{
    if(!this.done){
      return confirm("Do You want to leave?");
    }
    return true;
  }

}
