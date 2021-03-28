import { NgModule } from '@angular/core';
import { MatchesComponent } from './pages/matches.component';
import { MatchesRoutingModule } from './matches.routing.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [MatchesRoutingModule],
})
export class MatchesModule {}
