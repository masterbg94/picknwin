import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  Arr = Array;
  num = 9;
  @Input() matches;

  constructor() {
  }

  ngOnInit(): void {
  }

}
