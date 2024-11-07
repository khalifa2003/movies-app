import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;
  private themeKey = 'isDarkTheme';

  constructor() {
    this.loadTheme(); // Load theme on initialization
  }

  get darkTheme(): boolean {
    return this.isDarkTheme;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    this.saveTheme();
  }

  private applyTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme', this.isDarkTheme);

    // Optionally toggle Bootstrap-specific classes
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('navbar-dark', this.isDarkTheme);
      navbar.classList.toggle('navbar-light', !this.isDarkTheme);
    }
  }

  private saveTheme() {
    localStorage.setItem(this.themeKey, JSON.stringify(this.isDarkTheme));
  }

  private loadTheme() {
    const storedTheme = localStorage.getItem(this.themeKey);
    this.isDarkTheme = storedTheme ? JSON.parse(storedTheme) : false;
    this.applyTheme(); // Apply theme based on loaded preference
  }
}
