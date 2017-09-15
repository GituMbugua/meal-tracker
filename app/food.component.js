"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FoodComponent = (function () {
    function FoodComponent() {
        this.masterFoodsList = [
            new Food("Chipo", "I got chips for 50 bob!", 200),
            new Food("Ugali Nyama", "Ugali with fried meat, mmhhh!", 600),
            new Food("Sandwich", "Today I just have sandwich and yoghurt.", 300)
        ];
        this.selectedFood = null;
    }
    FoodComponent.prototype.showDetails = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    FoodComponent.prototype.finishedEditing = function () {
        this.selectedFood = null;
    };
    FoodComponent = __decorate([
        core_1.Component({
            selector: 'my-food',
            template: "\n  <div class=\"container-fluid\">\n    <div *ngFor=\"let currentFood of masterFoodsList\">\n      <h3>{{ currentFood.name }}</h3>\n      <p>{{ currentFood.details }}</p>\n      <p>{{ currentFood.calories }} calories</p>\n      <button (click)=\"showDetails(currentFood)\">Change Something</button>\n    </div>\n    <div *ngIf=\"selectedFood\">\n      <h1>Edit Food</h1>\n      <div>\n        <label>Change food name:</label>\n        <input [(ngModel)]=\"selectedFood.name\">\n      </div>\n      <div>\n        <label>Change food details:</label>\n        <input [(ngModel)]=\"selectedFood.details\">\n      </div>\n      <div>\n        <label>Change food calories:</label>\n        <input [(ngModel)]=\"selectedFood.calories\">\n        <button (click)=\"finishedEditing()\">Done</button>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodComponent);
    return FoodComponent;
}());
exports.FoodComponent = FoodComponent;
var Food = (function () {
    function Food(name, details, calories) {
        this.name = name;
        this.details = details;
        this.calories = calories;
    }
    return Food;
}());
exports.Food = Food;
//# sourceMappingURL=food.component.js.map