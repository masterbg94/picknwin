import {Component, Input, OnInit} from '@angular/core';
import {Matches, MatchesData} from '../../models/matches';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  @Input() matches;
  @Input() haveOptions = false;
  searchValue;

  constructor() {
  }

  ngOnInit(): void {
  }

  changedInput(x){
    console.log('typed search', x);
  }
}
