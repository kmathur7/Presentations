import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[LogService]
})
export class SecondComponent implements OnInit {
   message:string = "";
  constructor(private logservice: LogService) { }

  sendService(){
    this.logservice.printMessage("Component2 called");
  }

  getService(){
    this.message= this.logservice.getMessage();
  }
  ngOnInit() {
  }

}
