import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {MatchesData} from '../../../models/matches';

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.scss']
})
export class SingleMatchComponent implements OnInit, OnChanges {

  @Input() singleMatch: MatchesData;
  @Input() index;
  teamOneSelect;
  teamTwoSelect;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  predictTeam(selectedTeam) {
    this.selectedMatch = selectedTeam.team_name;
    // this.prediction.push(selectedTeam);
    // this.predictionService.updatePredictionList(this.singleMatch);
  }

  teamTwoPredict(x) {
    console.log(this.singleMatch.team_two.team_name);
    this.teamTwoSelect = this.singleMatch.team_two.team_name;
  }

  /** Default if dont have (cant load) image URL */
  errorHandler(event) {
    event.target.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }

}
