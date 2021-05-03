import { NgModule } from '@angular/core';

import { PredictionsComponent } from './predictions.component';
import {CustomMaterialModule} from '../../../modules/custom-material.module';

@NgModule({
  declarations: [PredictionsComponent],
  imports: [CustomMaterialModule],
  exports: [PredictionsComponent],
})
export class PredictionsModule {}
