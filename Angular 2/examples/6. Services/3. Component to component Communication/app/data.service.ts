import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

   pushData = new EventEmitter<string>();

   sendData(value: string){
    this.pushData.emit(value);
  }
}
