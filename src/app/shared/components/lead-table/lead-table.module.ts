import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeadTableComponent} from './lead-table.component';
import {CustomMaterialModule} from '../../../modules/custom-material.module';

@NgModule({
  declarations: [LeadTableComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [LeadTableComponent]
})
export class LeadTableModule {
}
