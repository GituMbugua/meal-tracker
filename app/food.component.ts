import { Component }  from '@angular/core';
import { Food }       from './food.model';

@Component({
  selector: 'my-food',
  template: `
  <div class="container-fluid">
    <food-list
      [childFoodsList]="masterFoodsList"
      (clickSender)="showDetails($event)"
    ></food-list>
    <edit
      [childSelectedFood]="selectedFood"
      (finishedEditingSender)="finishedEditing()"
    ></edit>
    <new-food
      (newMealSender)="addMeal($event)"
    ></new-food>
  </div>
  `
})

export class FoodComponent {

  public masterFoodsList: Food[] = [
    new Food("Chipo", "I got chips for 50 bob!", 200),
    new Food("Ugali Nyama", "Ugali with fried meat, mmhhh!", 600),
    new Food("Sandwich", "Today I just have sandwich and yoghurt.", 300)
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
