import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../shared/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-leadbord',
  templateUrl: './leadbord.component.html',
  styleUrls: ['./leadbord.component.scss'],
})
export class LeadbordComponent implements OnInit {
  subscriptions: Subscription[] = [];
  userNotLogged;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userNotLogged = !Boolean(localStorage.getItem('auth'));
    /** Remove user login component when user is logged */
    this.subscriptions.push(
      this.authService.isUserLogged.subscribe(
        (resp: boolean) => {
          console.log('isUserLogged', resp);
          this.userNotLogged = !resp;
        }
      )
    );
  }
}
