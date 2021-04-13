import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from './pages/home.component';
import {HomeLoginModule} from '../../shared/components/home-login/home-login.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, HomeLoginModule],
  exports: [],
})
export class HomeModule {
}
