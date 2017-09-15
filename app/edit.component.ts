import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit',
  template: `
    <div *ngIf="childSelectedFood">
      <h1>Edit Food</h1>
      <div>
        <label>Change meal name:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.name">
      </div>
      <div>
        <label>Change meal details:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.details">
      </div>
      <div>
        <label>Change meal calories:</label>
        <input class="form-control" [(ngModel)]="childSelectedFood.calories">
        <button class="btn btn-success" (click)="finishedEditing()">Done</button>
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
