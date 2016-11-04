import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private dataservice: DataService) { }

 send(value:string){
   this.dataservice.sendData(value);
 }
  ngOnInit() {
  }

}
