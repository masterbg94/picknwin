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
      path: '/'
    },
    {
      name: 'Affiliates',
      path: '/'
    },
    {
      name: 'Legal',
      path: '/'
    },
    {
      name: 'Privacy & Security',
      path: '/'
    },
    {
      name: 'Provably Fair',
      path: '/'
    },
    {
      name: 'Responsible Gaming',
      path: '/'
    },
  ];
}
