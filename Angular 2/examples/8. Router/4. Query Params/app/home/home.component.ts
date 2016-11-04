import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-home',
  template: `
    <p>
      HomePage
      {{param}}
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {
  param: string;
  private subscription: Subscription;

  constructor(private router: Router) { 
    this.subscription = router.routerState.root.queryParams.subscribe(
      (queryParams: any) => { this.param = queryParams['analytics']}
    )
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
