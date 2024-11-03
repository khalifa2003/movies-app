import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;
    body.classList.toggle('dark-theme', this.isDarkTheme);

    // Optionally toggle Bootstrap-specific classes if needed
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('navbar-dark', this.isDarkTheme);
      navbar.classList.toggle('navbar-light', !this.isDarkTheme);
    }
  }
}
