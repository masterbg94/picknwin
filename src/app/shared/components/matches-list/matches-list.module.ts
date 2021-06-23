import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatchesListComponent} from './matches-list.component';
import {SingleMatchModule} from './single-match/single-match.module';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [MatchesListComponent],
    imports: [
        SingleMatchModule,
        CommonModule,
        CustomMaterialModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
  exports: [MatchesListComponent]
})
export class MatchesListModule {
}
