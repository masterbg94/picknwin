import { NgModule } from '@angular/core';

import { LeadbordComponent } from './pages/leadbord.component';
import { LeadbordRoutingModule } from './leadbord.routing.module';
import { LeadbordTableModule } from '../../shared/components/leadbord-table/leadbord-table.module';
import { UpgradePremiumModule } from '../../shared/components/upgrade-premium/upgrade-premium.module';
import { HomeLoginModule } from '../../shared/components/home-login/home-login.module';
import { GiveawayModule } from '../../shared/components/giveaway/giveaway.module';
import {CommonModule} from '@angular/common';
import {LeadTableModule} from '../../shared/components/lead-table/lead-table.module';

@NgModule({
  declarations: [LeadbordComponent],
    imports: [
        LeadbordRoutingModule,
        LeadbordTableModule,
        UpgradePremiumModule,
        HomeLoginModule,
        GiveawayModule,
        CommonModule,
        LeadTableModule,
    ],
})
export class LeadbordModule {}
