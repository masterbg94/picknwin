import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './pages/matches.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MatchesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class MatchesRoutingModule {}
