import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {Matches, MatchesData} from '../../../shared/models/matches';
import {MatchesService} from '../../../shared/services/matches.service';
import {Subscription} from 'rxjs';
import {AuthenticationService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allMatches: MatchesData[];
  subscriptions: Subscription[] = [];
  userNotLogged;

  constructor(private matchesService: MatchesService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.userNotLogged = !Boolean(localStorage.getItem('auth'));

    this.matchesService.getAllMatches().pipe(take(1)).subscribe(
      (response: Matches) => {
        // Fixed to show only first 10items from matches array
        this.allMatches = response.data.slice(0, 10);
      }
    );
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
