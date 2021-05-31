import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from './pages/profile.component';
import {ProfileBillingComponent} from './pages/profile-billing/profile-billing.component';
import {ProfileNotificationsComponent} from './pages/profile-notifications/profile-notifications.component';
import {ProfileSettingsComponent} from './pages/profile-settings/profile-settings.component';
import {ProfileDashboardComponent} from './pages/profile-dashboard/profile-dashboard.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path:'',
        component: ProfileDashboardComponent
      },
      {
        path: 'billing',
        component: ProfileBillingComponent
      },
      {
        path: 'notifications',
        component: ProfileNotificationsComponent
      },
      {
        path: 'settings',
        component: ProfileSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
