import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <button (click)="themeService.toggleTheme()">Toggle Dark Mode</button>
    <!-- Rest of your component HTML -->
  `,
})
export class AppComponent {
  title = 'movies-app';
  constructor(public themeService: ThemeService) {}
  dark() {
    this.themeService.toggleTheme();
  }
}
