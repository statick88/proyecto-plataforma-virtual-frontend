import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebar = new BehaviorSubject<boolean>(false);
  sidebarState$ = this.sidebar.asObservable();

  toggleSidebar() {
    this.sidebar.next(!this.sidebar.value);
  }

}
