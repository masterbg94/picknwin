import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-toolbar-component',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  navigation = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Matches',
      path: '/matches',
    },
    {
      name: 'Leaderboard',
      path: '/leadbord',
    },
  ];

  userDropdown: any[] = [
    {
      name: 'Dashboard',
      path: '/profile/',
      icon: 'chart'
    },
    {
      name: 'Notifications',
      path: '/profile/notifications',
      icon: 'alert'
    },
    {
      name: 'Billing',
      path: '/profile/billing',
      icon: 'money'
    },
    {
      name: 'Settings',
      path: '/profile/settings',
      icon: 'settings'
    },
    {
      name: 'Logout',
      path: '#',
      icon: 'logout'
    }
  ];
  isDropdownToggled = false;
  isLogged = false;

  subscription: Subscription[] = [];

  constructor(private authService: AuthenticationService) {
  }

  toggleDropdown() {
    this.isDropdownToggled = !this.isDropdownToggled;
  }

  /*  toggleLogin() {
      this.isLogged = !this.isLogged;
    }*/

  logoutUser() {
    this.authService.logout();
  }

  /** User login subscription */
  ngOnInit(): void {
    this.subscription.push(
      this.authService.currentUser.subscribe(
        (resp) => {
          console.log('currentUser', resp);
          if (resp != null) {
            this.isLogged = true;
            console.log('this.isLogged = true');
          } else if (resp == null) {
            console.log('currentUser else state', resp);
            this.isLogged = false;
            this.isDropdownToggled = false;
          }
        }, (error: any) => {
          alert(error);
        }
      )
    );
  }

}
