import { Component }  from '@angular/core';

@Component({
  selector: 'my-food',
  template: `
  <div class="container-fluid">
    <div *ngFor="let currentFood of masterFoodsList">
      <h3>{{ currentFood.name }}</h3>
      <p>{{ currentFood.details }}</p>
      <p>{{ currentFood.calories }} calories</p>
      <button (click)="showDetails(currentFood)">Change Something</button>
    </div>
    <div *ngIf="selectedFood">
      <h1>Edit Food</h1>
      <div>
        <label>Change food name:</label>
        <input [(ngModel)]="selectedFood.name">
      </div>
      <div>
        <label>Change food details:</label>
        <input [(ngModel)]="selectedFood.details">
      </div>
      <div>
        <label>Change food calories:</label>
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

export class Food {
  constructor(public name: string, public details: string, public calories: number) { }
}