import { NgModule } from '@angular/core';
import { HomeLoginComponent } from './home-login.component';
import {CustomMaterialModule} from '../../../modules/custom-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeLoginComponent],
  imports: [
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  exports: [HomeLoginComponent],
})
export class HomeLoginModule {}
