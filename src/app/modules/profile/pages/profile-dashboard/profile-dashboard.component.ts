import {Component, OnInit} from '@angular/core';
import {PredictionService} from '../../../../shared/services/prediction.service';

@Component({
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {
  userPredictions;
  loggedUser;

  constructor(private predictionService: PredictionService) {
    this.loggedUser = JSON.parse(localStorage.getItem('auth')).username;
  }

  ngOnInit(): void {
    this.predictionService.getPredictedMatchesForUser(this.loggedUser).subscribe(
      (resp: any) => {
        console.log('getPredictedMatchesForUser', resp.data);
        this.userPredictions = resp.data;
        if (this.userPredictions.length) {
          sessionStorage.setItem('test01', JSON.stringify(this.userPredictions));
        }
      }, (err: any) => {
        console.log('error getPredictedMatchesForUser', err);
      }
    );
  }

}
