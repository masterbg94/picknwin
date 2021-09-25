import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PredictionService} from '../../services/prediction.service';
import {Subscription} from 'rxjs';
import {MatchesData, NewMatch} from '../../models/matches';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../services/auth.service';
import {MatchesService} from '../../services/matches.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit, OnChanges {
  @Input() matches: NewMatch[];
  @Input() haveOptions = false;
  searchValue;
  predictedMatches: any[] = [];
  subscriptions: Subscription[] = [];
  matchesList: NewMatch[];
  upcomingMatches;
  pastMatches;
  selectedMatchesOption: string = 'all';

  /**
   *  TODO: CHECK IF USER IS LOGGED OR NOT AND SEND INFO ABOUT CAN IT CLICK ON SINGLE-MATCH.COMPONENT
   */
  canUserClick: boolean;

  constructor(
    private predictService: PredictionService,
    private auth: AuthenticationService,
    private matchService: MatchesService
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
    // Get upcoming & past matches matches
    this.getUpcomingMatches();
    this.getPastMatches();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.matches);
    console.log(this.matchesList);
    if (changes.matches) {
      this.matchesList = this.matches;
    }
  }

  returnPredictedMatch(match) {
    if (this.predictedMatches && (this.predictedMatches.findIndex(x => x.match.id === match.id) !== -1)) {
      return this.predictedMatches[this.predictedMatches.findIndex(x => x.match.id === match.id)];
    } else {
      return false;
    }
  }

  getUpcomingMatches() {
    this.matchService.getUpcomingMatches().pipe(take(1)).subscribe(
      resp => this.upcomingMatches = resp.data,
      err => console.log('error get upcoming matches')
    );
  }

  getPastMatches() {
    this.matchService.updatePastMatches().pipe(take(1)).subscribe(
      resp => this.pastMatches = resp.data,
      err => console.log('error get upcoming matches')
    );
  }

  selectMatchesByTime(x) {
    // matchesBy
    console.log('x', x);
    switch (x) {
      case 'all':
        this.matchesList = this.matches;
        this.selectedMatchesOption = x;
        break;
      case 'upcoming':
        this.matchesList = this.upcomingMatches;
        this.selectedMatchesOption = x;
        break;
      case 'live':
        this.matchesList = this.pastMatches;
        this.selectedMatchesOption = x;
        break;
    }
    console.log('selectMatchesByTime', this.matchesList?.length || 'nema meceva');
  }
}
