import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { FoodComponent }  from './food.component';
import { FoodListComponent }  from './food-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
     FoodComponent,
     FoodListComponent,
  ],
  bootstrap: [ FoodComponent ]
})

export class FoodModule { }