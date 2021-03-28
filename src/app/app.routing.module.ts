import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren: () =>
      import('./modules/matches/matches.module').then((m) => m.MatchesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
