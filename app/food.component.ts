import { Component } from '@angular/core';

@Component({
  selector: 'my-food',
  template: `
  <div class="container-fluid">
    <div *ngFor="let currentFood of masterFoodsList">
      <h3>{{ currentFood.name }}</h3>
      <p>{{ currentFood.details }}</p>
      <p>{{ currentFood.calories }} calories</p>
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
}

export class Food {
  constructor(public name: string, public details: string, public calories: number) { }
}