import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  template: `
    <p>
      User Page
      {{id}}
      <button (click)="onNavigate()">Go Home</button>
      <a routerLink="/" [queryParams]="{'analytics': 102}">Go Home</a>
    </p>
  `,
  styles: []
})
export class UserComponent implements OnInit,OnDestroy {
  id: string;
  private subscription: Subscription;
  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    this.subscription = activatedroute.params.subscribe(
      (params: any) => { this.id = params['id']} 
    );
   }

   onNavigate(){
     this.router.navigate(['/'], {queryParams:{'analytics': 100}});
   }
  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("component destroyed");
    this.subscription.unsubscribe();
  }

}
