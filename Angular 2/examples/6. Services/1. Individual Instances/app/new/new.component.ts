import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
@Component({
  selector: 'app-new',
  template: `
    <p>
      Component 1
      <button (click)="sendService()">Send message to Service</button>
      <button (click)="getService()">Get message from Service</button>
      {{message}}

    </p>
    <hr>
  `,
  styles: [],
  providers:[LogService]
})
export class NewComponent implements OnInit {
  message:string = "";
  constructor(private logservice: LogService) { }
  
  sendService(){
    this.logservice.printMessage("Component1 called");
  }

  getService(){
    this.message= this.logservice.getMessage();
  }

  ngOnInit() {
  }

}
