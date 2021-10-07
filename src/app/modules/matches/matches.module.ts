import {NgModule} from '@angular/core';
import {MatchesComponent} from './pages/matches.component';
import {MatchesRoutingModule} from './matches.routing.module';
import {UpgradePremiumModule} from '../../shared/components/upgrade-premium/upgrade-premium.module';
import {MatchesListModule} from '../../shared/components/matches-list/matches-list.module';
import {HomeLoginModule} from '../../shared/components/home-login/home-login.module';
import {GameCategoriesModule} from '../../shared/components/game-categories/game-categories.module';
import {PredictionsModule} from '../../shared/components/predictions/predictions.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [MatchesComponent],
    imports: [
        MatchesRoutingModule,
        UpgradePremiumModule,
        MatchesListModule,
        HomeLoginModule,
        GameCategoriesModule,
        PredictionsModule,
        CommonModule,
    ]
})
export class MatchesModule {}
