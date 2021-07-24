import {Component} from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerMenu = [
    {
      name: 'FAQ',
      path: 'documents'
    },
    {
      name: 'Affiliates',
      path: 'documents/affiliates'
    },
    {
      name: 'Legal',
      path: 'documents/legal'
    },
    {
      name: 'Privacy & Security',
      path: 'documents/privacy-security'
    },
    {
      name: 'Provably Fair',
      path: 'documents/provably-fair'
    },
    {
      name: 'Responsible Gaming',
      path: 'documents/responsible-gaming'
    },
  ];
}
