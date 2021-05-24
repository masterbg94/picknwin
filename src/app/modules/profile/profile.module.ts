import {NgModule} from '@angular/core';

import {ProfileComponent} from './pages/profile.component';
import {ProfileRoutingModule} from './profile.routing.module';
import {ProfileBillingComponent} from './pages/profile-billing/profile-billing.component';
import {ProfileNotificationsComponent} from './pages/profile-notifications/profile-notifications.component';
import {ProfileSettingsComponent} from './pages/profile-settings/profile-settings.component';

@NgModule({
  imports: [ProfileRoutingModule],
  declarations: [
    ProfileComponent,
    ProfileBillingComponent,
    ProfileNotificationsComponent,
    ProfileSettingsComponent
  ]
})
export class ProfileModule {
}
