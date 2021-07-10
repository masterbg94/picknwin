import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MainToolbarModule } from './shared/components/main-toolbar/main-toolbar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './shared/components/footer/footer.module';
import {CustomMaterialModule} from './modules/custom-material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainToolbarModule,
    FooterModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
