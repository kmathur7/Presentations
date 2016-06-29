import { Component } from '@angular/core';
import { FlightsComponent } from './flights.component';



@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <flights></flights>
    `,
    directives:[FlightsComponent]
})
export class AppCompoent {}