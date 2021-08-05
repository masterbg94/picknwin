import { NgModule } from '@angular/core';
import {RegisterComponent} from './pages/register.component';
import {RegisterRoutingModule} from './register.routing.module';
import {CustomMaterialModule} from '../custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
    imports: [RegisterRoutingModule, CustomMaterialModule, ReactiveFormsModule],
})
export class RegisterModule {}
