import { NgModule } from '@angular/core';

import { SingleMatchComponent } from './single-match.component';
import {SharedModule} from '../../../../modules/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [SingleMatchComponent],
  exports: [
    SingleMatchComponent
  ],
    imports: [
        SharedModule,
        CommonModule
    ]
})
export class SingleMatchModule { }
