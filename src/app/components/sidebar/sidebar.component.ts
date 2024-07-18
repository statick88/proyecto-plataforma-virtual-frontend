import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  isActive = false;
  profileActive = false;
  searchActive = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(isActive => {
      this.isActive = isActive;
      document.body.classList.toggle('active', this.isActive);
    });
  }


  closeSidebar() {
    this.isActive = false;
    document.body.classList.remove('active');
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
    if (window.innerWidth < 1200) {
      this.isActive = false;
      document.body.classList.remove('active');
    }
  }
}
