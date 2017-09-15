import { Component, Input, Output }  from '@angular/core';
import { Food }       from './food.model';

@Component({
  selector: 'my-food',
  template: `
  <div class="container-fluid">
    <food-list
      [childTaskList]="masterTaskList"
      (clickSender)="showDetails($event)"
    ></food-list>
    <div *ngIf="selectedFood">
      <h1>Edit Food</h1>
      <div>
        <label>Change meal name:</label>
        <input [(ngModel)]="selectedFood.name">
      </div>
      <div>
        <label>Change meal details:</label>
        <input [(ngModel)]="selectedFood.details">
      </div>
      <div>
        <label>Change meal calories:</label>
        <input [(ngModel)]="selectedFood.calories">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
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
}
