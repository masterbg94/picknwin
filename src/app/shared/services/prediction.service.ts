import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API_HOME} from '../../api.config';
import {PredictMatch} from '../models/prediction';

@Injectable({providedIn: 'root'})
export class PredictionService {

  private predictionsSubject: BehaviorSubject<any>;
  public predictionsObservable: Observable<any>;

  /**
   * predictionsData: matchPrediction[]
   * goes through service in localstorage
   */
  predictionsData: any[] = [];

  constructor(private http: HttpClient) {
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
    // Search if have same predicted match and replace prediction choice
    if (this.predictionsData.findIndex(x => x.match.id === prediction.match.id) !== -1) {
      this.predictionsData[this.predictionsData.findIndex(x => x.match.id === prediction.match.id)] = prediction;
    } else {
      // If dont have prediction in localstorage
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

  clearAllPredictions() {
    localStorage.removeItem('predictionsList');
    this.predictionsSubject.next(null);
  }

  /** PREDICTION API SEND PREDICT AND GET PREDICTED */

  public predictMatches(predictedData) {
    return this.http.post(API_HOME + '/predict', predictedData);
  }

  public getPredictedMatchesForUser(username) {
    return this.http.get(API_HOME + `/predict?username=${username}`);
  }

}
