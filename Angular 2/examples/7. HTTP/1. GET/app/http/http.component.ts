import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers:[DataService]
})
export class HttpComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(
      (data: Response) => {console.log(data)}
    );
  }

}
