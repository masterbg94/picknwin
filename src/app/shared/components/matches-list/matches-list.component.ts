import {Component, Input, OnInit} from '@angular/core';
import {PredictionService} from '../../services/prediction.service';
import {Subscription} from 'rxjs';
import {NewMatch} from '../../models/matches';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/auth.service';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  @Input() matches: NewMatch[];
  @Input() haveOptions = false;
  searchValue;
  predictedMatches: any[] = [];

  subscriptions: Subscription[] = [];

  /**
   *  TODO: CHECK IF USER IS LOGGED OR NOT AND SEND INFO ABOUT CAN IT CLICK ON SINGLE-MATCH.COMPONENT
   */
  canUserClick: boolean;

  constructor(
    private predictService: PredictionService,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.predictService.predictionsObservable.subscribe(
        (resp: any) => {
          this.predictedMatches = JSON.parse(localStorage.getItem('predictionsList'));
        }
      )
    );
    this.subscriptions.push(
      this.auth.isUserLogged.subscribe(
        (response: any) => {
          console.log('Da li je user logovan , moze li ici na match select?', response);
          this.canUserClick = response;
          // this.canUserClick = true
        }, (error: any) => {
          console.log('greska this.auth.isUserLogged.subscribe', error);
          this.canUserClick = error;
        }
      )
    );
  }

  returnPredictedMatch(match) {
    if (this.predictedMatches && (this.predictedMatches.findIndex(x => x.match.id === match.id) !== -1)) {
      return this.predictedMatches[this.predictedMatches.findIndex(x => x.match.id === match.id)];
    } else {
      return false;
    }
  }
}
