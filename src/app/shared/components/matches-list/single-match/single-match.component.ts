import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {NewMatch} from '../../../models/matches';
import {PredictionService} from '../../../services/prediction.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog.component';

@Component({
  selector: 'app-single-match',
  templateUrl: './single-match.component.html',
  styleUrls: ['./single-match.component.scss']
})
export class SingleMatchComponent implements OnInit, OnChanges {
  @Input() singleMatch: NewMatch;
  @Input() index;
  @Input() predictedMatch;
  @Input() allowedClick;
  prediction: any[] = [];
  selectedMatch;
  localStoragePredictions: any[];
  /** Logged user / cant bet-predict if not logged */
  loggedUser: string;

  constructor(
    private predictionService: PredictionService,
    public dialog: MatDialog
  ) {
    this.loggedUser = localStorage.getItem('auth');
  }

  ngOnInit(): void {
    this.allowedClick = !!this.loggedUser;
  }

  /** Add match to prediction list/local storage */
  predictTeam(selectedTeam, points) {
    if (this.allowedClick) {
      this.selectedMatch = selectedTeam.team_name;
      const predictionItem = {
        match: this.singleMatch,
        team: selectedTeam,
        points
      };
      this.predictionService.addToPredictionList(predictionItem);
    } else {
      this.openDialog();
    }
  }

  /** Default team picture if dont have / cant load image URL */
  errorHandler(event) {
    event.target.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
