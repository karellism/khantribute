import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <app-header></app-header>
      <app-card></app-card>
      <app-controls></app-controls>
      <app-onboarding></app-onboarding>
    `,
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Khantribute';
}
