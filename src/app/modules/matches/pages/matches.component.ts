import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

import {MatchesService} from '../../../shared/services/matches.service';
import {Matches, NewMatch} from '../../../shared/models/matches';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  browserWidth: number;

  constructor(private matchesService: MatchesService) {
    this.browserWidth = window.innerWidth;
  }

  allMatches: NewMatch[];

  ngOnInit(): void {
    this.matchesService.getAllMatches().pipe(take(1)).subscribe(
      (response: Matches) => {
        // Cut to only 15 matches for matches page
        // this.allMatches = response.data.slice(0, 15);
        this.allMatches = response.data;
      }
    );
  }
}
