import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: "new-food",
  template: `
  <div class="col-md-4">
    <h2>New Meal</h2>
    <div>
      <label>Enter a meal</label>
      <input class="form-control" #newMeal>
    </div><br>
    <div>
      <label>Enter details</label>
      <input class="form-control" #newDetails>
    </div><br>
    <div>
      <label>Number of calories</label>
      <input class="form-control" #newCalories>
    </div>
    <br>
    <button class="btn btn-success" type="button" (click)="newClicked(
      newMeal.value, newDetails.value, newCalories.value);
      newMeal.value = '';
      newDetails.value = '';
      newCalories.value = '';
      ">Add</button>
  </div>
  `
})

export class NewFoodComponent {
  @Output() newMealSender = new EventEmitter;
  newClicked(name: string, details: string, calories: number) {
    var toAdd: Food = new Food(name, details, calories);
    this.newMealSender.emit(toAdd);
  }  
}