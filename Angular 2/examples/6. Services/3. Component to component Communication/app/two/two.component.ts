import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
 value: string = "";
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.pushData.subscribe(
      data => {this.value = data}
    )
  }

}
