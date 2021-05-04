import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giveaway-component',
  templateUrl: './giveaway.component.html',
  styleUrls: ['./giveaway.component.scss'],
})
export class GiveawayComponent implements OnInit {
  giveaway = 'assets/img/giveaway-background.svg';

  constructor() {}

  ngOnInit(): void {}
}

