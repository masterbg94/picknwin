import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {MatchesData} from '../../../models/matches';
import {PredictionService} from '../../../services/prediction.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.scss']
})
export class SingleMatchComponent implements OnInit {
  @Input() singleMatch: MatchesData;
  @Input() index;
  @Input() predictedMatch;

  prediction: any[] = [];
  selectedMatch;
  localStoragePredictions: any[];

  /** Subscription for same match click but another team */
  subscription: Subscription[] = [];

  constructor(private predictionService: PredictionService) {
  }

  ngOnInit(): void {
    this.subscription.push(
      this.predictionService.predictionsObservable.subscribe(
        (resp: any) => {
          // this.allPredictionsData = resp;
          // console.log('all p data', this.allPredictionsData);
        }
      )
    );
  }

  predictTeam(selectedTeam, points) {
    this.selectedMatch = selectedTeam.team_name;
    const predictionItem = {
      match: this.singleMatch,
      team: this.selectedMatch,
      points: points
    };
    this.predictionService.addToPredictionList(predictionItem);
  }

  /** Default team picture if dont have / cant load image URL */
  errorHandler(event) {
    event.target.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }

}
