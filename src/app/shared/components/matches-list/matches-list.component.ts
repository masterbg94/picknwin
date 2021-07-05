import {Component, Input, OnInit} from '@angular/core';
import {PredictionService} from '../../services/prediction.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  @Input() matches;
  @Input() haveOptions = false;
  searchValue;
  predictedMatches: any[] = [];

  subscriptions: Subscription[] = [];

  constructor(private predictService: PredictionService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.predictService.predictionsObservable.subscribe(
        (resp: any) => {
          this.predictedMatches = JSON.parse(localStorage.getItem('predictionsList'));
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

  changedInput(x) {
    console.log('typed search', x);
  }
}
