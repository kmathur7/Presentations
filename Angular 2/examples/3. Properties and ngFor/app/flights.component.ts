import { Component } from '@angular/core';

@Component({
    selector:'flights',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let flight of flights">
            {{ flight }}
        </li>
    </ul>
    `
})
export class FlightsComponent {
    title: string = 'List of flights';
    flights: string[] = ['Jet Airways', 'Air India','Spicejet'];
} 