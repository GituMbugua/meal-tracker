import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="col-md-5">
    <h2 id="title">Your Log:</h2>
    <select type="button" class="btn btn-info" (change)="onChange($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="less">Less than 500</option>
      <option value="more">Greater than 500</option>
    </select>
    <div *ngFor="let currentFood of childFoodsList | filter:selectedFilter">
      <h2>{{ currentFood.name }}</h2>
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
  public selectedFilter: string = "all";
  onChange(option) {
    this.selectedFilter = option;
  }
  clickedButton(toEdit: Food) {
    this.clickSender.emit(toEdit);
  }

}