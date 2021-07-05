import { NgModule } from '@angular/core';

import { PredictionsComponent } from './predictions.component';
import { CustomMaterialModule } from '../../../modules/custom-material.module';
import { SinglePredictionModule } from './single-prediction/single-prediction.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [PredictionsComponent],
    imports: [CustomMaterialModule, SinglePredictionModule, CommonModule],
  exports: [PredictionsComponent],
})
export class PredictionsModule {}
