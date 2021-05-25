import {Component} from '@angular/core';

@Component({
  selector: 'app-main-toolbar-component',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
})
export class MainToolbarComponent {
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
  isDropdownToggled = false;
  isLogged = false;

  toggleDropdown() {
    this.isDropdownToggled = !this.isDropdownToggled;
  }

  toggleLogin() {
    this.isLogged = !this.isLogged;
  }
}
