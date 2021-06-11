import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DocumentsComponent} from './documents.component';
import {ResponsibleGamingComponent} from './pages/responsible-gaming/responsible-gaming.component';
import {ProvablyFlairComponent} from './pages/provably-flair/provably-flair.component';
import {PrivacySecurityComponent} from './pages/privacy-security/privacy-security.component';
import {LegalComponent} from './pages/legal/legal.component';
import {AffiliatesComponent} from './pages/affiliates/affiliates.component';
import {FaqComponent} from './pages/faq/faq.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DocumentsComponent,
    children: [
      {
        path: '',
        component: FaqComponent
      },
      {
        path: 'affiliates',
        component: AffiliatesComponent
      },
      {
        path: 'legal',
        component: LegalComponent
      },
      {
        path: 'privacy-security',
        component: PrivacySecurityComponent
      },
      {
        path: 'provably-fair',
        component: ProvablyFlairComponent
      },
      {
        path: 'responsible-gaming',
        component: ResponsibleGamingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {
}
