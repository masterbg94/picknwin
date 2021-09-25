import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.scss']
})
export class ProfileTableComponent implements OnInit, OnChanges {
  loopTable: any;
  @Input() userPredictions;

  constructor() {
    this.loopTable = Array(5).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userPredictions) {
      this.userPredictions = changes.userPredictions.currentValue;
      console.log('ch', this.userPredictions);
    }
  }

}
