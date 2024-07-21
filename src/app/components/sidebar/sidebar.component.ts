import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isActive = false;
  profileActive = false;
  searchActive = false;

  constructor(
    private sidebarService: SidebarService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(isActive => {
      this.isActive = isActive;
      if (isPlatformBrowser(this.platformId)) {
        document.body.classList.toggle('active', this.isActive);
      }
    });
  }


  closeSidebar() {
    this.isActive = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('active');
    }
  }

  toggleProfile() {
    this.profileActive = !this.profileActive;
    this.searchActive = false;
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
    this.profileActive = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.profileActive = false;
    this.searchActive = false;
    if (isPlatformBrowser(this.platformId) && window.innerWidth < 1200) {
      this.isActive = false;
      document.body.classList.remove('active');
    }
  }
}
