import {Component, Input, OnInit} from '@angular/core';
import {PredictionService} from '../../services/prediction.service';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-predictions-component',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {
  tabValue = 'Predictions';
  predictions: any[] = [];
  subscriptions: Subscription[] = [];
  currentUser: string;
  @Input() isMobile;
  predictionsExpanded: boolean = true;

  constructor(
    private predictionService: PredictionService,
    private toastr: ToastrService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('auth')).username;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      // Get data from local storage 'predictionList'
      this.predictionService.predictionsObservable.subscribe(
        (resp: any) => {
          this.predictions = resp;
          console.log('predictions resp:', resp);
        }
      )
    );
  }

  changeTab(event) {
    this.tabValue = event.tab.textLabel;
    console.log('tab value', this.tabValue);
  }


  deletePrediction(index) {
    this.predictionService.removePredictionFromList(index);
  }

  submitPredictions() {
    console.log('predictions Submited');
    const newPredType = this.predictions.map(
      (x) => ({
        username: this.currentUser,
        match_id: x.match.id,
        prediction: x.team,
        event: x.match.event
      })
    );
    console.log('newpredType', newPredType);
    this.predictionService.predictMatches(newPredType).subscribe(
      (resp: any) => {
        console.log('predictions response', resp);
        this.toastr.success('Successfully predicted matches', 'Success');
      }, (err: any) => {
        this.toastr.error(`Something is wrong \n ${err}`, 'Error');
      }
    );
    this.predictionService.clearAllPredictions();
  }

  changePredictionsState() {
    if (this?.tabValue === 'predictions') {
      this.predictionsExpanded = !this.predictionsExpanded;
      console.log('if (this.tabValue === \'predictions\')');
      return Boolean(this.predictionsExpanded);
    } else {
      this.predictionsExpanded = false;
      return false;
    }
  }

  changePredictionToTrue() {
    this.predictionsExpanded = false;
  }
}
