import { NgModule } from '@angular/core';
import {RegisterComponent} from './pages/register.component';
import {RegisterRoutingModule} from './register.routing.module';
import {CustomMaterialModule} from '../custom-material.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [RegisterRoutingModule, CustomMaterialModule],
})
export class RegisterModule {}
