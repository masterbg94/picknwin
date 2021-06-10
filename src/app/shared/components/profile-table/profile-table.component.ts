import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent implements OnInit {
  loopTable: any;

  constructor() {
    this.loopTable = Array(5).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

}
