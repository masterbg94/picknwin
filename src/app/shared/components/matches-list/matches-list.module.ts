import {NgModule} from '@angular/core';
import {MatchesListComponent} from './matches-list.component';
import {SingleMatchModule} from './single-match/single-match.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MatchesListComponent],
  imports: [SingleMatchModule, CommonModule],
  exports: [MatchesListComponent]
})
export class MatchesListModule {
}
