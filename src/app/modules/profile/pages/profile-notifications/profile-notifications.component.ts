import {Component} from '@angular/core';

@Component({
  selector: 'app-profile-notifications-component',
  templateUrl: './profile-notifications.component.html',
  styleUrls: ['./profile-notifications.component.scss']
})
export class ProfileNotificationsComponent {
  arr: Array<number>;
  unreadCount = 10;
  numbers = Array(5).fill(0).map((x, i) => i);
}
