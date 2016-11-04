import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringInterpolation = "This is string interpolation";
  numberInterpolation = 2;

  onTest(){
    return true;
  }
}
