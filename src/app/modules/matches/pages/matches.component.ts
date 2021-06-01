import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';

import {MatchesService} from '../../../shared/services/matches.service';
import {Matches, MatchesData} from '../../../shared/models/matches';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnInit {
  constructor(private matchesService: MatchesService) {
  }

  allMatches: MatchesData[];

  ngOnInit(): void {
    this.matchesService.getAllMatches().pipe(take(1)).subscribe(
      (response: Matches) => {
        this.allMatches = response.data;
      }
    );
  }
}
