import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadTableComponent} from './lead-table.component';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LeadTableComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [LeadTableComponent]
})
export class LeadTableModule {
}
