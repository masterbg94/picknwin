import {NgModule} from '@angular/core';

import {ProfileComponent} from './pages/profile.component';
import {ProfileRoutingModule} from './profile.routing.module';
import {ProfileBillingComponent} from './pages/profile-billing/profile-billing.component';
import {ProfileNotificationsComponent} from './pages/profile-notifications/profile-notifications.component';
import {ProfileSettingsComponent} from './pages/profile-settings/profile-settings.component';
import {SharedModule} from "../shared.module";
import {UpgradePremiumModule} from "../../shared/components/upgrade-premium/upgrade-premium.module";
import {ProfileDashboardComponent} from './pages/profile-dashboard/profile-dashboard.component';

@NgModule({
  imports: [
    ProfileRoutingModule,
    SharedModule,
    UpgradePremiumModule
  ],
  declarations: [
    ProfileComponent,
    ProfileBillingComponent,
    ProfileNotificationsComponent,
    ProfileSettingsComponent,
    ProfileDashboardComponent
  ]
})
export class ProfileModule {
}
