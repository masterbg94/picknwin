import { NgModule } from '@angular/core';

import { SingleMatchComponent } from './single-match.component';
import {SharedModule} from '../../../../modules/shared.module';

@NgModule({
  declarations: [SingleMatchComponent],
  exports: [
    SingleMatchComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SingleMatchModule { }
