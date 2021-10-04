import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from './pages/home.component';
import {HomeLoginModule} from '../../shared/components/home-login/home-login.module';
import {MatchesListModule} from '../../shared/components/matches-list/matches-list.module';
import {UpgradePremiumModule} from '../../shared/components/upgrade-premium/upgrade-premium.module';
import {PromoBannerModule} from '../../shared/components/promo-banner/promo-banner.module';
import {LeadbordTableComponent} from '../../shared/components/leadbord-table/leadbord-table.component';
import {GameCategoriesModule} from '../../shared/components/game-categories/game-categories.module';
import {LeadbordTableModule} from '../../shared/components/leadbord-table/leadbord-table.module';
import {CommonModule} from '@angular/common';
import {PredictionsModule} from '../../shared/components/predictions/predictions.module';

@NgModule({
  declarations: [HomeComponent],
    imports: [
        HomeRoutingModule,
        HomeLoginModule,
        MatchesListModule,
        UpgradePremiumModule,
        PromoBannerModule,
        GameCategoriesModule,
        LeadbordTableModule,
        CommonModule,
        PredictionsModule
    ],
  exports: [
    LeadbordTableComponent
  ],
})
export class HomeModule {}
