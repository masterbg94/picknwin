import { NgModule } from '@angular/core';
import { MatchesComponent } from './pages/matches.component';
import { MatchesRoutingModule } from './matches.routing.module';
import {UpgradePremiumModule} from '../../shared/components/upgrade-premium/upgrade-premium.module';
import {MatchesListModule} from '../../shared/components/matches-list/matches-list.module';
import {HomeLoginModule} from '../../shared/components/home-login/home-login.module';

@NgModule({
  declarations: [MatchesComponent],
  imports: [MatchesRoutingModule, UpgradePremiumModule, MatchesListModule, HomeLoginModule],
})
export class MatchesModule {}
