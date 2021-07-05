import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatchesData} from '../../../models/matches';

@Component({
  selector: 'app-single-prediction-component',
  templateUrl: './single-prediction.component.html',
  styleUrls: ['./single-prediction.component.scss'],
})
export class SinglePredictionComponent implements OnInit {
  @Input() singlePrediction;
  @Input() predictionIndex;
  @Output() deletePredictionEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  deletePrediction(){
    this.deletePredictionEvent.emit(true);
  }
}
