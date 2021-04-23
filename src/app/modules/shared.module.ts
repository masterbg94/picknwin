import {NgModule} from '@angular/core';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [AngularSvgIconModule]
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
