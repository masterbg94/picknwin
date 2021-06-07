import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {Matches, MatchesData} from '../../../shared/models/matches';
import {MatchesService} from '../../../shared/services/matches.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allMatches: MatchesData[];

  constructor(private matchesService: MatchesService) {
  }

  ngOnInit(): void {
    this.matchesService.getAllMatches().pipe(take(1)).subscribe(
      (response: Matches) => {
        this.allMatches = response.data;
      }
    );
  }

}
