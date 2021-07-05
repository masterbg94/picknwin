import {Component, OnInit} from '@angular/core';
import {PredictionService} from '../../services/prediction.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-predictions-component',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {
  tabValue = 'Predictions';
  predictions: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(private predictionService: PredictionService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      // Get data from local storage 'predictionList'
      this.predictionService.predictionsObservable.subscribe(
        (resp: any) => {
          this.predictions = resp;
        }
      )
    );
  }

  changeTab(event) {
    console.log(event.tab);
    this.tabValue = event.tab.textLabel;
  }

  deletePrediction(index){
    this.predictionService.removePredictionFromList(index);
  }

  submitPredictions() {
    console.log('predictions Submited');
  }
}
