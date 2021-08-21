import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AngularSvgIconModule} from 'angular-svg-icon';
import {MainToolbarDropdownComponent} from '../shared/components/main-toolbar/main-toolbar-dropdown/main-toolbar-dropdown.component';

@NgModule({
  declarations: [
    MainToolbarDropdownComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    RouterModule
  ],
  exports: [AngularSvgIconModule, MainToolbarDropdownComponent]
})
export class SharedModule {
  // constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'SharedModule is already loaded. Import it in the root module only'
  //     );
  //   }
  // }
}
