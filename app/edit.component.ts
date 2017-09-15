import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit',
  template: `
    <div class="col-md-3" *ngIf="childSelectedFood">
      <h2>Edit</h2>
      <div>
        <label>Change meal name:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.name">
      </div><br>
      <div>
        <label>Change meal details:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.details">
      </div><br>
      <div>
        <label>Change meal calories:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.calories">
        <br>
        <button class="btn btn-success" type="button" (click)="finishedEditing()">Done</button>
      </div>
    </div>
  `
})

export class EditComponent { 
  @Input() childSelectedFood: Food;
  @Output() finishedEditingSender = new EventEmitter;
  finishedEditing() {
    this.finishedEditingSender.emit();
  }
}
