import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="col-md-5">
    <h2>Your Log:</h2>
    <div *ngFor="let currentFood of childFoodsList">
      <h3>{{ currentFood.name }}</h3>
      <p>Details: {{ currentFood.details }}</p>
      <p>Number of Calories: {{ currentFood.calories }}</p>
      <button class="btn btn-warning" type="button" (click)="clickedButton(currentFood)">Change Something</button>
    </div>
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