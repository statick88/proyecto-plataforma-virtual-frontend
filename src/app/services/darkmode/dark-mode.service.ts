import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class DarkModeService {
  private toggleBtn: HTMLElement | null = null;

  constructor() {
    this.initialize();
  }

  public initialize() {
    this.toggleBtn = document.getElementById('toggle-btn');
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
      this.enableDarkMode();
    }
  }

  public enableDarkMode() {
    if (this.toggleBtn) {
      this.toggleBtn.classList.replace('fa-sun', 'fa-moon');
      document.body.classList.add('dark');
      localStorage.setItem('dark-mode', 'enabled');
    }
  }

  public disableDarkMode() {
    if (this.toggleBtn) {
      this.toggleBtn.classList.replace('fa-moon', 'fa-sun');
      document.body.classList.remove('dark');
      localStorage.setItem('dark-mode', 'disabled');
    }
  }

  public toggleDarkMode() {
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled') {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }
}
