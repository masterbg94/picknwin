import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {MatchesData} from '../../../models/matches';

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.scss']
})
export class SingleMatchComponent implements OnInit, OnChanges {

  @Input() singleMatch: MatchesData;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes.singleMatch.currentValue);
  }

}
