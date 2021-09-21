import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {MainToolbarModule} from './shared/components/main-toolbar/main-toolbar.module';
import {FooterModule} from './shared/components/footer/footer.module';
import {CustomMaterialModule} from './modules/custom-material.module';
import {SharedModule} from './modules/shared.module';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainToolbarModule,
    FooterModule,
    CustomMaterialModule,
    SharedModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }) // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
