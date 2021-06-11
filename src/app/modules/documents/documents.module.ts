import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsComponent} from './documents.component';
import {DocumentsRoutingModule} from './documents-routing.module';
import {SharedModule} from '../shared.module';
import {UpgradePremiumModule} from '../../shared/components/upgrade-premium/upgrade-premium.module';
import {FaqComponent} from './pages/faq/faq.component';
import {AffiliatesComponent} from './pages/affiliates/affiliates.component';
import {LegalComponent} from './pages/legal/legal.component';
import {PrivacySecurityComponent} from './pages/privacy-security/privacy-security.component';
import {ProvablyFlairComponent} from './pages/provably-flair/provably-flair.component';
import {ResponsibleGamingComponent} from './pages/responsible-gaming/responsible-gaming.component';


@NgModule({
  declarations: [
    DocumentsComponent,
    FaqComponent,
    AffiliatesComponent,
    LegalComponent,
    PrivacySecurityComponent,
    ProvablyFlairComponent,
    ResponsibleGamingComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule,
    UpgradePremiumModule
  ]
})
export class DocumentsModule {
}
