import {NgModule} from '@angular/core';

import {LoginComponent} from './pages/login.component';
import {LoginRoutingModule} from './login.routing.module';
import {CustomMaterialModule} from '../custom-material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, CustomMaterialModule],
  exports: []
})
export class LoginModule {
}
