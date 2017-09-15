import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: "new-food",
  template: `
  <div class="container">
    <h1>New Meal</h1>
    <div>
      <label>Enter a meal</label>
      <input #newMeal>
    </div>
    <div>
      <label>Enter details</label>
      <input #newDetails>
    </div>  
    <div>
      <label>Number of calories</label>
      <input #newCalories>
    </div>
    <button (click)="newClicked(newMeal.value, newDetails.value, newCalories.value)">Add</button>
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