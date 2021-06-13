import {NgModule} from '@angular/core';

import {LoginComponent} from './pages/login.component';
import {LoginRoutingModule} from './login.routing.module';
import {CustomMaterialModule} from '../custom-material.module';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from '../../shared/services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CustomMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule {
}
