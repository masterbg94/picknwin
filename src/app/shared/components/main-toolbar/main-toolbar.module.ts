import {NgModule} from '@angular/core';
import {MainToolbarComponent} from './main-toolbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainToolbarComponent],
  declarations: [MainToolbarComponent],
})
export class MainToolbarModule {}
