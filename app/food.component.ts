import { Component } from '@angular/core';

@Component({
  selector: 'my-food',
  template: `
 
  `
})

export class FoodComponent {
  public foods: Food[] = [ ];
}

export class Food {
  constructor(public name: string, public details: string, public calories: number) { }
}