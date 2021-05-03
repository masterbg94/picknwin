import { Component } from '@angular/core';

@Component({
  selector: 'app-predictions-component',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent {
  tabValue = 'Predictions'
  changeTab(event){
    console.log(event.tab.textLabel);
    this.tabValue = event.tab.textLabel;
  }
}
