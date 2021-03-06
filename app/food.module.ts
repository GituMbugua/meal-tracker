import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { FoodComponent }  from './food.component';
import { FoodListComponent }  from './food-list.component';
import { EditComponent }      from './edit.component';
import { NewFoodComponent }   from './new-food.component';
import { FilterPipe }         from './filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
     FoodComponent,
     FoodListComponent,
     EditComponent,
     NewFoodComponent,
     FilterPipe,
  ],
  bootstrap: [ FoodComponent ]
})

export class FoodModule { }