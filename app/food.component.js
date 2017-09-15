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
        this.masterFoodsList = [];
        this.selectedFood = null;
    }
    FoodComponent.prototype.showDetails = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    FoodComponent.prototype.finishedEditing = function () {
        this.selectedFood = null;
    };
    FoodComponent.prototype.addMeal = function (newMeal) {
        this.masterFoodsList.push(newMeal);
        // from child
    };
    FoodComponent = __decorate([
        core_1.Component({
            selector: 'my-food',
            template: "\n  <div class=\"container-fluid\">\n    <new-food\n      (newMealSender)=\"addMeal($event)\"\n    ></new-food>\n    <edit\n    [childSelectedFood]=\"selectedFood\"\n    (finishedEditingSender)=\"finishedEditing()\"\n    ></edit>\n    <food-list\n      [childFoodsList]=\"masterFoodsList\"\n      (clickSender)=\"showDetails($event)\"\n    ></food-list>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodComponent);
    return FoodComponent;
}());
exports.FoodComponent = FoodComponent;
//# sourceMappingURL=food.component.js.map