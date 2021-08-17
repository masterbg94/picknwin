import {NgModule} from '@angular/core';
import {MainToolbarComponent} from './main-toolbar.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../modules/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
  exports: [MainToolbarComponent],
  declarations: [MainToolbarComponent],
})
export class MainToolbarModule {}
