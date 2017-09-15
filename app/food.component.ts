import { Component }  from '@angular/core';
import { Food }       from './food.model';

@Component({
  selector: 'my-food',
  template: `
  <div class="container-fluid">
    <new-food
      (newMealSender)="addMeal($event)"
    ></new-food>
    <edit
    [childSelectedFood]="selectedFood"
    (finishedEditingSender)="finishedEditing()"
    ></edit>
    <food-list
      [childFoodsList]="masterFoodsList"
      (clickSender)="showDetails($event)"
    ></food-list>
  </div>
  `
})

export class FoodComponent {

  public masterFoodsList: Food[] = [

  ];
  selectedFood: Food = null;
  showDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }
  finishedEditing() {
    this.selectedFood = null;
  }
  addMeal(newMeal: Food) {
    this.masterFoodsList.push(newMeal);
    // from child
  }
}
