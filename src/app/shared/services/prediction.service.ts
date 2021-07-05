import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PredictionService {

  private predictionsSubject: BehaviorSubject<any>;
  public predictionsObservable: Observable<any>;

  predictionsData: any[] = [];

  constructor() {
    this.predictionsSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('predictionsList'))
    );
    this.predictionsObservable = this.predictionsSubject.asObservable();
    this.predictionsObservable.subscribe(
      (localStorageResponse: any) => {
        if (localStorageResponse) {
          this.predictionsData = localStorageResponse;
        }
      }
    );
  }

  /* Add Prediction to list / update if have same match √ */
  addToPredictionList(prediction) {
    if (this.predictionsData.findIndex(x => x.match.id === prediction.match.id) !== -1) {
      this.predictionsData[this.predictionsData.findIndex(x => x.match.id === prediction.match.id)] = prediction;
    } else {
      this.predictionsData.push(prediction);
    }
    // this.predictionsData.push(prediction);
    localStorage.setItem('predictionsList', JSON.stringify(this.predictionsData));
    this.predictionsSubject.next(this.predictionsData);
  }

  /* Delete Prediction √ */
  removePredictionFromList(index) {
    this.predictionsData.splice(index, 1);
    localStorage.setItem('predictionsList', JSON.stringify(this.predictionsData));
    this.predictionsSubject.next(this.predictionsData);
  }

}
