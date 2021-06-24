import {Component} from '@angular/core';

@Component({
  selector: 'app-game-categories-component',
  templateUrl: './game-categories.component.html',
  styleUrls: ['./game-categories.component.scss'],
})
export class GameCategoriesComponent {
  collapsed = false;

  selectCategory(x) {
    alert(`selected category: ${x}`);
  }

  collapse() {
    this.collapsed = !this.collapsed;
  }
}
