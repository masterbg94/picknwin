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

  teamOnePredict(x) {
    console.log(this.singleMatch.team_one.team_name);
    this.teamOneSelect = this.singleMatch.team_one.team_name;
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
