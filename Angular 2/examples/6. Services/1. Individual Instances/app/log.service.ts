import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  message: string = "";
  constructor() { }
  printMessage(value:string){
    this.message= value;
    console.log(this.message);
  }

  getMessage(){
    console.log(this.message);
    return this.message;
  }

}
