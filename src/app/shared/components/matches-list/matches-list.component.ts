import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  Arr = Array;
  num = 5;

  constructor() { }

  ngOnInit(): void {
  }

}