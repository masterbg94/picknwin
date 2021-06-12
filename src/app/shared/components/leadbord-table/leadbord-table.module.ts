import {NgModule} from '@angular/core';
import {LeadbordTableComponent} from './leadbord-table.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [LeadbordTableComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LeadbordTableComponent],
})
export class LeadbordTableModule {}
