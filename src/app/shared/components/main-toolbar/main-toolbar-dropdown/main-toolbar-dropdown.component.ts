import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../../services/auth.service';

@Component({
  selector: 'app-main-toolbar-dropdown',
  templateUrl: './main-toolbar-dropdown.component.html',
  styleUrls: ['./main-toolbar-dropdown.component.scss'],
})
export class MainToolbarDropdownComponent implements OnInit {
  @Input() isLogged = false;
  userDropdown: any[] = [
    {
      name: 'Dashboard',
      path: '/profile/',
      icon: 'chart',
    },
    {
      name: 'Notifications',
      path: '/profile/notifications',
      icon: 'alert',
    },
    {
      name: 'Billing',
      path: '/profile/billing',
      icon: 'money',
    },
    {
      name: 'Settings',
      path: '/profile/settings',
      icon: 'settings',
    },
    // Logout implemented separately
    // {
    //   name: 'Logout',
    //   path: '#',
    //   icon: 'logout',
    // },
  ];
  isDropdownToggled = false;
  innerWidth: any;
  @ViewChild('profileDropdown') profileDropdown;
  profileDropdownBottomOffset;

  // Show/hide info on based resolution
  showDataMobile = false;

  constructor(private authService: AuthenticationService) {
  }

  // Browser width
  @HostListener('window:resize')
  public onResize(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1024) {
      this.showDataMobile = true;
    }
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1024) {
      this.showDataMobile = true;
    }
  }

  toggleDropdown() {
    this.isDropdownToggled = !this.isDropdownToggled;
    // TODO: Set dropdown as visibility / to show or hide because like this we can get it size instantly
    setTimeout(() => {
      this.profileDropdownBottomOffset = this.profileDropdown.nativeElement ? this.profileDropdown.nativeElement.offsetHeight : 0;
    });
  }

  userLogout() {
    this.authService.logout();
  }
}
