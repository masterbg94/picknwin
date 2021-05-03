import { NgModule } from '@angular/core';

import { PredictionsComponent } from './predictions.component';
import { CustomMaterialModule } from '../../../modules/custom-material.module';
import { SinglePredictionModule } from './single-prediction/single-prediction.module';

@NgModule({
  declarations: [PredictionsComponent],
  imports: [CustomMaterialModule, SinglePredictionModule],
  exports: [PredictionsComponent],
})
export class PredictionsModule {}
