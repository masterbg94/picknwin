import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadbordComponent } from './pages/leadbord.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LeadbordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class LeadbordRoutingModule {}
