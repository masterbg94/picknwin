import {NgModule} from '@angular/core';

import {LoginComponent} from './pages/login.component';
import {LoginRoutingModule} from './login.routing.module';
import {CustomMaterialModule} from '../custom-material.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, CustomMaterialModule, CommonModule],
})
export class LoginModule {
}
