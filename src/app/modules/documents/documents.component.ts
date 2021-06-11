import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documentsMenu = [
    {
      name: 'FAQ',
      route: '/documents',
      icon: 'faq.svg'
    },
    {
      name: 'Affiliates',
      route: 'affiliates',
      icon: 'affiliates.svg'
    },
    {
      name: 'Legal',
      route: 'legal',
      icon: 'legal.svg'
    },
    {
      name: 'Privacy & Security',
      route: 'privacy-security',
      icon: 'privacy-secirity.svg'
    },
    {
      name: 'Provably Fair',
      route: 'provably-fair',
      icon: 'provably-fair.svg'
    },
    {
      name: 'Responsible Gaming',
      route: 'responsible-gaming',
      icon: 'responsible-gaming.svg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
