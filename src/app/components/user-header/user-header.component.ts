import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/darkmode/dark-mode.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit {
  isProfileVisible = false;
  isSearchVisible = false;

  constructor(
    private darkModeService: DarkModeService,
    private sidebarService: SidebarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //iniciailizar el dark mode
    this.darkModeService.initialize();

    // Suscribirse a los eventos de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.isProfileVisible = false;
        }
        if (event.url === '/profile') {
          this.isProfileVisible = false;
        }
        if (event.url === '/register') {
          this.isProfileVisible = false;
        }
      }
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  //inicio de la barra lateral
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleProfile() {
    this.isProfileVisible = !this.isProfileVisible;
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
    this.isProfileVisible = false;
  }
}
