import { NgModule } from '@angular/core';

import { GameCategoriesComponent } from './game-categories.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../modules/shared.module';

@NgModule({
  declarations: [GameCategoriesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GameCategoriesComponent],
})
export class GameCategoriesModule {}
