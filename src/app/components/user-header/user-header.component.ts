import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/darkmode/dark-mode.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';


@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent implements OnInit {
  isProfileVisible = false;

  constructor(
    private darkModeService: DarkModeService,
    private sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
    //iniciailizar el dark mode
    this.darkModeService.initialize();
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
}
