import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guards/auth.guard';

const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'leadbord',
    loadChildren: () =>
      import('./modules/leadbord/leadbord.module').then(
        (m) => m.LeadbordModule
      ),
  },
  {
    path: 'matches',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/matches/matches.module').then((m) => m.MatchesModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'documents',
    loadChildren: () =>
      import('./modules/documents/documents.module').then((m) => m.DocumentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
