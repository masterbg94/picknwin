/*
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainToolbarComponent} from '../shared/components/main-toolbar/main-toolbar.component';

@NgModule({
  // Place all forRoot() imports here
  // Translate module here to prevent loading app module, but can add in app module also
  imports: [CommonModule],
  // Place all services/providers/injection tokens here
  providers: [
    // Provide your app wide services here
  ],
  declarations: [MainToolbarComponent],
  exports: [MainToolbarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the root module only'
      );
    }
  }
}
*/
