import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodsList">
    <h3>{{ currentFood.name }}</h3>
    <p>{{ currentFood.details }}</p>
    <p>{{ currentFood.calories }} calories</p>
    <button (click)="clickedButton(currentFood)">Change Something</button>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodsList: Food[];
  @Output() clickSender = new EventEmitter();
  clickedButton(toEdit: Food) {
    this.clickSender.emit(toEdit);
  }
}