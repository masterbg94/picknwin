import {Component, OnInit} from '@angular/core';
import {LeadbordService} from '../../services/leadbord.service';
import {Leadbord} from '../../models/leadbord';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leadbord-table-component',
  templateUrl: './leadbord-table.component.html',
  styleUrls: ['./leadbord-table.component.scss'],
})
export class LeadbordTableComponent implements OnInit {
  allLeadboardData: Leadbord[];
  leadboardPlaces;

  constructor(private leadbordService: LeadbordService, private router: Router) {
  }

  ngOnInit(): void {
    this.getLeadbordData();
    if (this.router.url === '/leadbord'){
      this.leadboardPlaces = true;
    }
  }

  getLeadbordData() {
    this.leadbordService.getLeadbordData().pipe(take(1)).subscribe(
      (response: Leadbord[]) => this.allLeadboardData = response.slice(0, 10)
    );
  }
}
