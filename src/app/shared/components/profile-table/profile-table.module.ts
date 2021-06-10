import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileTableComponent} from './profile-table.component';


@NgModule({
  declarations: [
    ProfileTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileTableComponent
  ]
})
export class ProfileTableModule {
}
