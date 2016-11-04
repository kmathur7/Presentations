import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  template: `
    <p>
      User Page
      {{id}}
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


  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("component destroyed");
    this.subscription.unsubscribe();
  }

}
