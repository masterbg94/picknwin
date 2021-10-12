import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Leadbord} from '../../models/leadbord';
import {LeadbordService} from '../../services/leadbord.service';

@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.scss']
})
export class LeadTableComponent implements OnInit, AfterViewInit {

  constructor(public leadService: LeadbordService) {
  }

  /**
   * Izmenjene kolone kao i matColumnDef koji odgovara podatku
   * iz interface <ng-container matColumnDef="place">
   */
  displayedColumns: any[] = ['place', 'player', 'price', 'score'];
  dataSource = new MatTableDataSource<Leadbord>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getLeadData();
  }

  /** Return Of mock data */
  getLeadData() {
    this.leadService.getLeadbordData().subscribe((res) => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

}
